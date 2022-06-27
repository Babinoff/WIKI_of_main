import clr
from math import *
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *
clr.AddReference('RevitAPI')
from Autodesk.Revit.DB import *
from Autodesk.Revit.DB.Analysis import *
import Autodesk
DPoint = Autodesk.DesignScript.Geometry.Point
DPolyCurve = Autodesk.DesignScript.Geometry.PolyCurve
DCurve = Autodesk.DesignScript.Geometry.Curve
DSurface = Autodesk.DesignScript.Geometry.Surface
DGeometry = Autodesk.DesignScript.Geometry.Geometry
DSolid = Autodesk.DesignScript.Geometry.Solid
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager
doc = DocumentManager.Instance.CurrentDBDocument
uiapp = DocumentManager.Instance.CurrentUIApplication
app = uiapp.Application
uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)
from System.Collections.Generic import *
spaces = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_AnalyticSpaces).WhereElementIsNotElementType().ToElements()
#surfaces = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_AnalyticSurfaces).WhereElementIsNotElementType().ToElements()
surfaces = FilteredElementCollector(doc).OfClass(EnergyAnalysisSurface).WhereElementIsNotElementType().ToElements()
#------------------ВХОДНЫЕ ДАННЫЕ-----------------
par_napravl = IN[1]
par_koef_s = IN[2]
par_id_room = IN[3]
par_name_room = IN[4]
par_num_room = IN[5]
#-------------------------ФУНКЦИИ---------------------
def storona(angle):	
	angle=round(angle,4)
	if angle>5.8905 or angle<=0.3927:
		orient_s = "С"
	elif angle>0.3927 and angle<=1.1781:
		orient_s = "СВ"
	elif angle>1.1781 and angle<=1.9635:
		orient_s = "В"
	elif angle>1.9635 and angle<=2.7489:
		orient_s = "ЮВ"
	elif angle>2.7489 and angle<=3.5343:
		orient_s = "Ю"
	elif angle>3.5343 and angle<=4.3197:
		orient_s = "ЮЗ"
	elif angle>4.3197 and angle<=5.1051:
		orient_s = "З"
	elif angle>5.1051 and angle<=5.8905:
		orient_s = "СЗ"
	if orient_s in ["С","В","СВ","СЗ"]:
		koef_s = 1.1
	elif orient_s in ["З","ЮВ"]:
		koef_s = 1.05	
	elif orient_s in ["Ю","ЮЗ"]:
		koef_s = 1
	return koef_s
def storona2(angle):	
	angle=round(angle,4)
	if angle>5.8905 or angle<=0.3927:
		orient_s = "С"
	elif angle>0.3927 and angle<=1.1781:
		orient_s = "СВ"
	elif angle>1.1781 and angle<=1.9635:
		orient_s = "В"
	elif angle>1.9635 and angle<=2.7489:
		orient_s = "ЮВ"
	elif angle>2.7489 and angle<=3.5343:
		orient_s = "Ю"
	elif angle>3.5343 and angle<=4.3197:
		orient_s = "ЮЗ"
	elif angle>4.3197 and angle<=5.1051:
		orient_s = "З"
	elif angle>5.1051 and angle<=5.8905:
		orient_s = "СЗ"	
	return orient_s	
# def get_type(obj):
# 	try:
# 		objtype = oobj.Symbol
# 	except:
# 		try:
# 			objtype = oobj.WallType
# 		except:
# 			try:
# 				objtype = oobj.FloorType
# 			except:	
# 				try:
# 					objtype = oobj.RoofType
# 				except:
# 					objtype = None				
# 	return objtype
# def get_K(obj,stk):
# 	objtype = get_type(obj)	
# 	try:		
# 		kobj = objtype.LookupParameter(park).AsDouble()
# 		if kobj is None or kobj==0:
# 			K = stk
# 		else:
# 			K = kobj
# 	except:
# 		K = stk
# 	return K
# def get_K2(obj,stk,par2):
# 	try:		
# 		K = getparam(obj,par2)
# 	except:
# 		K = stk
# 	return K	
# def get_obj_from_link(surface,linkwalls):
# 	nameobj = surface.OriginatingElementDescription
# 	objid = nameobj[nameobj.find("[")+1:nameobj.find("]")]
# 	obj1 = None
# 	try:
# 		lk = surface.CADLinkUniqueId
# 		linkid1 = str(doc.GetElement(lk).Id)
# 		i=0
# 		for linkid2 in linkids:
# 			if linkid1==linkid2:
# 				for wall in linkwalls[i]:
# 					if str(wall.Id) == objid:
# 						obj1 = wall
# 			i=i+1
# 	except:
# 		errors.append(type)
# 	return obj1
# def getparam(el,LookupValue):
# 	p = el.LookupParameter(LookupValue)
# 	ty = p.StorageType.ToString()
# 	if ty == 'ValueString':
# 		p = p.AsValueString()
# 	elif ty == 'String':
# 		p = p.AsString()
# 	elif ty == 'Double':
# 		p = p.AsDouble()
# 	elif ty == 'Integer':
# 		p = p.AsInteger()
# 	elif ty == 'ElementId':
# 		p = p.AsElementId()
# 	return p
#---------------ВНЕСЕНИЕ ИНФОРМАЦИИ В ПОВЕРХНОСТИ-------------	
def get_angle_to_south(direction):
	angleToSouth = direction.AngleTo(-XYZ.BasisY);
	return angleToSouth;


test = []
#test.append(surfaces)
#test.append(spaces)
position = doc.ActiveProjectLocation.GetProjectPosition(XYZ.Zero);
test.append({"EastWest": position.EastWest, "NorthSouth": position.NorthSouth, "Angle": position.Angle})
TransactionManager.Instance.EnsureInTransaction(doc)	
for surface in surfaces:
	surf_enum = surface.get_Geometry(Options()).GetEnumerator()
	surf_enum.Reset()
	surf_enum.MoveNext()
	surf_solid = surf_enum.Current
	surf_normal = surf_solid.Faces[0].FaceNormal.Normalize()
	surf_yvector = surf_solid.Faces[0].YVector.Normalize()
	surf_angle_to_south = get_angle_to_south(surf_normal)
	test.append(surf_angle_to_south)
	type = str(surface.SurfaceType)
	#test.append(type)
	if EnergyAnalysisSurfaceType.ExteriorWall == type:
		opens = surface.GetAnalyticalOpenings()	
		#test.append(opens)
		#------------ПОЛУЧЕНИЕ ПАРАМЕТРОВ----------
		space = surface.GetAnalyticalSpace()
		if space:
			#test.append(space)
			#test.append(space.CADObjectUniqueId)
			space_name_param = space.get_Parameter(BuiltInParameter.SPACE_ASSOC_ROOM_NAME).AsString()
			test.append(space_name_param)
			#space_area_param = space.get_Parameter(BuiltInParameter.SPACE_AREA).AsDouble()
			#test.append(space_name_param)
			space_desc = surface.OriginatingElementDescription
			space_desc_wall_id = space_desc.split(" ")[-1]
			space_desc_wall_id = space_desc_wall_id.replace("[", "")
			space_desc_wall_id = space_desc_wall_id.replace("]", "")
			test.append(space_desc_wall_id)
			# room = doc.GetElement(space.CADObjectUniqueId)
			room = None
			space_bbox = space.get_BoundingBox(doc.ActiveView)
			#test.append(space_bbox)
			space_outline = Outline(space_bbox.Min, space_bbox.Max)
			space_box_filter = BoundingBoxIntersectsFilter(space_outline)
			rooms_by_box = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Rooms).WhereElementIsNotElementType().WherePasses(space_box_filter).ToElements()
			#test.append(rooms_by_box)
			for roombb in rooms_by_box:
				room_name_and_number = roombb.LookupParameter("Имя").AsString() + " " + roombb.LookupParameter("Номер").AsString()
				if room_name_and_number in space_name_param:
					room = roombb
					break
			#test.append(room)
			if room and room.LookupParameter("Имя") and room.LookupParameter("Номер"):
				#test.append(room)
				id_room = str(room.Id)
				name_room = room.LookupParameter("Имя").AsString()
				num_room = room.LookupParameter("Номер").AsString()
				azimuth = surface.Azimuth
				test.append({str(room.Id.IntegerValue): surface.Azimuth})
				koef_s = 1
				koef_s = storona(surf_angle_to_south)
				napravl = storona2(surf_angle_to_south)
				#-----------ВНЕСЕНИЕ ПАРАМЕТРОВ------------------
				surface.LookupParameter(par_id_room).Set(id_room)
				surface.LookupParameter(par_name_room).Set(name_room)
				surface.LookupParameter(par_num_room).Set(num_room)
				surface.LookupParameter(par_napravl).Set(napravl + " " + str(surf_angle_to_south))
				surface.LookupParameter(par_koef_s).Set(koef_s)
				for open in opens:
					open.LookupParameter(par_id_room).Set(id_room)
					open.LookupParameter(par_name_room).Set(name_room)
					open.LookupParameter(par_num_room).Set(num_room)
					open.LookupParameter(par_napravl).Set(napravl)
					open.LookupParameter(par_koef_s).Set(koef_s)
TransactionManager.Instance.TransactionTaskDone()	

#------------------------------------------------------
OUT = test, "ok"
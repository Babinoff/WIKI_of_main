

import clr
import sys

pyt_path = r'C:\Program Files (x86)\IronPython 2.7\Lib'
sys.path.append(pyt_path)

import traceback

# Import ToDSType(bool) extension method
clr.AddReference("RevitNodes")
import Revit
clr.ImportExtensions(Revit.Elements)

# Import DocumentManager and TransactionManager
clr.AddReference("RevitServices")
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

# Import RevitAPI
clr.AddReference("RevitAPI")
import Autodesk
from Autodesk.Revit.DB import *

doc = DocumentManager.Instance.CurrentDBDocument
uiapp = DocumentManager.Instance.CurrentUIApplication
app = uiapp.Application

#The inputs to this node will be stored as a list in the IN variable.
dataEnteringNode = IN

def TryGetRoom(room, phase):
	try:
		inRoom = room.Room[phase]
	except:
		inRoom = None
		pass
	return inRoom
test = []
def FamiliesInRoom(_room, _families, _doc):
	outList = []
	for family in _families:
		try:
			pt = family.Location.Point
			if _room.IsPointInRoom(pt):
				outList.append(family)
			else:
				for phase in _doc.Phases:
					inRoom = TryGetRoom(family, phase)
					if inRoom != None and inRoom.ToDSType(True).Name == _room.ToDSType(True).Name:
						outList.append(family)
		except:
			test.append([traceback.format_exc(), family])
	return outList

try:
	errorReport = None
	families = []
	for i in IN[0]:
		families.append(UnwrapElement(i))
	
	rooms = []
	for i in IN[1]:
		if UnwrapElement(i).Area > 0:
			rooms.append(UnwrapElement(i))
	
	outData = [[] for i in range(len(rooms))]
	for index, room in enumerate(rooms):
		outData[index].extend(FamiliesInRoom(room, families, doc))
except:
	# if error accurs anywhere in the process catch it
	errorReport = traceback.format_exc()

room_param_names = []
for i,I in enumerate(IN):
    if i > 3:
        room_param_names.append(I)

def GetParamsListValue(bool_add_names, room_param_names):
	room_param_str_list = []
	if bool_add_names:
		for rpn in room_param_names:
			room_param = room.LookupParameter(rpn)
			if room_param.StorageType == StorageType.String:
				room_param_str_list.append(rpn+": "+room_param.AsString())
			elif room_param.StorageType == StorageType.Double:
				room_param_str_list.append(rpn+": "+str(room_param.AsDouble()))
			elif room_param.StorageType == StorageType.Integer:
				room_param_str_list.append(rpn+": "+str(room_param.AsInteger()))
			elif room_param.StorageType == StorageType.ElementId:
				room_param_str_list.append(rpn+": "+"ID: "+str(room_param.AsElementId().IntegerValue))
			else:
					room_param_str_list.append("")
	else:
		for rpn in room_param_names:
			room_param = room.LookupParameter(rpn)
			if room_param.StorageType == StorageType.String:
				room_param_str_list.append(room_param.AsString())
			elif room_param.StorageType == StorageType.Double:
				room_param_str_list.append(str(room_param.AsDouble()))
			elif room_param.StorageType == StorageType.Integer:
				room_param_str_list.append(str(room_param.AsInteger()))
			elif room_param.StorageType == StorageType.ElementId:
				room_param_str_list.append("ID: "+str(room_param.AsElementId().IntegerValue))
			else:
				room_param_str_list.append("")
	return room_param_str_list

TransactionManager.Instance.EnsureInTransaction(doc)
for room,elems in zip(rooms,outData):
	room_param_str_list = GetParamsListValue(IN[3],room_param_names)
	if len(room_param_str_list)	== 1:
		room_param = room_param_str_list[0]
	else:	
		room_param = ", ".join(room_param_str_list)		
	try:
				
		[e.LookupParameter(IN[2]).Set(room_param) for e in elems]
	except:
		errorReport = "В выбранных категориях нет необходимого параметра" + "error log: " + traceback.format_exc()
TransactionManager.Instance.TransactionTaskDone()

#Assign your output to the OUT variable
if errorReport == None:
	OUT = outData, test
else:
	OUT = errorReport



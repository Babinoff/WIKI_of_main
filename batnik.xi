mkdir $(TargetDir)

mkdir $(TargetDir)ru-RU

mkdir $(TargetDir)en-US
COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)ru-RU

COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)en-US

DEL /f $(TargetDir)BimReport.xaml


Set BASE="C:\git\pop-ups-catcher\bin\R2020\"
Set TARGET="C:\Users\a.n.babinov\AppData\Roaming\Nika_RD_Data\Nika_RD_Dll"

COPY /Y %BASE%PopUpsCatcher_2020.dll %TARGET%


Set BASE="C:\git\nika_laucher\bin\Debug\"
Set TARGET_LAUNCH="C:\ProgramData\Autodesk\Revit\Addins\2021\NIKA_RD\"
Set TARGET_Libraries="C:\Users\a.n.babinov\AppData\Roaming\Nika_RD_Data\Nika_RD_Libraries\"

echo F|XCOPY %BASE%NikaLauncher.dll %TARGET_LAUNCH%NikaLauncher.dll /Y /I /F
echo F|XCOPY %BASE%Nika.Core.Updater.dll %TARGET_Libraries%Nika.Core.Updater.dll /Y /I /F
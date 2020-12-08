mkdir $(TargetDir)

mkdir $(TargetDir)ru-RU

mkdir $(TargetDir)en-US
COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)ru-RU

COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)en-US

DEL /f $(TargetDir)BimReport.xaml



Set BASE="C:\git\pop-ups-catcher\bin\R2020\"
Set TARGET="C:\Users\a.n.babinov\AppData\Roaming\Nika_RD_Data\Nika_RD_Dll"

COPY /Y %BASE%PopUpsCatcher_2020.dll %TARGET%

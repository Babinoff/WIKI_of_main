mkdir $(TargetDir)

mkdir $(TargetDir)ru-RU

mkdir $(TargetDir)en-US
COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)ru-RU

COPY /Y $(TargetDir)BimReport.xaml $(TargetDir)en-US

DEL /f $(TargetDir)BimReport.xaml

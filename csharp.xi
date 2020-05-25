Read Write Lines .
  |File.WriteAllLines(path, string[])|
  |File.ReadAllLines(path, string[])|
  |File.AppendAllLines(path, string[])|
Write ONE Line .
  |File.AppendAllText({string} path, {string} contents)|
List<string> to single string .
  |CurrentLogState = String.Join(", ", link_ids_list1.ToArray());|
СomboBox on WPF .
  |ComboLinkDocInst.ItemsSource = MainViewModel.GetLinksInstances();|
  |ComboLinkDocInst.SelectedIndex = 0;|
СomboBox on WPF if Sorce is Dictionary .
  |DisplayMemberPath="Key"|
  |SelectedValuePath="Value"|

List compreheshens lol .
  | list_of_foo.ForEach(bar => all_foo_Id.Add(bar.Id));

List of string with values .
  | List<string> mylist = new List<string>(new string[] { "element1", "element2", "element3" });

List sorted list by property .
  | IEnumerable<Face> sorted_all_faces = all_faces.OrderBy(face => face.Area);

switch case .
  | switch (caseSwitch)
  |   {
  |        case 1:
  |            Console.WriteLine("Case 1");
  |            break;
  |        case 2:
  |            Console.WriteLine("Case 2");
  |            break;
  |        default:
  |            Console.WriteLine("Default case");
  |            break;
  |    }
[unique object hashset#] 
need to owerrite 2 system metods .
  example class: .
  |  public class Quotes{ 
  |  public string symbol; 
  |  public string extension
  |  public override bool Equals(object obj)
  |  {
  |      Quotes q = obj as Quotes;
  |      return q != null && q.symbol == this.symbol && q.extension == this.Extension;
  |  }
  |  public override int GetHashCode()
  |  {
  |      return this.symbol.GetHashCode() ^ this.extension.GetHashCode();
  |  }
}

Convert double to int .
  | Convert.ToInt32(double)

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

test if object can cast to type .
  | const something = "test"
  | var myObject = something as String; 
  | if (myObject != null)
  | {
  |   // successfully cast .
  | }
  | else
  | {
  |   // cast failed .
  | }

Conver IEnumerable to List .
  | ConnectorSet cnn_set = cnn_manager.Connectors;
  | List<Connector> asList = cnn_set.Cast<Connector>().ToList();
  | IEnumerable myEnumerable = GetUser();
  | List<User> myList = myEnumerable.Cast<User>().ToList();

catch (Exception exception) .
  |	{
  |		var st = new StackTrace(exception, true);
  |		var frame = st.GetFrame(0);
  |		var line = frame.GetFileLineNumber();
  |		//MessageBox.Show($"__Entitlement Error__: {e.Message} line: {line}");
  |	}
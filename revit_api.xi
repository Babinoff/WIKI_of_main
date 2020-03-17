  | def DocumentsParams():
    | param_bind_map = doc.ParameterBindings
    | iterator = param_bind_map.ForwardIterator()
    | iterator.Reset()
    |while iterator.MoveNext():| .MoveNext() returns True if the iterator was successfully moved, False will be returned it the iterator has reached the end of the set
      |if iterator.Key is not None:| iterator.Key is Parameter Definition https://www.revitapidocs.com/2020/8fe04f37-04e1-9e93-ffdb-e3900908e42a.htm
        | doc_param_test.append(iterator.Key.Name) 
      | else:
        | doc_param_test.append(iterator)
		
get Element Name .
  |{lng:ip,c#}Element.Name.GetValue(elementType)| this is a strong way, then simple .Name attribute fails
  work for ElementType, Element, and all dependency classes of Element

compare Category and BuiltInCategory .
  |{dir(BuiltInCategory.OST_Parts)}
  | test_element.Category.Id.IntegerValue == BuiltInCategory.OST_Parts.GetHashCode() 

custom rule for WherePasses filter .
  | param = UnwrapElement(IN[0]).LookupParameter("АБН_elem_link_category")
  | provider = ParameterValueProvider(param.Id)
  | evaluator = FilterStringEquals();
  | rule = FilterStringRule(provider, evaluator, "Стены", False);
  | filter = ElementParameterFilter(rule);
  | elems = FilteredElementCollector(doc).OfClass(DirectShape).WherePasses(filter)

c# run transaction in not command class .
	need create class with api interface 
  | class ParameterCreator : IExternalEventHandler
		need create subclass of Execute
  |    public void Execute(UIApplication app) { function_with_transaction() }
			in that class you can run you function and create transaction inside it
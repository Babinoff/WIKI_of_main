[#lists] [#dicts] [#strings] [#def function] [#json]

[lists#] .
  get Range of list .
    | list[start index:end index]
    | list[44:49]
  list insert .
    | list.insert(index, obj)
  range() in Python 3 .
    | range(3) [0,1,2]
    | range(1,4) [0,1,2,3]
    | range(0, 10, 2) [0,2,4,6,8]
    | range(0, -3, -1) [0,-1,-2]
  xrange() in Python 2 .
    same as range in Python 3 .
  list1.extend(list2) .
    add list2 to end of list1 .
  list sort by index .
    | import operator
    | sorted(test_list, key=operator.itemgetter(1))
    | sorted(test_list, key=operator.itemgetter(1), reverse=True)
    key=operator.itemgetter(1) - index of sorting key
  slice notation .
    | [start:stop:step]
    | a[::-1]    
		# all items in the array, reversed
    | a[1::-1]   
		# the first two items, reversed
    | a[:-3:-1]  
		# the last two items, reversed
    | a[-3::-1]  
		# everything except the last two items, reversed

[dicts#] .
  dict update .
    |{lng:py} my_dict = {'key': 'value'}
    |{lng:py} my_dict.update({'another_key': 'another_value'})  # Дополняем.}


[strings#] .
  string from list .
    | (";").join([string,string,string])
  insert in string .
    | "Shepherd {} is {} years old.".format(shepherd, age)
    |print(stuff_in_string)| |Shepherd Mary is 32 years old.|


[def function#] .
  optional parameters .
  {def add_list(els, kode_param, value_param = "value" )} value_param = is optional
  if nead to go with it funct start like {add_list(..., ..., value_param = "value123" )}
  .|{def add_list(*value_params)| *value_params means like {value_params} in code will be a list of params of any length
  {for value_param in value_params}


[json#] .
  dict to json .
  {import json}
    |{x = { "name": "John","age": 30,}| .
      |y = json.dumps(x, sort_keys=True, indent=4))| dict to json string
        {indent=4} make lines
        {sort_keys=True} objects exact in same order
  json to dict .
    |xx ='{ "name":"John", "age":30}'|
      |yy = json.loads(xx)| json string to dict
  dict to json file .
    {with open(path_to_json, 'w') as json_file:}
      {json.dump(model_clas_dics, json_file, indent=4, sort_keys=True)}


[convert#] .
  convert num to string with fix character from point .
    |["{0:.2f}".format(float(l)) for l in list]|


UnicodeEncodeError: ('unknown', '\x00', 0, 1, '') .
  | "=СУММ(1:1)".encode('utf-8')


EXCEL OLEDB .
  Connect EXCEL sheet with OLEDB using connection string .
  | connectionString = 'Provider=Microsoft.ACE.OLEDB.12.0; Data Source=C:\\code\\git\\Classification-function\\Class_test_kod_for_search.xlsx; Extended Properties=Excel 12.0; HDR=YES'
  | conn = OleDbConnection(connectionString)
  | conn.Open()
  | objDA = OleDbDataAdapter("select * from [Sheet1$]", conn)
  | excelDataSet = DataSet()
  | objDA.Fill(excelDataSet)
  | excel_data = excelDataSet.Tables[0]


except to string .
  | except Exception as e:
    | s = str(e)
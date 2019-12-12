lists .
  get Range of list .
    | list[start index:end index]
    | list[44:49]
  list insert .
    | list.insert(index, obj)

dicts .
  dict update .
    |{lng:py} my_dict = {'key': 'value'}
    |{lng:py} my_dict.update({'another_key': 'another_value'})  # Дополняем.}

strings .
  string from list .
    | (";").join([string,string,string])
  insert in string .
    | "Shepherd {} is {} years old.".format(shepherd, age)
    |print(stuff_in_string)| |Shepherd Mary is 32 years old.|

def function .
  optional parameters .
  {def add_list(els, kode_param, value_param = "value" )} value_param = is optional
  if nead to go with it funct start like {add_list(..., ..., value_param = "value123" )}
  .|{def add_list(*value_params)| *value_params means like {value_params} in code will be a list of params of any length
  {for value_param in value_params}

json .
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

convert .
  convert num to string with fix character from point .
    |["{0:.2f}".format(float(l)) for l in list]|

UnicodeEncodeError: ('unknown', '\x00', 0, 1, '') .
  | "=СУММ(1:1)".encode('utf-8')
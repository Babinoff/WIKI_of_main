cheak type .
  | const test = "test str";
  | if (typeof test == "string") 
  | 	{
  | 		console.log("we a found a string") .
  | 	};
object has property .
  | const test_obj = {foo: "is the first", bar: "is second"};
  | if (test_obj.hasOwnProperty('foo')) 
  | 	{
  | 		console.log("we a found a 'foo' property in som object") .
  | 	};
string contains .
  | 'Синий кит'.includes('синий'); // вернёт false
js create property by value .
  | myObj[a] = b
js test object has key .
  | if ('key' in myObj)
		Be careful! The in operator matches all object keys, including those in the object's prototype chain
  | myObj.hasOwnProperty('key')
		will only return true if key is available on myObj directly:
// use("userstatistics");
// db.sessions
//   .aggregate(
//     [
// 		{ $match: { userAdName: "Семечков Павел" } },
//       {
//         $project: { userAdName: 1, startTime: 1, idlingTime: 1, commonTime: 1 },
//       },
//       {
//         $addFields: {
//           differenceTime: { $subtract: ["$commonTime", "$idlingTime"] },
//         },
//       },
//       { $sort: { differenceTime: -1 } },
//     ],
//     { allowDiskUse: true }
//   )



//   use("userstatistics");
//   db.sessions
// 	.aggregate(
// 	  [
// 		{
// 		  $project: { userAdName: 1, startTime: 1, idlingTime: 1, commonTime: 1 },
// 		},
// 		{
// 		  $addFields: {
// 			differenceTime: { $subtract: ["$commonTime", "$idlingTime"] },
// 		  },
// 		},
// 		{ $sort: { differenceTime: -1 } },
// 	  ],
// 	  { allowDiskUse: true }
// 	)

//   use("userstatistics");
//   db.sessions
// 	.aggregate(
// 	  [
// 		{
// 		  $project: { userAdName: 1, startTime: 1, idlingTime: 1, commonTime: 1 },
// 		},
// 		{
// 		  $addFields: {
// 			differenceTime: { $subtract: ["$commonTime", "$idlingTime"] },
// 		  },
// 		},
// 		{ $sort: { differenceTime: -1 } },
// 	  ],
// 	  { allowDiskUse: true },
// 	  {
// 		$filter: {
// 			input: this,
// 			as: "differenceTime",
// 			cond: { $gte: ["$$differenceTime", 1000] }
// 		}
// 		},
// 	)


//   { $where: "this.commonTime < this.idlingTime" },


//   {
// 	$filter: {
// 		input: this,
// 		as: "differenceTime",
// 		cond: { $gte: ["$$differenceTime", 1000] }
// 	}
// 	},
// {
// 	$filter: {
// 		input: list,
// 		as: "commonTime",
// 		cond: { $gte: ["$$commonTime", 1000] }
// 	}
// };

// use("userstatistics");
// db.sessions.aggregate(
//   [
//     {
//       $project: { 
// 		  userAdName: 1,
// 		  startTime: 1,
// 		  idlingTime: 1,
// 		  commonTime: {
// 			$filter: {
// 			  input: "$commonTime",
// 			  as: "ct",
// 			  cond: { $gte: ["$$commonTime", 1000] },
// 			},
// 		  },
// 		},
//     },
//     {
//       $addFields: {
//         differenceTime: { $subtract: ["$commonTime", "$idlingTime"] },
//       },
//     },
//     { $sort: { differenceTime: -1 } },
//     { $limit: 15 },
//   ],
//   { allowDiskUse: true }
// );

// {
// 	$filter: {
// 		input: "$items",
// 		as: "item",
// 		cond: { $gte: ["$$item.price", 100] }
// 	}
// }

// use("userstatistics");
// db.sessions.aggregate([
//   {
//     $project: {
//       items: {
//         $filter: {
//           input: "$items",
//           as: "item",
//           cond: { $gte: ["$$item.price", 100] },
//         },
//       },
//     },
//   },
// ]);


// use('userstatistics');
// db.sessions.find().forEach(
//     function (x) {
//         db.test.insert(x)
//     }
// );

// use('userstatistics');
// db.test.remove({ $where: "this.commonTime < 1000" }
// );



/// OUT найти, посмотреть и удалить

use('userstatistics');
db.sessions1147.find( { $where: function() {
	if (this.commonTime - this.idlingTime > 200)
		if (this.)
		return this
} } )

use('userstatistics');
db.sessions1147.remove( { $where: function() {
if (this.commonTime - this.idlingTime > 400)
	return this.commonTime
} } );




use('userstatistics');
db.sessions1147.find( { $where: function() {
	return (this.centralPath.includes('id-1147'))
} } ).count()


//    use('userstatistics');
//    db.sessions.find( { $where: function() {
// 	   return (this.commonTime > 2000)
// 	} } );

// 	use('userstatistics');
// 	db.sessions.remove( { $where: function() {
// 		return (this.commonTime > 2000)
// 	 } } );


//query bar filter:
{ $where : function() {
	return (this.centralPath.includes('id-1116'))
} }

use('userstatistics');
db.analyzing.find().forEach(
    function (x) {
        value = x.centralPath;
        if(value != null){
          db.analyzing.deleteOne({ "_id" : x._id })
        }
    }
);

use('userstatistics');
db.sessions.find( { $where: function() {
	return (this.centralPath.includes('id-1116'))
} } ).count()

use('userstatistics');
db.sessions.find().forEach(
    function (x) {
        value = x.centralPath;
        if(value.includes('id-1116')){
          db.sessions1116V1.insertOne(x)
		  db.sessions.deleteOne({ "_id" : x._id })
        }
    }
);

use('userstatistics');
db.sessions1147.find().forEach(
    function (sesion) {
        elements = sesion.elementsCreated;
		if (elements != null){
			elements.forEach( 
				function (element)
				{
					return element.nameCategory == "Воздуховоды"
				}
			)
		}
    }).count()


	use('userstatistics');
	db.sessions1147.find( { $where: function() {
		let test = []
		elements = this.elementsCreated;
		if (elements != null){
			for (const element in elements) {
				if (element.nameCategory == "Воздуховоды")
				{
					test.push(element)
				}
			}
		}
		return test
	} } )


	use('userstatistics');
	db.sessions1147.find( { $where: function() {
		let test = []
		elements = this.elementsCreated;
		if (elements != null){
			elements.forEach(
				function (element)
				{
					return element.nameCategory == "Воздуховоды"
				}
			)
		}
	} } ).count()


	use('userstatistics');
	db.sessions1147.find( { $where: function() {
		const test = this.elementsCreated
		if (test != null){
			test.forEach(function (element)
			{
				if (element.nameCategory == "Окна")
					return element.nameCategory
			})
		}
	}} ).count()

	use('userstatistics');
	test_elements = []
	users = new Set();
	category_name = "Окна"
	all_time = 0
	elements_count = 0
	db.sessions1147.find().forEach(
		function (x) {
			test = x.elementsCreated
			if (test != null){
				test.forEach(function (element)
				{
					if (element.nameCategory == category_name)
						{
							elements_count += element.count
							users.add(x.userAdName)
							all_time += x.commonTime - x.idlingTime
						}
				})
			}
		}
	)
	console.log({all_time: all_time})
	console.log({elements_count: elements_count})
	db.analyzing.insertOne({category_name: category_name, users: Array.from(users), all_time: all_time, elements_count: elements_count})

	departament_name = "Конструкторский отдел"
	departament_name = "Архитектурный отдел"

	use('userstatistics');
	test_elements = []
	users = new Set();
	category_name = "Несущие колонны"
	departament_name = "Конструкторский отдел"
	all_time = 0
	elements_count = 0
	db.sessions1147.find({ departament: departament_name }).forEach(
		function (x) {
			test = x.elementsCreated
			if (test != null){
				test.forEach(function (element)
				{
					if (element.nameCategory == category_name)
						{
							elements_count += element.count
							users.add(x.userAdName)
							all_time += x.commonTime - x.idlingTime
						}
				})
			}
		}
	)
	console.log({all_time: all_time})
	console.log({elements_count: elements_count})
	db.analyzing.insertOne({departament_name: departament_name, category_name: category_name, users: Array.from(users), all_time: all_time, elements_count: elements_count})



	use('userstatistics');
	departaments_names = ["Архитектурный отдел", "Конструкторский отдел", 
	"Отдел систем отопления и вентиляции", "Отдел информационного моделирования", 
	"Отдел систем водоснабжения и водоотведения", "Отдел инновационных разработок", 
	"Отдел систем электроснабжения"]
	test_elements = []
	users = new Set();
	category_name = "Листы"
	departaments_names.forEach(function (departament_name){
		all_time = 0
		elements_count = 0
		db.sessions1091.find({ departament: departament_name }).forEach(
			function (x) {
				test = x.elementsCreated
				if (test != null){
					test.forEach(function (element)
					{
						if (element.nameCategory == category_name)
							{
								elements_count += element.count
								users.add(x.userAdName)
								all_time += x.commonTime - x.idlingTime
							}
					})
				}
			}
		)
		console.log({all_time: all_time})
		console.log({elements_count: elements_count})
		db.analyzing1091.insertOne({departament_name: departament_name, category_name: category_name, users: Array.from(users), all_time: all_time, elements_count: elements_count})
	})


use('userstatistics');
elements_count = 0
db.nikatimes.find().forEach(
    function (x) {
        value = x.commonTime;
        if(value > 1000 || value < 100 ){
			db.nikatimes.deleteOne({ "_id" : x._id })
			elements_count += 1
        }
    }
);
console.log({elements_count: elements_count})

use('userstatistics');
db.characteristicsusers.find( { $where: function() {
	return this.mail
} } );

use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        usermail = x.mail;
		name_and = usermail.split("@")[0]
		new_mail = name_and.replace(name_and.split(".")[2], "")
		elements_demo.push({mail: usermail, new_mail:new_mail})
    }
);
console.log({elements_demo: elements_demo})




//characteristicsusers SCRIPTS
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        usermail = x.mail;
		name_and = usermail.split("@")[0]
		new_mail = name_and.replace(name_and.split(".")[2], "") + "@project.com"
		elements_demo.push({mail: usermail, new_mail:new_mail})
    }
);
elements_demo.forEach(function (x) {
	db.characteristicsusers.updateOne(
		{ "mail" : x.mail },
		{ $set: { "mail" : x.new_mail } }
	);
})
console.log({elements_demo: elements_demo})
//===========================================================
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        telephoneNumber = x.workingTelephoneNumber;
		elements_demo.push({workingTelephoneNumber: telephoneNumber, new_telephoneNumber:telephoneNumber.substring(0, 2)})
    }
);
elements_demo.forEach(function (x) {
	db.characteristicsusers.updateOne(
		{ "workingTelephoneNumber" : x.workingTelephoneNumber },
		{ $set: { "workingTelephoneNumber" : x.new_telephoneNumber } }
	);
})
console.log({elements_demo: elements_demo})
//===========================================================
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        telephoneNumber = x.mobileTelephoneNumber;
		elements_demo.push({mobileTelephoneNumber: telephoneNumber, new_mobileTelephoneNumber:telephoneNumber.substring(0, 2)})
    }
);
elements_demo.forEach(function (x) {
	db.characteristicsusers.updateOne(
		{ "mobileTelephoneNumber" : x.mobileTelephoneNumber },
		{ $set: { "mobileTelephoneNumber" : x.new_mobileTelephoneNumber } }
	);
})
console.log({elements_demo: elements_demo})
//===========================================================
//===========================================================
use('userstatistics');
user_names_new = []
db.characteristicsusers.find().forEach(
    function (x) {
        username = x.name;
		split_name = username.split(" ")
		user_names_new.push({name: username, new_username: split_name[1] + "_" + split_name[0][0]})
    }
);
user_names_new.forEach(function (x) {
	db.characteristicsusers.updateOne(
		{ "name" : x.name },
		{ $set: { "name" : x.new_username } }
	);
})
console.log({user_names_new: user_names_new})
//===========================================================
//===========================================================
//сохдание ключей для переименования имен в другой базе
user_names_new.forEach(function (x) {
	db.new_names.insertOne(x)
})
//===========================================================
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        username = x.name;
		if (username == null){
			elements_demo.push({mail: x.mail, new_username: "Ника", username: username})
		}
    }
);
elements_demo.forEach(function (x) {
	db.characteristicsusers.updateOne(
		{ "mail" : x.mail },
		{ $set: { "name" : x.new_username } }
	);
})
console.log({elements_demo: elements_demo})
//===========================================================
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        unic_user = x.dateProfileChanged;
		db.characteristicsusers.updateOne(
			{ "dateProfileChanged" : unic_user },
			{ $set: { "imageSrc" : `assets/img/${x.name}.jpg` } }
		);
		elements_demo.push(unic_user)
    }
);
console.log({elements_demo: elements_demo})
//===========================================================


//скрипты сесиий 


use('userstatistics');
elements_demo = []
count = 1
new_generated_names = {}
db.sessions.find().forEach(
    function (session) {
		c_path = session.centralPath;
		if (!c_path.includes("rsn://")){
			db.sessions.deleteOne({centralPath:c_path}, true)
		}
		else{
			unic_user = session.userAdName;
			name_key = db.new_names.findOne({name:unic_user})
			if (name_key == null){
				find_new_name = new_generated_names[unic_user]
				if (find_new_name == null){
					generated_name = "new_user_"+count
					db.sessions.updateOne(
						{ "userAdName" : unic_user },
						{ $set: { "userAdName" : generated_name } }
					);
					new_generated_names[unic_user] = generated_name;
				}
				else {
					db.sessions.updateOne(
						{ "userAdName" : unic_user },
						{ $set: { "userAdName" : find_new_name } }
					);
				}
				count++
			}
			else{
				db.sessions.updateOne(
					{ "userAdName" : unic_user },
					{ $set: { "userAdName" : name_key.new_username } }
				);
			}
			if (!c_path.includes("rsn://")){
				db.sessions.deleteOne({centralPath:c_path}, true)
			}
			else{
				project_ids.forEach(function (x) {
					split_proj = x.split("|r|");
					if (c_path.includes(split_proj[1].toLowerCase())){
						new_path = c_path.replace(split_proj[1].toLowerCase(), "id-" + split_proj[0] + "__")
						db.sessions.updateOne({centralPath:c_path}, { $set: { "centralPath" : new_path }})
					}
				})
			}
			elements_demo.push(unic_user, name_key)
		}
    }
);

// db.sessions.find().forEach(
//     function (session) {
// 		c_path = session.centralPath;
// 		if (!c_path.includes("rsn://")){
// 			db.sessions.deleteOne({centralPath:c_path}, true)
// 		}
// 		else{
// 			project_ids.forEach(function (x) {
// 				split_proj = x.split("|r|");
// 				if (c_path.includes(split_proj[1].toLowerCase())){
// 					new_path = "ID-" + c_path.replace(split_proj[1].toLowerCase(), split_proj[0])
// 					db.sessions.updateOne({centralPath:c_path}, { $set: { "centralPath" : new_path }})
// 				}
// 			})
// 		}
//     }
// );
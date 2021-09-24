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
db.nikatimes.find().forEach(
    function (x) {
        value = x.commonTime;
        if(value > 1000){
          db.nikatimes.deleteOne({ "_id" : x._id })
        }
    }
);
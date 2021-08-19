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
db.sessions.find( { $where: function() {
	if (this.commonTime - this.idlingTime > 400)
		return this.commonTime
} } ).count()

use('userstatistics');
db.sessions.remove( { $where: function() {
if (this.commonTime - this.idlingTime > 400)
	return this.commonTime
} } );


use('userstatistics');
db.sessions.find( { $where: function() {
	return (this.centralPath.includes('id-1147'))
} } );


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
	return (this.centralPath.includes('id-1147'))
} }
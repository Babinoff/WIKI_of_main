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
	cats_names = ["Графический стиль отображения расчетов","Датчики","Знаки","Подвески из базы данных производителя MEP","Система коммутации","Электрические приборы","Трубопроводные системы","Электрооборудование","Трубы","Электрические цепи","Зоны ОВК","Окна","Цветовая область","Элементы узлов","Зоны","Элементы герметизации из базы данных производителя MEP","Колонны","Фермы","Обобщенные модели","Опоры","Временные конструкции","Мостовое полотно","Линии","Аудиовизуальные устройства","Несущая арматура","Материалы","Соединительные детали коробов","Крыши","Спринклеры","Связанные файлы","Проемы для шахты","Вертикальная циркуляция","Устои","Оборудование","Перекрытия","Гибкие трубы","Ограждение","Топография","Устройства связи","Каркас несущий","Растровые изображения","Антураж","Соединительные детали трубопроводов","Соединительные детали кабельных лотков","Воздуховоды","Облака точек","Соединители несущей арматуры","Сведения о проекте","Температурные швы","Импосты витража","Части","Импорт в семействах","Наборы оборудования","Арматура трубопроводов","Армирование по траектории несущей конструкции","Устройства вызова и оповещения","Воздухораспределители","Трубопровод по осевой","Каркас моста","Охранная сигнализация","Результаты расчета","Несущие колонны","Формы","Парковка","Короба","Специальное оборудование","Стены","Оборудование для предприятий общественного питания","Фундамент несущей конструкции","Мебель","Несущие","Листы","Сегменты труб","Арматурные пучки несущих конструкций","Система противопожарной защиты","Материалы внутренней изоляции воздуховодов","Дорожки","Потолки","Искусственный ландшафт","Область маскировки","Кабельные лотки","Ребра жесткости несущей конструкции","Помещения","Настройки трассировки","Осветительные приборы","Форма арматурного стержня","Воздуховоды по осевой","Озеленение","Генплан","Пространства","Схемы разрезки витража","Арматурная сетка несущей конструкции","Соединительные детали воздуховодов","Системы воздуховодов","Координационная модель","Оборудование зоны","Балочные системы","Панели витража","Трубы из базы данных производителя MEP","Комплекты мебели","Шкафы","Витражные системы","Участки кабельного лотка","Армирование по площади несущей конструкции","Электрические резервные/пространственные цепи","Пожарная сигнализация","Системы воздухоснабжения","Водяные контуры","Гибкие воздуховоды","Элементы воздуховодов из базы данных производителя MEP","Ванты моста","Провода","Материалы изоляции труб","Телефонные устройства","Арматура воздуховодов","Лестницы","Управление вибрацией","Пандус","Области раскладки арматурных сеток","Материалы изоляции воздуховодов","Медицинское оборудование","Соединения несущих конструкций","Сантехнические приборы","Двери","Выключатели"]
	elements_category_counter = {}
	all_counter = 0
	db.sessions.find().forEach(
		function (x) {
			test = x.elementsCreated
			if (test != null){
				test.forEach(function (element)
				{
					catName = element.nameCategor
					if (cats_names.includes(catName)){
						all_counter += element.count
						if (elements_category_counter.hasOwnProperty(cats_names)) {
							elements_category_counter[catName] += element.count
						}
						else{
							elements_category_counter[catName] = element.count
						}
					}
				})
			}
		}
	)
	var list = elements_category_counter;
	let entries = Object.entries(list);
	let sorted = entries.sort((a, b) => a[1] - b[1]);
	console.log(sorted);


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
			{ $set: { "imageSrc" : `uploads/${x.name}.jpg` } }
		);
		elements_demo.push(unic_user)
    }
);
console.log({elements_demo: elements_demo})
//===========================================================
//===========================================================
use('userstatistics');
elements_demo = []
db.characteristicsusers.find().forEach(
    function (x) {
        unic_user = x.dateProfileChanged;
		if (x.imageSrc.includes("undefined")){
			db.characteristicsusers.updateOne(
				{ "dateProfileChanged" : unic_user },
				{ $set: { "imageSrc" : `uploads/default-user-image.png` } }
			);
		}
		elements_demo.push(unic_user)
    }
);
console.log({elements_demo: elements_demo})
//===========================================================


//скрипты сесиий 
//===========================================================
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
//===========================================================


//скрипты никатайм 
//===========================================================
// use('userstatistics');
// count = 1
// new_generated_names = {}
// test = {}
// db.nikatimes.find().forEach(
//     function (session) {
// 		unic_user = session.userAdName;
// 		name_key = db.new_names.findOne({name:unic_user})
// 		test[unic_user] = [name_key]
// 		if (name_key == null){
// 			find_new_name = new_generated_names[unic_user]
// 			if (find_new_name == null){
// 				generated_name = "new_user_"+count
// 				db.nikatimes.updateOne(
// 					{ "userAdName" : unic_user },
// 					{ $set: { "userAdName" : generated_name } }
// 				);
// 				new_generated_names[unic_user] = generated_name;
// 			}
// 			else {
// 				db.nikatimes.updateOne(
// 					{ "userAdName" : unic_user },
// 					{ $set: { "userAdName" : find_new_name } }
// 				);
// 			}
// 			count++
// 		}
// 		else{
// 			db.nikatimes.updateOne(
// 				{ "userAdName" : unic_user },
// 				{ $set: { "userAdName" : name_key.new_username } }
// 			);
// 		}
//     }
// );
// console.log({test: test})
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			sub_sessions.forEach(function (sub_ses) {
				doc_titl = sub_ses.documentTitle
				if (doc_titl != null && doc_titl.includes("1116")){
					test.push(doc_titl)
				}
			})
		}
    }
);
console.log({test: test})

use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		unic_id = session._id
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			sub_sessions.forEach(function (sub_ses) {
				doc_titl = sub_ses.documentTitle
				if (doc_titl != null && doc_titl.includes("1116")){
					test.push(doc_titl)
					db.nikatimes.remove({_id:unic_id})
					return
				}
			})
		}
    }
);
console.log({test: test})
//===========================================================
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		object_id = session._id
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			test.push({sub_sessions_count:sub_sessions.length})
			sub_sessions_new_list = []
			sub_sessions.forEach(function (sub_ses) {
				fix_sub_session = sub_ses
				doc_titl = fix_sub_session.programName
				if (doc_titl != null && doc_titl.includes("C:\\")){
					new_titul = doc_titl.split("\\")[doc_titl.split("\\").length - 1]
					fix_sub_session.programName = new_titul
					test.push(fix_sub_session)
				}
				sub_sessions_new_list.push(fix_sub_session)
			})
			test.push({sub_sessions_count:sub_sessions.length})
			db.nikatimes.updateOne(
				{ "_id" : object_id },
				{ $set: { "projectSessions" : sub_sessions_new_list } }
			);
		}
    }
);
console.log({test: test})
//===========================================================
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		object_id = session._id
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			test.push({sub_sessions_count:sub_sessions.length})
			sub_sessions_new_list = []
			sub_sessions.forEach(function (sub_ses) {
				fix_sub_session = sub_ses
				doc_titl = fix_sub_session.documentTitle
				if (doc_titl != null && doc_titl.includes("@in-delo.com")){ //@we-on.com
					new_titul = "mail" + doc_titl.split("@")[1]
					fix_sub_session.documentTitle = new_titul
					test.push(fix_sub_session)
				}
				sub_sessions_new_list.push(fix_sub_session)
			})
			test.push({sub_sessions_count:sub_sessions.length})
			db.nikatimes.updateOne(
				{ "_id" : object_id },
				{ $set: { "projectSessions" : sub_sessions_new_list } }
			);
		}
    }
);
console.log({test: test})
//===========================================================
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		object_id = session._id
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			test.push({sub_sessions_count:sub_sessions.length})
			sub_sessions_new_list = []
			sub_sessions.forEach(function (sub_ses) {
				fix_sub_session = sub_ses
				doc_titl = fix_sub_session.documentTitle
				if (doc_titl != null && doc_titl.toLowerCase().includes("c:\\users\\")){
					split_title = doc_titl.split("\\")
					remove_from_title = split_title[0] + "\\" + split_title[1] + "\\" + split_title[2]
					new_titul = doc_titl.split(remove_from_title)[1]
					fix_sub_session.documentTitle = new_titul
					test.push(fix_sub_session)
				}
				sub_sessions_new_list.push(fix_sub_session)
			})
			test.push({sub_sessions_count:sub_sessions.length})
			db.nikatimes.updateOne(
				{ "_id" : object_id },
				{ $set: { "projectSessions" : sub_sessions_new_list } }
			);
		}
    }
);
console.log({test: test})
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = []
db.nikatimes.find().forEach(
    function (session) {
		object_id = session._id
		unic_user = session.userAdName;
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			test.push({sub_sessions_count:sub_sessions.length})
			sub_sessions_new_list = []
			sub_sessions.forEach(function (sub_ses) {
				fix_sub_session = sub_ses
				doc_titl = fix_sub_session.documentTitle
				if (doc_titl != null && doc_titl.toLowerCase().includes("y:\\id.fls")){
					split_title = doc_titl.split("\\")
					remove_from_title = split_title[0] + "\\" + split_title[1] + "\\" + split_title[2] + "\\" + split_title[3]
					new_titul = doc_titl.split(remove_from_title)[1]
					fix_sub_session.documentTitle = new_titul
					test.push(fix_sub_session)
				}
				sub_sessions_new_list.push(fix_sub_session)
			})
			test.push({sub_sessions_count:sub_sessions.length})
			db.nikatimes.updateOne(
				{ "_id" : object_id },
				{ $set: { "projectSessions" : sub_sessions_new_list } }
			);
		}
    }
);
console.log({test: test})
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = {}
db.nikatimes.find().forEach(
    function (session) {
		unic_user = session.userAdName;
		user_none = "new_user_34"
		user_name = "Игорь_М"
		if (unic_user.includes(user_none)){
			user_obj = db.characteristicsusers.findOne({ "name" :user_name})
			db.nikatimes.updateOne(
				{ "userAdName" : unic_user },
				{ $set: { "userAdName" : user_name, "departament" : user_obj.departament} }
			);
		}
    }
);
console.log({test: test})
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = {}
db.nikatimes.find().forEach(
    function (session) {
		unic_user = session.userAdName;
		name_key = db.new_names.findOne({name:unic_user})
		test[unic_user] = name_key
		if (name_key != null){
			db.nikatimes.updateOne(
				{ "userAdName" : unic_user },
				{ $set: { "userAdName" : name_key.new_username } }
			);
		}
		else if (!unic_user.includes("_")){
			new_genereted_name_list = unic_user.split(" ")
			new_genereted_name = new_genereted_name_list[1] + "_" + new_genereted_name_list[0][0]
			db.new_names.insertOne({name:unic_user, new_username: new_genereted_name})
			db.nikatimes.updateOne(
				{ "userAdName" : unic_user },
				{ $set: { "userAdName" : new_genereted_name } }
			);
			test[unic_user] = new_genereted_name
		}
    }
);
console.log({test: test})



//Починка базы
//===========================================================
use('userstatistics');
count = 1
new_generated_names = {}
test = {}
db.characteristicsusers.find().forEach(
    function (user_char) {
		user_name = user_char.name;
		user_departament = user_char.departament;
		db.sessions.updateMany(
			{ "userAdName" : user_name },
			{ $set: 
				{ "departament" : user_departament } 
			}
		)
    }
);
console.log({test: test})

use('userstatistics');
db.serverCmdLineOpts()

//net stop MongoDB
//net start MongoDB
use('userstatistics');
counter = 0
list_of_ids = []
db.nikatimes.find().forEach(
    function (session) {
		unic_id = session._id
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			sub_sessions.forEach(function (sub_ses) {
				doc_titl = sub_ses.documentTitle
				// test.push(doc_titl)
				if (doc_titl == "procsName:System procs id:0"){
					list_of_ids.push(unic_id)
					// db.nikatimes.remove({_id:unic_id})
					counter += 1;
					return
				}
			})
		}
    }
)
// console.log(list_of_ids.toString())
// console.log({"procs id:0 counter":counter})
db.nikatimes.deleteMany({'_id': {'$in':list_of_ids}})
// console.log(ids)

use('userstatistics');
counter = 0
list_of_ids = []
db.nikatimes.find().forEach(
    function (session) {
		unic_id = session._id
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			sub_sessions.forEach(function (sub_ses) {
				doc_titl = sub_ses.documentTitle
				programName = sub_ses.programName
				// test.push(doc_titl)
				if (doc_titl == '' || doc_titl == null){
					list_of_ids.push(unic_id)
					// db.nikatimes.remove({_id:unic_id})
					counter += 1;
					return
				}
			})
		}
    }
)
// console.log(list_of_ids.toString())
console.log({"procs id:0 counter":counter})
db.nikatimes.deleteMany({'_id': {'$in':list_of_ids}})


use('userstatistics');
counter = 0
test_list = []
db.nikatimes_28062022.find().forEach(
	function (session) {
		unic_id = session._id
		sub_sessions = session.projectSessions
		if (sub_sessions != null){
			sub_sessions.forEach(function (sub_ses) {
				doc_titl = sub_ses.documentTitle
				programName = sub_ses.programName
				if (doc_titl != null){
					if (doc_titl.includes("StackTrace")){
						let sub_ses_fix = sub_ses
						sub_ses_fix.name = session.userAdName
						db.nikatimes_errors.insertOne(sub_ses_fix)
						test_list.push(doc_titl)
						// db.nikatimes.remove({_id:unic_id})
						counter += 1;
						return
					}
				}
			})
		}
	}
)
console.log({"counter": counter})
console.log({"test_list": test_list})

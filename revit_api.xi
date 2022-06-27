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
  | if element.Category.Id.IntegerValue == int(BuiltInCategory.OST_CATEGORY):

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
  in Command we need create parameter .
  | public static ExternalEvent external_event_parameter_creator
  | external_event_parameter_creator = ExternalEvent.Create(new ParameterCreator());
  and in the mainViewModel or else main class we run by Raise .
  | Command.external_event_parameter_creator.Raise();

create a vector from a curve .
	|XYZ pstart = Curve.GetEndPoint(0)| start XYZ point
	|XYZ pend = Curve.GetEndPoint(1)| end XYZ point
	|XYZ v = (pend - pstart).Normalize()| normalised vector pointing along curve


model categorys ['Графический стиль отображения расчетов','Датчики','Знаки','Подвески из базы данных производителя MEP','Система коммутации','Электрические приборы','Трубопроводные системы','Электрооборудование','Трубы','Электрические цепи','Зоны ОВК','Окна','Цветовая область','Элементы узлов','Зоны','Элементы герметизации из базы данных производителя MEP','Колонны','Фермы','Обобщенные модели','Опоры','Временные конструкции','Мостовое полотно','Линии','Аудиовизуальные устройства','Несущая арматура','Материалы','Соединительные детали коробов','Крыши','Спринклеры','Связанные файлы','Проемы для шахты','Вертикальная циркуляция','Устои','Оборудование','Перекрытия','Гибкие трубы','Ограждение','Топография','Устройства связи','Каркас несущий','Растровые изображения','Антураж','Соединительные детали трубопроводов','Соединительные детали кабельных лотков','Воздуховоды','Облака точек','Соединители несущей арматуры','Сведения о проекте','Температурные швы','Импосты витража','Части','Импорт в семействах','Наборы оборудования','Арматура трубопроводов','Армирование по траектории несущей конструкции','Устройства вызова и оповещения','Воздухораспределители','Трубопровод по осевой','Каркас моста','Охранная сигнализация','Результаты расчета','Несущие колонны','Формы','Парковка','Короба','Специальное оборудование','Стены','Оборудование для предприятий общественного питания','Фундамент несущей конструкции','Мебель','Несущие','Листы','Сегменты труб','Арматурные пучки несущих конструкций','Система противопожарной защиты','Материалы внутренней изоляции воздуховодов','Дорожки','Потолки','Искусственный ландшафт','Область маскировки','Кабельные лотки','Ребра жесткости несущей конструкции','Помещения','Настройки трассировки','Осветительные приборы','Форма арматурного стержня','Воздуховоды по осевой','Озеленение','Генплан','Пространства','Схемы разрезки витража','Арматурная сетка несущей конструкции','Соединительные детали воздуховодов','Системы воздуховодов','Координационная модель','Оборудование зоны','Балочные системы','Панели витража','Трубы из базы данных производителя MEP','Комплекты мебели','Шкафы','Витражные системы','Участки кабельного лотка','Армирование по площади несущей конструкции','Электрические резервные/пространственные цепи','Пожарная сигнализация','Системы воздухоснабжения','Водяные контуры','Гибкие воздуховоды','Элементы воздуховодов из базы данных производителя MEP','Ванты моста','Провода','Материалы изоляции труб','Телефонные устройства','Арматура воздуховодов','Лестницы','Управление вибрацией','Пандус','Области раскладки арматурных сеток','Материалы изоляции воздуховодов','Медицинское оборудование','Соединения несущих конструкций','Сантехнические приборы','Двери','Выключатели']

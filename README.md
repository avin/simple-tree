# Построение дерева с использованием React

Скрипт генерирует и отображает дерево со случайным кол-вом элементов. Используемые стронние библиотеки: 
[React](https://facebook.github.io/react/), [JQuery](https://jquery.com/), [lodash](https://lodash.com/), [font-awesome](http://fortawesome.github.io/Font-Awesome/), [faker.js](https://github.com/marak/Faker.js/).
Онлайн демо можно посмотреть [здесь](http://files.c75.in/pub/demo/tree/ "демо"). Готовый билд можно скачать [здесь](http://files.c75.in/pub/demo/tree/build.zip "build"). 


## Сборка

Для сборки необходимо иметь некоторые глобально установленные инструменты:
```
npm install -g gulp webpack bower
```

Сборка проводится в корневой директории последовательным выполнением команд:
```
npm install
bower install
gulp
webpack
```
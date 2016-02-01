import ReactDOM from "react-dom";
import React from "react";
import Tree from "./components/Tree";
import faker from "faker";

let elementsCount = 0;

/**
 * Генерация случайных элементов дерева
 * @param deep
 * @returns {Array}
 */
let generateTree = function(deep) {
    let newDeep = deep - 1;
    let tree = [];

    let count = (deep > 0) ? _.random(2, 4) : 5;
    for(let i = 0; i< count ; i++){
        tree.push({
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            children: deep > 0 ? generateTree(newDeep) : []
        });
        //Увеличиваем счетчик общего кол-ва элементов
        elementsCount++;
    }

    //Добавляем случайное кол-во элементов без потомков
    for(let i = 0; i< _.random(0, 3) ; i++){
        tree.push({
            name: faker.name.firstName(),
            children: []
        });
        //Увеличиваем счетчик общего кол-ва элементов
        elementsCount++;
    }

    return tree;
};

//Генерируем дерево
let treeData = [{
    name: 'TREE',
    children: generateTree(10)
}];

ReactDOM.render(
    <Tree treeData={treeData}/>,
    document.getElementById('tree-demo')
);

//Выводим обзее кол-во элементов
document.getElementById('count').innerHTML = elementsCount;

// Strich auf rand von Tabelle bekommen

const rand1 = document.getElementById('test');
const rand2 = document.getElementById('test2');
const rand3 = document.getElementById('test3');

const container__right__one = document.getElementById('name').getBoundingClientRect().right;
const container__right__two = document.getElementById('alter').getBoundingClientRect().right;
const container__right__three = document.getElementById('job').getBoundingClientRect().right;

const doc = document;
const doc1 = doc.getElementById('main').getBoundingClientRect().x;

console.log(doc1)
console.log(container__right__one)

rand1.style.left = container__right__one - doc1 / 2 + "px";
rand1.style.height = document.getElementById('name').style.height + "px"

rand2.style.left = container__right__two - doc1 / 2 + "px";
rand3.style.left = container__right__three - doc1 / 2 + "px";

// Strick Dragbar machen
// Tabellen nach BoundingclientRect anpassen
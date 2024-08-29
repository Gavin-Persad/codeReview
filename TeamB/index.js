console.log('hi');
let text = document.getElementById('title');
console.log(text);

let contentElements = document.getElementsByClassName('content');
console.log(contentElements);

let list = document.querySelectorAll('li');
console.log(list);

let highlight = document.querySelector('.highlight');
console.log(highlight);

const elements = document.querySelectorAll('.highlight');

console.log(elements);
for (var i = 0; i < elements.length; i++) {
	console.log(elements[i].textContent);
}

// document.getElementById('itemList');
// console.log(document.getElementById('itemList'));

let listItem = document.querySelector('.list-item');
console.log(listItem.parentNode);

const itemList = document.getElementById('itemList');
itemList.querySelector('li');
console.log(itemList.querySelector('li'));

const item = itemList.querySelector('li');
console.log(item.parentNode);

console.log(itemList.childNodes);

console.log(itemList.children);

console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
console.log(itemList.querySelector('.highlight'));

const cherry = itemList.querySelector('.highlight');
console.log(cherry.previousElementSibling);
console.log(cherry.nextElementSibling);

document.getElementById('title').style.color = 'red';
document.getElementById('title').style.fontSize = '30px';

const newElement = document.createElement('p');
newElement.textContent = 'This is a dynamically added paragraph.';
const parentElement = document.querySelector('body');
parentElement.appendChild(newElement);

console.log(document.querySelector('.content'));
let firstParagraph = document.querySelector('.content');
firstParagraph.textContent = 'This paragraph has been updated';

/*
const box = document.getElementById('box1');

box.onclick = function(){
	if(box.style.backgroundColor === 'red'){
		box.style.backgroundColor = 'blue';
	}
	else {
		box.style.backgroundColor = 'red';
	}
};*/

const mainButton = document.getElementById('button');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const box1 = document.getElementById('box1');
const box2 =document.getElementById('box2');
const boxP1 =document.getElementById('boxP1');
const boxP2 =document.getElementById('boxP2');



mainButton.onclick = function(){
	container1.remove();
	container2.style.width = '99%';
	container2.style.height = '53em';
	boxP2.style.border = '6.4px solid black';
}
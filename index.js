const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const cardinfo = document.getElementById('cardinfo');
const container = document.getElementById('container');
const leavebox = document.getElementById('leavebox');
const textcard = document.getElementById('textcard');
case1.addEventListener('click', () => {
	cardinfo.style.display = 'block';
	textcard.innerHTML = 'GRILL1 ';
	container.style.opacity = '25%';
});

case2.addEventListener('click', () => {
	cardinfo.style.display = 'block';
	textcard.innerHTML = 'INFO ABOUT THIS GRILL :)  ';
	container.style.opacity = '25%';
});
case3.addEventListener('click', () => {
	cardinfo.style.display = 'block';
	textcard.innerHTML = 'INFO ABOUT THIS GUY PogU';
	container.style.opacity = '25%';
});

leavebox.addEventListener('click', () => {
	cardinfo.style.display = 'none';

	container.style.opacity = '100%';
});

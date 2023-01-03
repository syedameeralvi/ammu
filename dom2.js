var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='rgb(68, 255, 0)';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

var titles = document.querySelectorAll('.list-group-item');
console.log(titles);
titles[1].style.color="green";

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i=0; i<odd.length; i++){
odd[i].style.backgroundColor ='green';
}

//var li=document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent='Hello2';
//li[0].style.fontWeight='bold';
//li[1].style.fontWeight='bold';
//li[2].style.fontWeight='bold';
//li[3].style.fontWeight='bold';
//li[2].style.backgroundColor='green';
//for(var i=0;i<li.length;i++)
//li[i].style.backgroundColor='#f4f4f4';
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var input=document.querySelector('input')
input.value='HELLO WORLD'
var Submit=document.querySelector('input[type="submit"]');
Submit.value="SEND";
var item=document.querySelector('.list-group-item');
item.style.color='red';
var Lastitem=document.querySelector('.list-group-item:last-Child')
Lastitem.style.color='green';
var seconditem=document.querySelector('.list-group-item:nth-child[2]')
seconditem.style.color='coral';

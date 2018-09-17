function getId(a){
	return document.getElementById(a);
}

/* провірка на правильність введення логіна та пароля */
let overflowLogpas = document.createElement('div');
getId('logIn').onclick = function(){
	let userName = getId('login').value;
	let userPassword = getId('password').value;

	if(userName == 'logos' && userPassword == '12345'){
		getId('blockBox').style.left = '-50%';
		getId('blockBox').style.transform = 'scale(0.01)';
		getId('blockOwerflow').style.display = 'none';
		getId('login').value = '';
		getId('password').value = '';
		getId('login').style.border = '2px solid lightgrey';
		getId('password').style.border = '2px solid lightgrey';

	}
	else if (userName == '' || userPassword == ''){
		getId('login').style.border = '2px solid red';
		getId('password').style.border = '2px solid red';
		getId('logpas').style.left = '50%';
		getId('logpas').style.transform = 'scale(1)';
		getId('writeLogin').style.display = 'block';
		getId('writePass').style.display = 'none';

		overflowLogpas.className = 'overflowLogpas';
		document.body.appendChild(overflowLogpas);

		overflowLogpas.onclick = function(){
		getId('logpas').style.left = '-50%';
		getId('logpas').style.transform = 'scale(0.01)';
		overflowLogpas.remove();
		}
	}
	else{
		getId('login').style.border = '2px solid red';
		getId('password').style.border = '2px solid red';
		getId('logpas').style.left = '50%';
		getId('logpas').style.transform = 'scale(1)';
		getId('writeLogin').style.display = 'none';
		getId('writePass').style.display = 'block';

		overflowLogpas.className = 'overflowLogpas';
		document.body.appendChild(overflowLogpas);

		overflowLogpas.onclick = function(){
		getId('logpas').style.left = '-50%';
		getId('logpas').style.transform = 'scale(0.01)';
		overflowLogpas.remove();
		}
	}
}


/* кнопка робить текст жирним */
getId('b').onclick = function(){
	 if(getId('main').style.fontWeight != 'bold'){

	 	getId('main').style.fontWeight = 'bold';
	 	getId('b').style.backgroundColor = '#faf6ca';
	 	getId('b').style.border = '2px inset #faf6ca';

	 }
	 else{
		getId('main').style.fontWeight = 'normal';
		getId('b').style.backgroundColor = '#ffa000';
	 	getId('b').style.border = 'none';
	 }
}
/* кнопка робить текст курсивним */
getId('i').onclick = function(){
	if(getId('main').style.fontStyle != 'italic'){
		getId('main').style.fontStyle = 'italic';
	 	getId('i').style.backgroundColor = '#faf6ca';
	 	getId('i').style.border = '2px inset #faf6ca';
	}
	else{
		getId('main').style.fontStyle = 'normal';
		getId('i').style.backgroundColor = '#ffa000';
	 	getId('i').style.border = 'none';
	}
}
/* кнопка робить текст підкресленим */
getId('u').onclick = function(){
	if(getId('main').style.textDecoration != 'underline'){
		getId('main').style.textDecoration = 'underline';
	 	getId('u').style.backgroundColor = '#faf6ca';
	 	getId('u').style.border = '2px inset #faf6ca';
	}
	else{
		getId('main').style.textDecoration = 'none';
		getId('u').style.backgroundColor = '#ffa000';
	 	getId('u').style.border = 'none';
	}
}

/* селект для зміни розміру текста */
let fontSized = document.forms.headForm;

fontSized.fontSize.onchange = function(){
	for(let i =0; i<fontSize.length; i++){
		if (fontSized.fontSize.options[i].selected) {
			getId('main').style.fontSize = this.value;
		}
	}
}

/* селект для зміни розміру шрифту */
fontSized.fontFamily.onchange = function(){
	for(let i = 0; i<fontFamily.length; i++){
		if(fontSized.fontFamily.options[i].selected){
			getId('main').style.fontFamily = this.value;
		}
	}
}

/* кнопка модального вікна для зміни кольору текстку */
let overflow = document.createElement('div');
getId('color').onclick = function (){
	overflow.className = 'overflow';

	document.body.appendChild(overflow);
	getId('colorModal').style.marginTop = '0%';
	getId('colorModal').style.marginLeft = '50%';
	getId('colorModal').style.transform = 'scale(1)';
}

overflow.onclick = function(){
	getId('colorModal').style.marginTop = '-50%';
	getId('colorModal').style.transform = 'scale(0.01)';
	overflow.remove();
}

/* вибір кольору тексту у модальному вікні */
let box = document.querySelectorAll('.box');

for(let i = 0; i<box.length; i++){
	box[i].onclick = function(){
		getId('main').style.color = this.style.color;
	}
}

/* кнопка модального вікна для зміни кольору фону */
let overflowBack = document.createElement('div');
getId('background').onclick = function(){
	overflowBack.className = 'overflowBack';

	document.body.appendChild(overflowBack);
	getId('backColorModal').style.marginTop = '0%';
	getId('backColorModal').style.transform = 'scale(1)';

}

overflowBack.onclick = function(){

	getId('backColorModal').style.marginTop = '-50%';
	getId('backColorModal').style.transform = 'scale(0.01)';
	getId('imageModal').style.marginTop = '-50%';
	getId('imageModal').style.transform = 'scale(0.01)';
	overflowBack.remove();
}

/* вибір кольору фону */
let boxBack = document.querySelectorAll('.boxBack');

for(let i = 0; i<boxBack.length; i++){
	boxBack[i].onclick = function(){
		document.body.style.background = this.style.background;
	}
}

/* перехід з вибору кольору фону на вибір картинок фону */
getId('backImageButt').onclick = function(){

	getId('backColorModal').style.marginTop = '-50%';
	getId('backColorModal').style.transform = 'scale(0.01)';
	getId('imageModal').style.marginTop = '0%';
	getId('imageModal').style.transform = 'scale(1)';

}

/* перехід з вибору картинок фону на вибір кольору фону */
getId('backColorButt').onclick = function(){

	getId('imageModal').style.marginTop = '-50%';
	getId('imageModal').style.transform = 'scale(0.01)';
	getId('backColorModal').style.marginTop = '0%';
	getId('backColorModal').style.transform = 'scale(1)';

}

/* функція для вибору картинок фону */
let boxImage = document.querySelectorAll('.boxImage');

for(let i = 0; i<boxImage.length; i++){
	boxImage[i].onclick = function(){
		document.body.style.background = this.style.background;
	}
}

/* функція для вибору картинки фону з комп'ютера */
getId('file').onchange = function () {
         document.body.style.background = 'url' + '(' + URL.createObjectURL(event.target.files[0]) + ')';
     }


/* радіокнопки для вирівнювання тексту */
getId('left').onclick = function(){
	if(getId('left').checked){
		getId('main').style.textAlign = 'left';
	}
}

getId('center').onclick = function(){
	if(getId('center').checked){
		getId('main').style.textAlign = 'center';
	}
}

getId('right').onclick = function(){
	if(getId('right').checked){
		getId('main').style.textAlign = 'right';
	}
}

/* кнопка переходу в додаткові опції (створення таблиці і списку) */
getId('edit').onclick = function(){
	getId('mainBox').style.display = 'none';
	getId('editBox').style.display = 'block';
	let text = getId('main').innerHTML;
	getId('textArea').value = text;
}
/* кнопка для збереження додаткових опцій у головне меню */
getId('save').onclick = function(){
	let newText = getId('textArea').value;
	getId('main').innerHTML = newText;
	getId('mainBox').style.display = 'block';
	getId('editBox').style.display = 'none';

}

/* кнопка створення таблиці з вспливаючим модальним вікном */
let overflowTable = document.createElement('div');
getId('addTable').onclick = function(){
	overflowTable.className = 'overflowTable';
	document.body.appendChild(overflowTable);
	getId('tableBox').style.left = '50%';
	getId('tableBox').style.transform = 'scale(1)';
}

/* оверфлов для виходу з вікна створення таблиці */
overflowTable.onclick = function(){
	getId('tableBox').style.left = '-50%';
	getId('tableBox').style.transform = 'scale(0.01)';
	getId('ulBox').style.left = '-50%';
	getId('ulBox').style.transform = 'scale(0.01)';
	overflowTable.remove();
}

/* кнопка створює таблицю */
getId('createTable').onclick = function(){
	let trTable = getId('rowElementsTable').value;
	let tdTable = getId('colElementsTable').value;
	let widthTable = getId('widthTable').value;
	let heightTable = getId('heightTable').value;
	let cellspacing = getId('cellspacing').value;
	let weightTable = getId('weightTable').value;
	let colorLine = getId('colorLine').value;

	// if((trTable == '' || trTable == "") || (tdTable == '' || (tdTable == "")) || (weightTable == '' || (weightTable == "")) || (heightTable == '' || heightTable == "") || (cellspacing == '' || cellspacing == "") || (weightTable == '' || weightTable == "") || (colorLine == '' || colorLine != [0-9])){
	// 	getId('warning').style.display = 'block';
	// }

	getId('tableBox').style.left = '-50%';
	getId('tableBox').style.transform = 'scale(0.01)';
	overflowTable.remove();

	getId('textArea').value += '<table cellspacing="'+cellspacing+'" style="border:'+weightTable+'px solid '+colorLine+';">';

	for(let i = 0; i<=trTable; i++){

		getId('textArea').value += '<tr>';

		for(let i = 0; i<=tdTable; i++){
			getId('textArea').value += '<td style="width: '+widthTable+'px; height:'+heightTable+'px; border:'+weightTable+'px solid '+colorLine+';"></td>';
		}
		getId('textArea').value += '</tr>';
	}
	getId('textArea').value += '</table>';
}

/* скидує всі введені дані для таблиці */
getId('deleteValue').onclick = function(){
	getId('rowElementsTable').value = "";
	getId('colElementsTable').value = "";
	getId('widthTable').value = "";
	getId('heightTable').value = "";
	getId('cellspacing').value = "";
	getId('weightTable').value = "";
	getId('colorLine').value = "";
	getId('warning').style.display = 'none';
}

/* виводить блок для створення списку */
getId('addList').onclick = function(){
	overflowTable.className = 'overflowTable';
	document.body.appendChild(overflowTable);
	getId('ulBox').style.left = '50%';
	getId('ulBox').style.transform = 'scale(1)';
}

/* радіо кнопки для вибору типу списку */
getId('radioOl').onclick = function(){
	if(getId('radioOl').checked){
		getId('ulSelect').style.display = 'none';
		getId('olSelect').style.display = 'block';
	}
}

getId('radioUl').onclick = function(){
	if(getId('radioUl').checked){
		getId('ulSelect').style.display = 'block';
		getId('olSelect').style.display = 'none';
	}
}

/* скидування поля при створенні списку */
getId('deleteValueUl').onclick = function(){
	getId('manyItems').value = "";
}

/* кнопка створення списку */
getId('createUl').onclick = function(){
	if(getId('radioOl').checked){
		let elementsOl = getId('manyItems').value;
		let numberType = getId('olSelect').value;

		getId('ulBox').style.left = '-50%';
		getId('ulBox').style.transform = 'scale(0.01)';
		overflowTable.remove();

		getId('textArea').value += '<ol>';

		for(let i = 1; i<=elementsOl; i++){
			getId('textArea').value += '<li type="'+numberType+'">Text</li>'
		}	

		getId('textArea').value += '</ol>';
	}
	if(getId('radioUl').checked){
		let elementsUl = getId('manyItems').value;
		let markType = getId('ulSelect').value;

		getId('ulBox').style.left = '-50%';
		getId('ulBox').style.transform = 'scale(0.01)';
		overflowTable.remove();

		getId('textArea').value += '<ul>';

		for(let i = 1; i<=elementsUl; i++){
			getId('textArea').value += '<li type="'+markType+'">Text</li>'
		}	

		getId('textArea').value += '</ul>';
	}
}

/* кнопка блокування роботи додатку */
getId('block').onclick = function(){

	getId('blockBox').style.left = '50%';
	getId('blockBox').style.transform = 'scale(1)';
	getId('blockOwerflow').style.display = 'block';

	}








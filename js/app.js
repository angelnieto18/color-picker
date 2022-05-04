class App{
	construct(color, salida, button, list, li){
		this.color = color;
		this.salida = salida;
		this.button = button;
		this.list = list;
		this.li = li;
	}

	change(){
		color.addEventListener('input', () => {
			salida.style.background = color.value
			salida.textContent      = color.value 
		})
	}

	colorStorage(){
		color.addEventListener('input', () => {
			localStorage.setItem('actualColor', color.value)
		})
	}

	colorHistorial(){
		button.addEventListener('click', () => {
			colorList.push(localStorage.getItem('actualColor'));
			localStorage.setItem('colorHistorial', JSON.stringify(colorList));
		})
	}

	render(){
		button.addEventListener('click', () => {
			list.innerHTML += `<li style="background: ${localStorage.getItem('actualColor')}">${localStorage.getItem('actualColor')}</li>`
		})
	}

	if(){
		if(localStorage.getItem('actualColor') && localStorage.getItem('colorHistorial')){
			salida.style.background = localStorage.getItem('actualColor');
			salida.textContent = localStorage.getItem('actualColor');
			for (const colors of colorList) {
				list.innerHTML += `<li style="background: ${colors}">${colors}</li>`
			}
		} else {
			localStorage.setItem('actualColor', '#ffffff');
		}
	}
}

const appObj = new App(
	document.getElementById('color'), 
	document.getElementById('salida'),
	document.getElementById('button'),
	document.getElementById('list'),
	document.getElementById('li')
	);

const colorList = JSON.parse(localStorage.getItem('colorHistorial')) || [];

appObj.change();
appObj.colorStorage();
appObj.colorHistorial();
appObj.render();
appObj.if();
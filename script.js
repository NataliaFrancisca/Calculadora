const div = document.querySelector(".calculator");
const buttons = [...document.querySelectorAll(".content-change-color > button")];

buttons.forEach((button) => {

	button.addEventListener("click", () => {

		let teste = [...div.classList].filter(item => item == 'calculator');

		[...div.classList] = teste;
		
		div.classList.toggle(button.innerHTML.toLowerCase())
		
	})

})


const screen = document.querySelector(".screen");
const btnNumbers = [...document.getElementsByClassName("number")];
const btnOperator = [...document.getElementsByClassName("operator")];

let values = [];
let operator = "";

//mostrando os números que são clicados na tela.
btnNumbers.forEach((button) => {
	button.addEventListener("click", () => {
		screen.innerHTML += button.innerHTML;
	})
})

//botões operadores
btnOperator.forEach((button) => {

	button.addEventListener("click", () => {

		const innerButton = button.innerHTML;

		switch (innerButton){

			case "Reset":
				screen.innerHTML = "";
				break;

			case "Del":
				screen.innerHTML = screen.innerHTML.slice(0,-1);
				break;

			case "+": case "-": case "*": case "/":
				operator = innerButton;
				pushAndCleanResult();
				break;

			case "=":
				pushAndCleanResult();
				result(operator);
				values.length = 0;
				break;
		}

	})
})

function pushAndCleanResult(){
	values.push(parseFloat(screen.innerHTML));
	screen.innerHTML = "";
}


function result(operator){

	switch(operator){
		case "+":
			screen.innerHTML = values[0] + values[1];
			break;
		case "-":
			screen.innerHTML = values[0] - values[1];
			break;
		case "*":
			screen.innerHTML = values[0] * values[1];
			break;
		case "/":
			screen.innerHTML = values[0] / values[1];
			break;
	}
}




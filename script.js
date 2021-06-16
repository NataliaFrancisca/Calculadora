/*const div = document.querySelector(".change-color");
const buttons =[...document.getElementsByTagName("button")];


const colors = [
	{color: 'pink', textColor: "black"},
	{color: "green", textColor: "white"},
	{color: "orange", textColor: "red"}
]

buttons.forEach((button) => {

	button.addEventListener("click", () => {
		const style = colors.find(item => item.color == button.className);

		div.style.cssText = ` 
			background: ${style.color};
			color: ${style.textColor};
		`
	})
})*/


const resultado = document.querySelector(".result");
const btnNumbers = [...document.getElementsByClassName("number")];
const btnOperator = [...document.getElementsByClassName("operator")];

let values = [];
let operator = "";

//mostrando os números que são clicados na tela.
btnNumbers.forEach((button) => {
	button.addEventListener("click", () => {
		resultado.innerHTML += button.innerHTML;
	})
})

//botões operadores
btnOperator.forEach((button) => {

	button.addEventListener("click", () => {

		const innerButton = button.innerHTML;

		switch (innerButton){
			case "+":
			case "-":
			case "*":
			case "/":
				operator = innerButton;
				pushAndCleanResult()
			break;

			case "Reset":
				resultado.innerHTML = "";
			break;

			case "Del":
				resultado.innerHTML = resultado.innerHTML.slice(0,-1);
			break;
		}

		if(innerButton == "="){
			pushAndCleanResult();

			result(operator);
			values.length = 0;
		}
	})
})

function pushAndCleanResult(){
	values.push(parseFloat(resultado.innerHTML));
	resultado.innerHTML = "";
}


function result(operator){

	const soma = (accumulates, currentValue) => accumulates + currentValue;
	const sub = (accumulates, currentValue) => accumulates - currentValue;
	const mult = (accumulates, currentValue) => accumulates * currentValue;
	const div = (accumulates, currentValue) => accumulates / currentValue;

	if(operator == "+"){
		resultado.innerHTML = values.reduce(soma);
	}

	if(operator == "-"){
		resultado.innerHTML = values.reduce(sub);
	}

	if(operator == "*"){
		resultado.innerHTML = values.reduce(mult);
	}

	if(operator == "/"){
		resultado.innerHTML = values.reduce(div);
	}

}



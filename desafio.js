const numbers = [...document.getElementsByClassName("number")];
const operators = [...document.getElementsByClassName("operator")];
const screenResult = document.querySelector(".screen");

const count = [];

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		screenResult.innerHTML += number.innerHTML
	})
})

operators.forEach((operator) => {

	operator.addEventListener("click", () => {

		let innerButton = operator.innerHTML;

		switch (innerButton){
			case "+":
			case "-":
			case "*":
			case "/":
				screenResult.innerHTML += innerButton;
			break;

			case "Reset":
				screenResult.innerHTML = "";
				break;

			case "Del":
				screenResult.innerHTML = screenResult.innerHTML.slice(0,-1);
				break;
		}

		if(operator.innerHTML == "="){
			
			const result = eval(screenResult.innerHTML)
			screenResult.innerHTML = result;
		}
	})

})


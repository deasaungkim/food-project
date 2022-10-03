

// checkboxAll
function selectAll(selectAll) {
	document.getElementsByName('test').forEach((checkbox) => {
		checkbox.checked = selectAll.checked;

	})
};
// 위의 코드와 같다
// function selectAll(selectAll) {
// 	const checkboxes = document.getElementsByName('test');
// 	checkboxes.forEach((checkbox) => {
// 		checkbox.checked = selectAll.checked;
// 		console.log("dd")
// 	})
// }

// BMI
/*키의값 const height= document.getElementById('InputHeight').value */
/*몸무게의 값 const weight= document.getElementById('InputWeight').value */

// var bt = document.getElementById("bmibt");
// bt.addEventListener("submit", BMIFunc);
// const height = document.getElementById('InputHeight').value
// const weight = document.getElementById('InputWeight').value
// var BMI = weight / (height ** 2);
// var bt=document.getElementById("bmibyt").addEventListener('submit', BMIFunc)
// console.log()
window.onload = () => {
	var bt = document.getElementById("bmibt")
	bt.addEventListener("click", BMIFunc)
}
function BMIFunc() {

	const height = document.getElementById('InputHeight').value
	const weight = document.getElementById('InputWeight').value
	const result = document.getElementById('BMIResult')

	var BMI = (weight / ((height ** 2) / 10000)).toFixed(2)

	if (BMI <= 18.5) {
		// document.write('저체중').getElementById('BMIResult').value
		// result.innerText = '저체중'
		var bmiclass = '저체중'
	} else if ((BMI > 18.5) && (BMI < 22.9)) {
		// result.innerText = '정상'
		var bmiclass = '정상'
	} else if ((BMI > 23.0) && (BMI < 24.9)) {
		// result.innerText = '과체중'
		var bmiclass = '과체중'
	} else {
		// result.innerText = '비만'
		var bmiclass = '비만'
	}

	// console.log(bmiclass);
	result.innerText = bmiclass;
	event.preventDefault();
	// document.getElementById('BMIResult').innerText = bmiclass;
};
// }; return result.innerText = bmiclass;
// 왜 input을 div로 바꾸니까 작동되지?



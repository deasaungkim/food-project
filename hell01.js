

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
// bt.addEventListener('click', BMIFunc)
function BMIFunc() {
	const height = document.getElementById('InputHeight').value
	const weight = document.getElementById('InputWeight').value
	const result = document.getElementById('BMIResult')
	var BMI = (weight / ((height ** 2) / 10000)).toFixed(2)
	if (BMI <= 18.5) {
		document.write('저체중').getElementById('BMIResult').value
	} else if ((BMI > 18.5) && (BMI < 22.9)) {
		var bmiclass = '정상'
	} else if ((BMI > 23.0) && (BMI < 24.9)) {
		var bmiclass = '과체중'
	} else {
		var bmiclass = '비만'
	}

	// document.getElementById('BMIResult').innerText = bmiclass;

}

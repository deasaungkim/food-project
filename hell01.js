

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
// bt.addEventListener("submit", function BMIFunc() {
// 	const height = document.getElementById('InputHeight').value
// 	const weight = document.getElementById('InputWeight').value
// 	var BMI = weight / (height ** 2);
// }; console.log(BMI)

	// function BMIFunc(BMISubmit) {
	// 	const height = document.getElementById('InputHeight').value
	// 	const weight = document.getElementById('InputWeight').value
	// 	var BMI = weight / (height ** 2)
	// 	console.log(BMI)

	// if (BMI <= 18.5) {
	// 	bmiclass = '저체중'
	// } else if ((BMI > 18.5) && (BMI < 22.9)) {
	// 	bmiclass = '정상'
	// } else if ((BMI > 23.0) && (BMI < 24.9)) {
	// 	bmiclass = '과체중'
	// } else {
	// 	bmiclass = '비만'
	// }

	// document.getElementById('BMIResult').value = bmiclass;


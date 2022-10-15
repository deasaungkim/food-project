

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

// .아침에 뭐 먹었어요 ?
// 	2.짜장면1 엔터(input id 가져오기)
// 3.클라이언트 post 요청
// var test1 = document.getElementById(#inputid1).val() //아침에 먹은거
// var test2 = document.getElementById(#inputid2).val() //점심에 먹은거
// var test3 = document.getElementById(#inputid3).val() //저녁에 먹은거
// ajax({
// 	type: 'POST',
// 	url: 'dailyFood',
// 	data: { dailyFood- give : test1
// }
// 		success : function (response) {
// 	alert(response['msg'])
// }
// 		msg = 입력완료1
// 4.서버 post 요청 : db(daily food)에 저장
// 	@app.route("/dailyFood", methods = ["POST"])
// 		def dailyFood_post():
// dailyFood_receive = request.form['test1']

// db.dailyFood.inset_one({ 'morning': test1 })
// return jsonity({ 'msg': "입력 완료" })


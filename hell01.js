

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
function BMIFunc() {

	const height = document.getElementById('InputHeight').value
	const weight = document.getElementById('InputWeight').value
	const result = document.getElementById('BMIResult')

	var BMI = (weight / ((height ** 2) / 10000)).toFixed(2)
	console.log(BMI)
	if (BMI <= 18.5) {
		var bmiclass = '저체중'
	} else if ((BMI > 18.5) && (BMI < 22.9)) {
		var bmiclass = '정상'
	} else if ((BMI > 23.0) && (BMI < 24.9)) {
		var bmiclass = '과체중'
	} else {
		var bmiclass = '비만'
	}

	result.innerText = bmiclass;
	event.preventDefault();
};
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
window.onload = () => {

	const modal = document.getElementById("modal")
	function modalOn() {
		modal.style.display = "flex"
	}
	function isModalOn() {
		return modal.style.display === "flex"
	}
	function modalOff() {
		modal.style.display = "none"
	}

	const btnModal = document.getElementById("btn_modal")
	btnModal.addEventListener("click", e => { modalOn() })

	const closeBtn = modal.querySelector(" .close-area")
	closeBtn.addEventListener("click", e => { modalOff() })

	modal.addEventListener("click", e => {
		const evTarget = e.target
		if (evTarget.classList.contains("modal-overlay")) {
			modalOff()
		}
	})
	window.addEventListener("keyup", e => {
		if (isModalOn() && e.key === "Escape") {
			modalOff()
		}
	})
}
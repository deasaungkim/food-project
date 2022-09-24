


function selectAll(selectAll) {
	document.getElementsByName('test').forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
};
// 위의 코드와 같다
// function selectAll(selectAll) {
// 	const checkboxes = document.getElementName('');
// 	checkboxes.forEach((checkbox) => {
// 		checkbox.checked = selectAll.checked;
// 	})
// }
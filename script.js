function getCity() {
	let searchItem = document.querySelector("#searchCity");
	let inputValue = searchItem.value;

	searchItem.addEventListener("keypress", function(e) {
		if (e.key === "Enter") {
			inputValue = searchItem.value;
			searchItem.value = "";
			console.log(inputValue);
		}
	});
}

getCity();

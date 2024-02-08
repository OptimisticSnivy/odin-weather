function getCity() {
	let searchItem = document.querySelector("#searchCity");
	let inputValue = searchItem.value;

	searchItem.addEventListener("keypress", function(e) {
		if (e.key === "Enter") {
			inputValue = searchItem.value;
			searchItem.value = "";
			console.log(inputValue);
			getTemp(inputValue);
		}
	});
}

async function getTemp(input) {
	let response = await fetch(
		"https://api.weatherapi.com/v1/current.json?key=91097dd388e84789b02131324240702&q="+input,
		{ mode: "cors" },
	);
	let json = await response.json();
	console.log(json.current.temp_c);
	console.log(json.current.temp_f);
}

getCity();

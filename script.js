
const weather = document.querySelector('.container');
const latInp = document.querySelector('.latInp');
const lonInp = document.querySelector('.lonInp');


async function loadWeather (e) {
	weather.innerHTML = `<div class = 'place'>Wait...</div>`
	let lat = latInp.value;
	let lon = lonInp.value;
	
	const server = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aec213058af3596a38a337c6e2f26d41`;
	const response = await fetch(server, {
		method: 'GET',
	});

	const resResult = await response.json();


	if (response.ok) {
		getWether(resResult);
	} else {
		// weather.innerHTML = resResult.message;
		weather.innerHTML = `<div class="place">Enter correct location</div>`
	}

}


function getWether (data) {
	const loca = data.name;
	const temp = Math.round(data.main.temp) - 273;
	const feelslike = Math.round(data.main.feels_like) -273;
	const wStatus = data.weather[0].main;
	const wIcon = data.weather[0].icon;

	const templ = `
		<div class="place">${loca}</div>
		<div class="stan">${wStatus}</div>
		<div class="temp"><span class='tempData'>${temp}</span> °C</div>
		<div class="tempFill">Feels like <span class='feelData'>${feelslike}</span> °C</div>
		<img src="http://openweathermap.org/img/wn/${wIcon}.png" class= 'icon'>
		`

	weather.innerHTML = templ;
}


const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'b8ae2d3545msh38f3b05037b74d6p125043jsnfe96eff05b30'
	}
};

export const getWeatherFrom = async (query = 'Alcala de Henares') => {
	console.log('seded request', query);
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await response.json();
	const { current, location } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, temp_c, is_day, feelslike_c, wind_dir, wind_kph } = current;
	const { code, text, icon } = condition;

	return {
		country,
		localtime,
		locationName: name,
		humidity,
		temperature: temp_c,
		isDay: is_day,
		feelsLike: feelslike_c,
		windDir: wind_dir,
		windSpeed: wind_kph,
		conditionCode: code,
		conditionText: text,
		conditionIcon: icon
	};
};

<script>
	import { getWeatherFrom } from '../services/weather';
	let city;
	let weatherPromise = getWeatherFrom(city);
	function cityHandle(e) {
		//  weatherPromise = getWeatherFrom(city);
        weatherPromise= getWeatherFrom(e.target.value);
		console.log(e.target.value);
	}
</script>

<div class="input">
	<input value={city} on:blur={cityHandle} type="text" name="city" id="city" />
</div>
{#await weatherPromise then weather}
	<h1>{weather.locationName}</h1>
	<h2>{weather.temperature}º</h2>
	<h3>{weather.country}</h3>
	<h4>{weather.conditionText}</h4>
{/await}

<style>
	h1 {
		font-weight: 300;
		color: #333;
	}
	h4 {
		transform: rotate(-90deg);
		transform-origin: right bottom;
		position: absolute;
		top: 12px;
		right: 12px;
	}
</style>

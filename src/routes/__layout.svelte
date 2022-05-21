<div>
	<slot />
</div>

<style>
	:global(body) {
		background: #fdfdfd;
		display: grid;
		place-content: center;
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	div {
		aspect-ratio: 9 /16;
		width: 400px;
		max-width: 100%;
		border: 1px solid #eee;
		display: block;
		box-shadow: 0 0 100px rgb(0, 0, 0, 0.1);
		border-radius: 9px;
		/* background-color: tomato; */
        position: relative;
        padding: 0;
        margin: 0;
	}
</style>

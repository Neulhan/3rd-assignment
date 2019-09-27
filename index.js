window.onload = async () => {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	const main = async () => {
		const {
			data: {
				data: { movie: data }
			}
		} = await axios.get(
			"https://yts.lt/api/v2/movie_details.json?movie_id=2018"
			// "https://yts.lt/api/v2/list_movies.json?sort=seeds&limit=15"
			// "https://yts.lt/api/v2/list_movies.json?quality=3D"
		);
		const movie_list = await axios.get(
			'https://yts.lt/api/v2/list_movies.json?sort_by=download_count'
		);
		for (let i = 0; i < 20; i++) {
			let a = movie_list.data.data.movies[i];
			console.log(a);
			let title = document.createElement("p");
			let img = document.createElement("img");
			let tag = document.createElement("p");
			let desc = document.createElement("p");
			title.innerText = a.title_long;
			img.src = a.medium_cover_image;
			tag.innerText = a.genres;
			desc.innerText = a.description_full;

			let card = document.createElement("div");
			card.classList.add('card');
			let descCard = document.createElement("div");
			descCard.classList.add('side-card');
			descCard.append(title, tag, desc);
			card.append(img, descCard);
			app.appendChild(card);
		}


		app.removeChild(loading);


	};

	await main();
};

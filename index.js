window.onload = async () => {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	const main = async () => {
		const movie_list = await axios.get(
			'https://yts.lt/api/v2/list_movies.json?sort_by=like_count'
		);

		for (let i = 0; i < 20; i++) {
			let a = movie_list.data.data.movies[i];
			let title = document.createElement("p");
			let img = document.createElement("img");
			let tag = document.createElement("p");
			let desc = document.createElement("p");


			title.innerText = a.title_long;
			img.src = a.medium_cover_image;
			tag.innerText = a.genres;
			desc.innerText = a.description_full.substring(0,30) + "...";

			let card = document.createElement("div");
			card.classList.add('card');
			card.id = `card${i}`;

			let imgCard = document.createElement("div");
			let descCard = document.createElement("div");
			imgCard.classList.add('img-card');
			imgCard.append(img);
			descCard.classList.add('side-card');
			descCard.append(title, tag, desc);
			card.append(imgCard, descCard);
			app.appendChild(card);

            let func = function onClickEventHandler(e) {
                window.location = '/detail.html/?id='+`${a.id}`
            };
			card.addEventListener("click", func);
        }


        app.removeChild(loading);


	};

	await main();
};








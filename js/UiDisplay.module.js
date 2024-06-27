//Display Data + Display Details
export class Ui{
	displayGames(response){
		let Games =``;
		for(let i = 0 ; i<response.length;i++){
			Games += `					<div class="col-md-3  mb-5">
						<div class="myCard p-3 rounded-3 h-100" data-id=${response[i].id}>
							<div class="myCardContent card-body">
								<div class="myCardImage rounded-3 ">
									<img src="${response[i].thumbnail}" class="rounded-4 w-100" alt="">
								</div>
								<div class="Title mt-3 d-flex justify-content-between align-items-center">
									<h6 class="text-white fw-bolder">${response[i].title}</h6>
									<button type="button" class="btn btn-primary myBtn">Free</button>
								</div>
								<div class="text-center mt-3">
									<p class="text-secondary">${response[i].short_description}</p>
								</div>
								<div class="card-footer text-white border-success d-flex justify-content-between align-items-center">
									<span class="p-2 myFooterSpan rounded-4">${response[i].genre}</span>
									<span class="p-2 myFooterSpan rounded-4">${response[i].platform}</span>
								</div>
							</div>
						</div>
					</div>`
		}
		document.getElementById('myElement').innerHTML=Games;
		
	}

	displayGameDetails(response){
		
		
	let details=`
				<div class="container">
					<div class="row">
						<div class=""><span class="exitBtn text-white fs-2 ">X</span></div>
						<div class="col-md-4">
							<div class="mt-3 myContentDetails">
								<h2 class="text-white">Details Game</h2>
								<img src="${response.thumbnail}" alt="">
							</div>
						</div>
						<div class="col-md-6">
							<div class="myTextDetails text-white align mt-5">
								<h3>Title: ${response.title}</h3>
								<p>Category: <span class="bg-info rounded-2 p-2 text-black">${response.genre}</span></p>
								
								<p>Platform: <span class="bg-info rounded-2 p-2 text-black">${response.platform}</span></p>
								
								<p>Status: <span class="bg-info rounded-2 p-2 text-black">Live</span></p>
								<p>${response.description}</p>
								<a class="btn btn-outline-info myBtnDetails p-2 w-25 my-3 fs-6" target="_blank" href="${response.game_url}">Show Game</a>
							</div>
						</div>
					</div>
				</div>`
		document.querySelector('.gameDetails').innerHTML=details;


	}
}

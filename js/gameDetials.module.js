import { Ui } from "./UiDisplay.module.js";

export class GameDetails{
	constructor(id){
	this.ui = new Ui()
	this.apiGameDetails(id);
	

	}
	async apiGameDetails(id){
		//method
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e67e6190f3msh8ccd2c193579f29p1a050cjsnb0b15ec14f26',
			'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};
		//api
	const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options);
	const response = await api.json();
	this.ui.displayGameDetails(response);
	let z= document.querySelector('.exitBtn')
	z.addEventListener('click',function(){
		document.querySelector('.MynavBar').classList.toggle('d-none');
		document.querySelector('.headerImage').classList.toggle('d-none');
		document.querySelector('.myCardContnent').classList.toggle('d-none');
		document.querySelector('.gameDetails').classList.toggle('d-none');
	})
	}
}
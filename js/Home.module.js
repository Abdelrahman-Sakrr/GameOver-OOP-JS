import { GameDetails } from "./gameDetials.module.js";
import {Ui}  from "./UiDisplay.module.js";


export class MyGames{
	constructor(){
		//load api
		this.apiGames('mmorpg');
		//add active class to the target element
		document.querySelectorAll('.myNavList a').forEach((Element)=>
			Element.addEventListener('click',(e)=>{
				document.querySelector('.myActive').classList.remove('myActive')
				e.target.classList.add('myActive');	
				let x = Element.dataset.category
				this.apiGames(x);
		}));
		//call the class 
		this.ui=new Ui();
	}
	async apiGames(category){
		//add loader
		let loader = document.querySelector('.myLoader');
		loader.classList.remove('d-none');
		//api method
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'e67e6190f3msh8ccd2c193579f29p1a050cjsnb0b15ec14f26',
				'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
		//api
		const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options);
		const response = await api.json();
		//call Ui class 
		this.ui.displayGames(response);
		//remove loader
		loader.classList.add('d-none');
		this.onclickEvent();
		
	}
	showDetails(idGames){
		//call class and send id param
		let details = new GameDetails(idGames);
		document.querySelector('.MynavBar').classList.add('d-none');
		document.querySelector('.headerImage').classList.add('d-none');
		document.querySelector('.myCardContnent').classList.add('d-none');
		document.querySelector('.gameDetails').classList.remove('d-none');
	}	
	onclickEvent(){
		let x = document.querySelectorAll('.myCard')
		x.forEach(e=>{
			e.addEventListener('click',()=>{
				let id = e.dataset.id;
				// haneb3at el variable da as a parm l7aga tanya
				this.showDetails(id);
				
			});
		})
	}



}







//const URL = ;

document.getElementById('form').addEventListener('submit', showmewaifu);
const kartinka = document.getElementById('img');
const tags = document.getElementById('tags');
const NSFW = document.getElementById('NSFW');


const selected_tag = document.getElementById('selected_tag');


async function showmewaifu(event) {	
	event.preventDefault();  
	const response = await fetch(`https://api.waifu.im/random/?is_nsfw=${NSFW.checked.toString()}&full=false`);
	//console.log(response);

	const json = await response.json();

	render(json);
	//console.log(json);
}

function render(json) {

	tags.innerText = json.images[0].tags.map(tag => tag.name).join(", ");


	kartinka.src = json.images[0].url;


}


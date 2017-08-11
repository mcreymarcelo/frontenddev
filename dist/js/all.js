// Get FB Feed
// GET FB POSTS

const accessId = '230734044001385';
const accessTo = '85c6ec408130a29665e2ba9112a7f05f';
const padeId   = '408384835892044';
const fbUrl = `https://graph.facebook.com/${padeId}/feed?access_token=${accessId}|${accessTo}`;
let fbList = document.querySelector('.facebook-feed');

if( fbList){

const fbPromise = new Promise( (resolve, reject) => {
	let feed = fetch(fbUrl);

	if( feed ){
		resolve( feed );
	}
	else {
		reject(Error('An Error occured while retriving facebook feed.'));
	}
});

fbPromise
	.then( data => data.json() )
	.then( data => {
		let feed = data.data.map( item => {
			return `<div class='facebook--item'><p>${item.message || item.story}</p></div>`;
		})
		.join('');
		//console.log(feed);
		fbList.innerHTML = feed;
	})
	.catch( err => {
		console.log(err);
	});
	
}
// MAIN JS

document.querySelector('.brand').insertAdjacentHTML('beforeend', '<div class="brand-bar"></div>');

const updateScroll = ( () => {
	const myscrollTop = document.body.scrollTop;
	const myscrollHeight = document.body.scrollHeight;
	const myclientHeight = document.body.clientHeight;

	let maxHeight = myscrollHeight - myclientHeight;
	let percentage = (myscrollTop / maxHeight)*100;

	//return document.documentElement.style.setProperty('--scale', percentage + '%');

	let scrollBar = document.querySelector('.brand-bar');
	scrollBar.style.width = percentage + '%';

});

const scrolling = document.addEventListener('scroll', updateScroll,0);

// Mobile navigation toggle

const mobile_nav = document.querySelector('.mobile-nav');

mobile_nav.addEventListener('click', event => {
	
	let parent = event.target;
	parent.parentElement.classList.toggle('open');

	let mobile_wrapper = document.querySelector('.main-menu');
	mobile_wrapper.classList.toggle('open');

});

const sub_menu = document.querySelectorAll('.main-nav--parent');

for (let menus of sub_menu) {
  menus.addEventListener('click', event => {
  	let parent = event.target;
  	parent.nextSibling.nextSibling.classList.toggle('open');
  });
}
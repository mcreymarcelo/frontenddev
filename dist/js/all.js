// Get FB Feed
// GET FB POSTS

const accessId = '230734044001385';
const accessTo = '85c6ec408130a29665e2ba9112a7f05f';
const padeId   = '408384835892044';
const fbUrl = `https://graph.facebook.com/${padeId}/feed?access_token=${accessId}|${accessTo}`;
let fbList = document.querySelector('.facebook-feed');

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
 
// MAIN JS 
const updateScroll = ( () => {
	const myscrollTop = document.body.scrollTop;
	const myscrollHeight = document.body.scrollHeight;
	const myclientHeight = document.body.clientHeight;

	let maxHeight = myscrollHeight - myclientHeight;
	let percentage = (myscrollTop / maxHeight)*100;

	return document.documentElement.style.setProperty('--scale', percentage + '%');
});

const scrolling = document.addEventListener('scroll', updateScroll,0);
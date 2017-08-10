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
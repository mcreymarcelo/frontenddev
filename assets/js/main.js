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
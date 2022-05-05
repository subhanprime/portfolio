
function myFunction(){
	console.log('logogogo');
	let navbar = document.querySelector('#navbar')
	navbar.classList.toggle('navbar');
}
document.querySelector('#n1').addEventListener('click',()=>{
	let aboutSec= document.querySelector('#aboutSec');
	aboutSec.scrollIntoView({
	behavior: 'smooth'
	})
})

document.querySelector('.about').addEventListener('click',()=>{
	let aboutSec= document.querySelector('#aboutSec');
	aboutSec.scrollIntoView({
	behavior: 'smooth'
	})
})
document.querySelector('.skillsN').addEventListener('click',()=>{
	let skillsSec= document.querySelector('#skillsSec');
	skillsSec.scrollIntoView({
	behavior: 'smooth'
	})
})
document.querySelector('#n2').addEventListener('click',()=>{
	let skillsSec= document.querySelector('#skillsSec');
	skillsSec.scrollIntoView({
	behavior: 'smooth'
	})
})
document.querySelector('#n3').addEventListener('click',()=>{
	let eduSec= document.querySelector('#eduSec');
	eduSec.scrollIntoView({
	behavior: 'smooth'
	})
})
document.querySelector('#eduN').addEventListener('click',()=>{
	let eduSec= document.querySelector('#eduSec');
	eduSec.scrollIntoView({
	behavior: 'smooth'
	})
})

document.querySelector('#n4').addEventListener('click',()=>{
	let expIn= document.querySelector('#expIn');
	expIn.scrollIntoView({
	behavior: 'smooth'
	})
})
document.querySelector('#expN').addEventListener('click',()=>{
	let expIn= document.querySelector('#expIn');
	expIn.scrollIntoView({
	behavior: 'smooth'
	})
})


const activateBtn = document.querySelector('#activate')
const eye = document.querySelectorAll('#eyeBoth')


 function ani(){
 	const antL = document.querySelector('#antinaLeft')
 	const antR = document.querySelector('#antinaRight')
 	const wheelGlow = document.querySelector('#wheel')
 	const chestGlow = document.querySelector('#chestGlow')

	for (let i=0; i < eye.length; i++) {
		eye[i].classList.add('eyeB-animation')
		eye[i].style.height = "30px"
	}

	antL.classList.add('antL-animation')
	antR.classList.add('antR-animation')

	wheelGlow.classList.add('wheel-animation')
	chestGlow.classList.add('chest-animation')
}

activateBtn.addEventListener('click', ani)




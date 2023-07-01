const activateBtn = document.querySelector('#activate')
const deactivateBtn = document.querySelector('#deactivate')
const eye = document.querySelectorAll('#eyeBoth')
const left_arm = document.querySelector('.leftArm')
const left_Forearm = document.querySelector('.leftForeArm')

 function activate(){
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

	left_arm.classList.add('leftArm-animation')
	left_Forearm.classList.add('leftForeArm-animation')

	wheelGlow.classList.add('wheel-animation')
	chestGlow.classList.add('chest-animation')
}

 function de_activate(){
 	const antL = document.querySelector('#antinaLeft')
 	const antR = document.querySelector('#antinaRight')
 	const wheelGlow = document.querySelector('#wheel')
 	const chestGlow = document.querySelector('#chestGlow')

	for (let i=0; i < eye.length; i++) {
		eye[i].classList.remove('eyeB-animation')
		eye[i].style.height = "3px"
	}

	antL.classList.remove('antL-animation')
	antR.classList.remove('antR-animation')

	left_arm.classList.remove('leftArm-animation')
	left_Forearm.classList.remove('leftForeArm-animation')

	wheelGlow.classList.remove('wheel-animation')
	chestGlow.classList.remove('chest-animation')
}

activateBtn.addEventListener('click', activate)
deactivateBtn.addEventListener('click', de_activate)




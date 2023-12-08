"use strict";


$(".header-menu__button").click(function() {
	$(".header-menu__mob").fadeIn(500);
	$(".body").addClass('overflow');
});
$(".header-menu__close").click(function() {
	$(".header-menu__mob").fadeOut(500);
	$(".body").removeClass('overflow');
});
$(".menu-item").click(function() {
	$(".header-menu__mob").fadeOut(500);
	$(".body").removeClass('overflow');
});

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	const formClass = document.querySelector('.feedback-form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let textIner = document.querySelector('.valid');

		let error = onInput();

		let formData = new FormData(form);

		if (error === 0) {
			formClass.classList.add('sending');
			let response = await fetch('sendmail.php', {
				method: 'post',
				body: formData
			});
			if (response.ok) {
				formClass.classList.remove('sending');
				alert('Send massage');	
				console.log('send');
				form.reset();
				textIner.classList.add('ok');
				textIner.innerHTML = 'send massage';
			} else {
				alert('ERROR');
				formClass.classList.remove('sending');
				form.reset();
				textIner.classList.add('not');
				textIner.innerHTML = 'not send massage';
			}
		} else {
			alert('Fill in required fields');
		}
	}

	// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const input = document.querySelector('input');
	
	function isEmailValid() {
		let none = 0;
		$('.submit').click(function() {
			if($('.last-name').val().length === 0 ) {
				none = 0;
			} else {
				none++;
			}
		})
		return none;
	}
	
	function onInput() {
		let error = 0;
		if (isEmailValid() === 0) {
			input.classList.remove('invalid');
			input.classList.add('valid');
			error = 0;
		} else {
			input.classList.remove('valid');
			input.classList.add('invalid');
			error++;
		}
		console.log(error);
		return error;
	}
	
	input.addEventListener('input', onInput);
});

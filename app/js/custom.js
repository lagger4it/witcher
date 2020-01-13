document.addEventListener("DOMContentLoaded", function () {



	document.querySelector('.copy').addEventListener("click", () => {

		// let text = document.querySelector('.promocod').innerHTML;
		// navigator.clipboard.writeText(text)
		// 	.then(() => {
		// 		congratulations()
		// 	})
		// 	.catch(err => {
		// 		console.log('Something went wrong', err);
		// 	});


	})


	// start 





	function log(event) {
		var timeBadge = new Date().toTimeString().split(' ')[0];
		var newInfo = document.createElement('p');
		newInfo.innerHTML = '<span class="badge">' + timeBadge + '</span> ' + event + '</b>.';
	}

	function CopyPromo() {
		var selection = window.getSelection();
		var emailLink = document.querySelector('.promocod');

		selection.removeAllRanges();
		var range = document.createRange();
		range.selectNode(emailLink);
		selection.addRange(range);
		congratulations();
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			log('Copy email command was ' + msg);
		} catch (err) {
			log('execCommand Error', err);
		}

		selection.removeAllRanges();
	}


	// Get the buttons
	var copyBtn = document.querySelector('.copy');

	// Add click event listeners
	copyBtn.addEventListener('click', CopyPromo);
	// end 



	function congratulations() {
		document.querySelector('.promocod').classList.add('promocod_active');

		setTimeout(() => {
			document.querySelector('.promocod').classList.remove('promocod_active');
		}, 1000);
	}



	const scene = document.getElementById('scene');
	const parallaxInstance = new Parallax(scene);

	const scenes = document.getElementById('scenes');
	const parallaxInstances = new Parallax(scenes);

	// flash


	// document.querySelector('.witcher_offer__link').addEventListener('mouseover', () => {
	// 	console.log('1');
	// })

});

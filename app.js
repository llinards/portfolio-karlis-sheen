// Šo funkciju + trīs eventListener'us varētu mierīgi ņemt ārā. HTML Tu uztaisīt <a href="#bio">BIO</a>, kas automātiski ietu uz konkrēto sadaļu ar šo id. Tad pielikt klāt pie CSS, piemēram,
//  html {
//      scroll-behavior: smooth;
//  }

function scrollToSection(sectionId) {
	let section = document.querySelector(sectionId);
	section.scrollIntoView({ behavior: "smooth" });
}

// Šīs trīs darbības varētu nooptimizēt, izmantojot forEach.

// const sections = ["bio", "music", "socials"];

// sections.forEach((section) => {
// 	document.getElementById(section).addEventListener("click", () => {
// 		scrollToSection(`#${section}_sec`);
// 	});
// });

document.getElementById("bio").addEventListener("click", () => {
	scrollToSection("#bio_sec");
});
document.getElementById("music").addEventListener("click", () => {
	scrollToSection("#music_sec");
});
document.getElementById("socials").addEventListener("click", () => {
	scrollToSection("#socials_sec");
});

// Kā rakstīju šī faila sākumā, šis viss būtu lieks, ja izmantotu pieeju ar <a> un CSS.

// Ja nav paredzēts no JS puses vai kā papildināt šo variabli, const allSongs.
let allSongs = ["Life As It Is", "Stay The F*** Away From Me", "True Friends"];

function setupPopup(openPopup, closePopup, popup) {
	//Šeit visos trīs toč const var lietot.
	let modal = document.getElementById(popup);
	let openModal = document.getElementById(openPopup);
	let closeModal = document.getElementById(closePopup);

	//Cool, ka izmanto array sintaksi.
	openModal.addEventListener("click", () => {
		modal.showModal();
	});

	closeModal.addEventListener("click", () => {
		modal.close();
	});

	function onClick(event) {
		if (event.target === modal) {
			modal.close();
		}
	}
	modal.addEventListener("click", onClick);
}

for (let i = 0; i <= allSongs.length; i++) {
	setupPopup(`openPopup${i}`, `closePopup${i}`, `popup${i}`);
}

// --------------------------------
// FOR FURTHER DEVELOPMENT:

// const songsWithInfo = [
//     {
//         title: '',
//         description: ''
//     }
// ]

// function setupPopup(openPopup, closePopup, popup) {
//     let openPopupBtn = document.getElementById(openPopup);
//     let closePopupBtn = document.getElementById(closePopup);
//     let popupElement = document.getElementById(popup);

//     openPopupBtn.addEventListener('click', () => {
//         popupElement.classList.add('openPopup')
//     })

//     closePopupBtn.addEventListener('click', () => {
//         popupElement.classList.remove('openPopup')
//     })

// }

// for (let i = 0; i <= allSongs.length; i++) {
//     setupPopup(`openPopup${i}`, `closePopup${i}`, `popup${i}`);
// }

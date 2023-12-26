function scrollToSection(sectionId) {
    let section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' })
}

document.getElementById('bio').addEventListener('click', () => {
    scrollToSection('#bio_sec')
})
document.getElementById('music').addEventListener('click', () => {
    scrollToSection('#music_sec')
})
document.getElementById('socials').addEventListener('click', () => {
    scrollToSection('#socials_sec')
})

let allSongs = ['Life As It Is', 'Stay The F*** Away From Me', 'True Friends']

function setupPopup(openPopup, closePopup, popup) {
    let modal = document.getElementById(popup);
    let openModal = document.getElementById(openPopup);
    let closeModal = document.getElementById(closePopup);

    openModal.addEventListener('click', () => {
        modal.showModal();
    })

    closeModal.addEventListener('click', () => {
        modal.close();

    })

    function onClick(event) {
        if (event.target === modal) {
            modal.close();
        }
    }
    modal.addEventListener('click', onClick)

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


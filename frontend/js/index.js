// Mobile nav
// Initialization of Menu Button and Menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('nav');

// Menu button eventListener
menuToggle.addEventListener('pointerdown', () => {
    menu.classList.toggle('hidden');
});


//Sections Initialization
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('aboutUs');
const admissionSection = document.getElementById('admission');
const facilitiesSection = document.getElementById('facilities');
const contactSection = document.getElementById('contact');

//Show section function
function showSection(section) {
    // Hide Menu
    menu.classList.toggle('hidden');

    //HIdes all section
    homeSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    admissionSection.classList.add('hidden');
    facilitiesSection.classList.add('hidden');
    contactSection.classList.add('hidden');

    //Removes Hiddden fron Selected Section
    section.classList.remove('hidden');
    
    // scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
}

//Intilazation of Buttons
const homeBtn = document.querySelector('nav button:nth-child(1)');
const aboutBtn = document.querySelector('nav button:nth-child(2)');
const admissionBtn = document.querySelector('nav button:nth-child(3)');
const facilitiesBtn = document.querySelector('nav button:nth-child(4)');
const contactBtn = document.querySelector('nav button:nth-child(5)');

//Adding event listeners to buttons
homeBtn.addEventListener('pointerdown', () => {
    console.log('Clicked');
    showSection(homeSection);
});
aboutBtn.addEventListener('pointerdown', () => {
    console.log('Clicked');
    showSection(aboutSection);
});
admissionBtn.addEventListener('pointerdown', () => {
    console.log('Clicked');
    showSection(admissionSection);
});
facilitiesBtn.addEventListener('pointerdown', () => {
    console.log('Clicked');
    showSection(facilitiesSection);
});
contactBtn.addEventListener('pointerdown', () => {
    console.log('Clicked');
    showSection(contactSection);
});


//Show Home by default
showSection(homeSection);

// Modal Handling
// Initailization of Modal Buttons
const applyBtn = admissionSection.querySelector('#applyBtn');
const visitBtn = admissionSection.querySelector('#visitBtn');

// Initialization of Modals
const applyModal = document.querySelector('#applyModal');
const visitModal = document.querySelector('#visitModal');

// Modal "X" button
function closeModal(modal){
    
    // Initialization of "X"
    const x = modal.querySelector('.x');
    
    x.addEventListener('pointerdown', () => {
        // Modal flex display removed
        modal.classList.remove('flex');

        // Close dialog
        modal.close();
    });
}

// Adding Event Listener to buttons
applyBtn.addEventListener('pointerdown', () => {
    applyModal.classList.add('flex');
    applyModal.showModal();
    closeModal(applyModal);
})

visitBtn.addEventListener('pointerdown', () => {
    visitModal.classList.add('flex');
    visitModal.showModal();
    closeModal(visitModal);
})

// FAQ
// Initialization of all FAQ section
const faqSection =  admissionSection.querySelector('.faq');
const faqDiv = faqSection.querySelectorAll('div');

// EventListener for each div
faqDiv.forEach((faqDiv) => {

    const faqAnswer = faqDiv.querySelector('p');

    faqDiv.addEventListener('pointerdown', () => {
        faqAnswer.classList.toggle('hidden');
    });
});
// Clicked = Show p
// OnClick = Hide p

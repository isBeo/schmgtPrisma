// NAVIGATION
const nav = document.querySelector('nav');
const mgtBtn = nav.querySelector('button:nth-child(2)');
const settingsBtn = nav.querySelector('button:nth-child(5)');
// console.log(settingsBtn);

// MGT SUBMENUES
const mgtSubmenues = nav.querySelector('div');

// EVENT LISTENER FOR MGT BUTTON
mgtBtn.addEventListener('click', () => {
    console.log('Clicked');
    mgtSubmenues.classList.toggle('hidden');
});

const studentBtn = mgtSubmenues.querySelector('button:nth-child(1)');
const teacherBtn = mgtSubmenues.querySelector('button:nth-child(2)');
const classBtn = mgtSubmenues.querySelector('button:nth-child(3)');
const subjectBtn = mgtSubmenues.querySelector('button:nth-child(4)');

studentBtn.addEventListener('click', () => {
    console.log('Clicked');
    window.location = 'student_management.html';
});

teacherBtn.addEventListener('click', () => {
    console.log('Clicked');
    window.location = 'teacher_management.html';
});

classBtn.addEventListener('click', () => {
    console.log('Clicked');
    window.location = 'class_management.html';
});

subjectBtn.addEventListener('click', () => {
    console.log('Clicked');
    window.location = 'subject_management.html';
});

// SETTINGS EVENT LISTENER
settingsBtn.addEventListener('click', () => {
    console.log('Clicked');
    window.location = 'settings_system.html';
});
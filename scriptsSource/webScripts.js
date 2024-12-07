//navigation menu hover effects
const navigationMenu = document.querySelectorAll('#threeNav li');
navigationMenu.forEach(itemButton => {
	itemButton.addEventListener('click', function() {
		window.location.href = this.querySelector('a').href;
	});
});


// condition for navigation buttons path and calls the functions below for the onclick function
window.onload = function() {
	const currentUrl = window.location.href;
	if (currentUrl.includes("main.html")) {
		homePageActive();
	} else if (currentUrl.includes("blogPageFile.html")) {
		blogPageActive();
	} else if (currentUrl.includes("flexPageFile.html")) {
		flexPageActive();
	}
};

// navigation menu active states functions it's like a function definition in C
// home page active state
function homePageActive() {
	document.getElementById('homeLink').style.backgroundColor="#FFD700";
}
// blog page active state
function blogPageActive() {
	document.getElementById('blogLink').style.backgroundColor="#FFD700";
}
// flex page active state
function flexPageActive() {
	document.getElementById('flexLink').style.backgroundColor="#FFD700";
}

// highlights my favorite and challenging lesson
const buttonClick = document.querySelector('.hide-button');
const elements = document.querySelectorAll('.target-hidden');

// select the targeted class for only highlighting intended lessons
buttonClick.addEventListener('click', () => {
    elements.forEach(element => {
        element.classList.add('hidden'); // hidden button highlighting relevant lessons
    });
});

// for feedback and contact and message form
const popupButton = document.getElementById('feedbackMessage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const feedbackForm = document.getElementById('feedbackForm');

popupButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  popup.classList.add('hidden');
  feedbackForm.reset();
});

// dynamic contents for better user interface
function expandImageOrFile(element) {
	// Expand to a wider version
	element.style.width = '58%';  
	element.style.height = '100%';
	
	// Add a click event listener to the document to shrink the element when clicking outside
	document.addEventListener('click', function(event) {
		if (!element.contains(event.target)) {
			// Reset to original size
			element.style.width = '40%';  
			element.style.height = '80%';
			
		}
	});
}



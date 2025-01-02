document.addEventListener('DOMContentLoaded', () => {
    const garageDoor = document.getElementById('garageDoor');
    const logo = document.getElementById('logo');
    const content = document.getElementById('content');

    // Check if a session ID exists in sessionStorage
    if (!sessionStorage.getItem('garageSessionPlayed')) {
        // If not, set a flag indicating the animation has been played
        sessionStorage.setItem('garageSessionPlayed', 'true');

        // Play the animation
        setTimeout(() => {
            logo.classList.add('visible');
        }, 500);

        setTimeout(() => {
            garageDoor.classList.add('open');
        }, 1500);

        setTimeout(() => {
            content.classList.add('visible');
        }, 3000);

        setTimeout(() => {
            garageDoor.style.display = 'none';
        }, 5000);
    } else {
        // If the animation has already been played in this session, skip it
        garageDoor.style.display = 'none';
        content.classList.add('visible');
    }
});
const floatingButtons = document.getElementById('floating-buttons');
const scrollToTopButton = document.getElementById('scroll-to-top');
const hero = document.getElementById('hero');
const about = document.getElementById('about');
const services = document.getElementById('services');
const contact = document.getElementById('contact');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroBottom = hero.offsetTop + hero.offsetHeight - hero.offsetHeight/2;
    const contactTop = contact.offsetTop;

    if (scrollPosition > heroBottom ) {
        floatingButtons.classList.add('visible');
        scrollToTopButton.classList.add('visible');
    } else {
        floatingButtons.classList.remove('visible');
        scrollToTopButton.classList.remove('visible');
    }
});
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
	const qaItems = document.querySelectorAll('.qa-item');
	qaItems.forEach(item => {
		const question = item.querySelector('.qa-question');
		question.addEventListener('click', () => {
			const isActive = item.classList.contains('active');
			qaItems.forEach(i => i.classList.remove('active'));
			if (!isActive) {
				item.classList.add('active');
			}
		});
	});
});

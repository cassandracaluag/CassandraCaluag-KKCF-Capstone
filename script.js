// typing effect! 
const lines = document.querySelectorAll('.type-effect'); // get all elements with the type-effect class
console.log(lines)
let line = 0;
function typeText(elmnt, text, i = 0) {
  if (i < text.length) {
    elmnt.textContent += text[i]; // add a letter
    setTimeout(() => typeText(elmnt, text, i + 1), 40); 
  } 
}
// prepare
function startTyping(elmnt) {
  const text = elmnt.dataset.text; 
  elmnt.textContent = ''; // clear span
  typeText(elmnt, text);
}
window.onload = () => startTyping(lines[line]);

// using typed.js for identity statements - repetitive typing loop because it's cool
setTimeout(() => {
  var typed = new Typed("#identity-statements", {
    strings: ["ENGINEERING STUDENT.", "SOFTWARE DEVELOPER.", "RESILIENT PROBLEM-SOLVER.", "AMBITIOUS IDEALIST.", "WELCOME TO MY PORTFOLIO!"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
  });
}, 2000);


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5,
});
const signature = document.getElementById('signature');
observer.observe(signature);


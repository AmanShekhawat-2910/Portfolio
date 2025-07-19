window.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Web Developer",
    "Web Designer",
    "Video Editor",
    "Software Developer",
    "Animator"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById("typewriter");

  function type() {
    const currentRole = roles[roleIndex];
    const displayed = currentRole.substring(0, charIndex);

    typewriterEl.textContent = displayed;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      if (!isDeleting) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000);
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
      }
    }
  }

  type();
});

///window.addEventListener('scroll', () => {
 /// if (window.scrollY > 30) {
   // document.body.classList.add('scrolled');
 // } else {
   // document.body.classList.remove('scrolled');
 // }
//});

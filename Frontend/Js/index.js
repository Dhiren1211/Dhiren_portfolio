document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll("#navbar a");
    const sections = document.querySelectorAll("section");

    // Handle navbar link clicks
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Show the selected section
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.classList.add("active");
        });
    });

    // Optionally, show the home section by default
    sections[0].classList.add("active");

    // Handle Hire Me button click
    const hireMeButton = document.querySelector('#hire');
    hireMeButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Add 'active' class to the contact section
        const contactSection = document.querySelector('#contact');
        contactSection.classList.add('active');

        // Smooth scroll to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.setProperty('--delay', `${index * 0.1}s`); // Set delay based on index

        const input = skill.querySelector('input[type="range"]');
        const valueSpan = skill.querySelector('.value');
        const targetValue = parseInt(input.value);

        // Set the CSS variable for gradient
        input.style.setProperty('--value', `${targetValue}%`);

        let currentValue = 0;
        const increment = targetValue > 0 ? Math.ceil(targetValue / 100) : 1; // Adjust increment for smoother animation

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            valueSpan.textContent = `${currentValue}%`;
            valueSpan.style.opacity = '1'; // Ensure opacity starts at 1 for the animation
            valueSpan.style.animation = 'fadeIn 0.5s forwards'; // Apply animation
            input.style.setProperty('--value', `${currentValue}%`); // Update gradient
        }, 10);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // const text = "Welcome to My Creative Space!";
    // let index = 0;
    // const speed = 100; 

    // function typeWriter() {
    //   if (index < text.length) {
    //     document.getElementById("typed-text").innerHTML += text.charAt(index);
    //     index++;
    //     setTimeout(typeWriter, speed);
    //   } else {
    //     setTimeout(() => {
    //       document.getElementById("typed-text").innerHTML = "";
    //       index = 0;
    //       setTimeout(typeWriter, speed);
    //     }, 2500);
    //   }
    // }

    const roles = ["Dhirendra Kathayat", "Web Developer", "Software Developer", "Android Application Developer", "Graphic Designer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const roleSpeed = 100; // Typing speed
    const eraseSpeed = 50; // Erasing speed
    const pause = 1500; // Pause before deleting or typing

    function typeRole() {
        const currentRole = roles[roleIndex];
        const displayText = currentRole.slice(0, charIndex);

        document.getElementById("typed-text").innerHTML = displayText;

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(typeRole, roleSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeRole, eraseSpeed);
        } else if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeRole, eraseSpeed);
            }, pause);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role and loop back to the start
            setTimeout(typeRole, roleSpeed);
        }
    }

    typeRole();
});

const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        let link = '';

        switch (index) {
            case 0:
                link = 'https://dhiren1211.github.io/WebNote/';
                break;
            case 1:
                link = 'https://github.com/Dhiren1211/SchoolPortal';
                break;
            case 2:
                link = 'https://www.example.com/project3';
                break;
            case 3:
                link = 'https://www.example.com/project4';
                break;
            case 4:
                link = 'https://www.example.com/project5';
                break;
            case 5:
                link = 'https://www.example.com/project6';
                break;
            case 6:
                link = 'https://www.example.com/project7';
                break;
            case 7:
                link = 'https://www.example.com/project8';
                break;
            case 8:
                link = 'https://www.example.com/project9';
                break;
        }

        if (link) {
            window.open(link, '_blank');
        }
    });
});


const titles = ["I'm Coder..", "I'm Python Developer...", "I'm a Fresher.....", "I am Full stack developer"];
let titleIndex = 0;
let letterIndex = 0;

function typeTitle() {
    const currentTitle = titles[titleIndex];
    const mainTitle = document.getElementById("main-title");
    mainTitle.innerHTML = "";

    const interval = setInterval(() => {
        if (letterIndex < currentTitle.length) {
            mainTitle.innerHTML += currentTitle[letterIndex];
            letterIndex++;
        } else {
            clearInterval(interval); // Stop the interval
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            letterIndex = 0; // Reset letter index
            setTimeout(typeTitle, 1000); // Wait before typing the next title
        }
    }, 200);
}

typeTitle();

// ---------------ANIMATIONS-------------
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-page");
    const aboutImage = document.querySelector(".about-img");
    const aboutText = document.querySelector(".text-about");
    const textRight = document.querySelector(".info");

    const onScroll = () => {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when the section is visible
        if (sectionTop < windowHeight - 100) {
            aboutImage.style.opacity = "1";
            aboutImage.style.transform = "translateY(0)";
            aboutText.style.opacity = "1";
            aboutText.style.transform = "translateX(0)";
            textRight.style.opacity = '1';
            textRight.style.transform = "translateY(0)";
            window.removeEventListener("scroll", onScroll); // Remove listener after animation
        }
    };

    window.addEventListener("scroll", onScroll);
});


// --------------progress bar transition-----------

document.addEventListener("DOMContentLoaded", () => {
    const htmlProgress = document.getElementById('html-progress');
    const cssProgress = document.getElementById('css-progress');
    const jsProgress = document.getElementById('js-progress');
    const pythonProgress = document.getElementById('python-progress');
    const djangoProgress = document.getElementById('django-progress');
    const sqlProgress = document.getElementById('sql-progress');

    const htmlSkill = { id: 'html-progress', percentage: 80 };
    const cssSkill = { id: 'css-progress', percentage: 75 };
    const jsSkill = { id: 'js-progress', percentage: 50 };
    const pythonSkill = { id: 'python-progress', percentage: 75 };
    const djangoSkill = { id: 'django-progress', percentage: 65 };
    const sqlSkill = { id: 'sql-progress', percentage: 80 };

    const onScroll = () => {
        const htmlSectionTop = htmlProgress.getBoundingClientRect().top;
        const cssSectionTop = cssProgress.getBoundingClientRect().top;
        const jsSectionTop = jsProgress.getBoundingClientRect().top;
        const pythonSectionTop = pythonProgress.getBoundingClientRect().top;
        const djangoSectionTop = djangoProgress.getBoundingClientRect().top;
        const sqlSectionTop = sqlProgress.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        // Trigger animation when the section is visible
        if (htmlSectionTop < windowHeight - 50 && htmlSectionTop > 0) {
            htmlProgress.style.width = `${htmlSkill.percentage}%`;
            htmlProgress.innerHTML = `${htmlSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }

        if (cssSectionTop < windowHeight - 50 && cssSectionTop > 0) {
            cssProgress.style.width = `${cssSkill.percentage}%`;
            cssProgress.innerHTML = `${cssSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }

        if (jsSectionTop < windowHeight - 50 && jsSectionTop > 0) {
            jsProgress.style.width = `${jsSkill.percentage}%`;
            jsProgress.innerHTML = `${jsSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }

        if (pythonSectionTop < windowHeight - 50 && pythonSectionTop > 0) {
            pythonProgress.style.width = `${pythonSkill.percentage}%`;
            pythonProgress.innerHTML = `${pythonSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }

        if (djangoSectionTop < windowHeight - 50 && djangoSectionTop > 0) {
            djangoProgress.style.width = `${djangoSkill.percentage}%`;
            djangoProgress.innerHTML = `${djangoSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }

        if (sqlSectionTop < windowHeight - 50 && sqlSectionTop > 0) {
            sqlProgress.style.width = `${sqlSkill.percentage}%`;
            sqlProgress.innerHTML = `${sqlSkill.percentage}%`;  // Show the percentage value inside the progress bar
        }
    };

    window.addEventListener("scroll", onScroll);
});

// ==========================
// Mobile Navigation Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ==========================
// Fade-in Animation on Scroll
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
function showCourse(course) {

    const info = document.getElementById("course-info");

    if(course === "html"){
        info.innerHTML = `
            <h2>HTML5 Course</h2>
            <p>
            HTML (HyperText Markup Language) is the foundation of every website.
            In this course you will learn headings, paragraphs, tables, forms,
            images, links, lists, semantic tags, and how to build complete web pages.
            </p>
        `;
    }

    else if(course === "css"){
        info.innerHTML = `
            <h2>CSS3 Course</h2>
            <p>
            CSS makes websites attractive and responsive. Learn colors, fonts,
            Flexbox, Grid, animations, transitions, responsive layouts, and modern UI design.
            </p>
        `;function showCourse(course) {

    const info = document.getElementById("course-info");

    if(course === "html"){
        info.innerHTML = `
            <h2>HTML5 Course</h2>
            <p>
            HTML (HyperText Markup Language) is the foundation of every website.
            In this course you will learn headings, paragraphs, tables, forms,
            images, links, lists, semantic tags, and how to build complete web pages.
            </p>
        `;
    }

    else if(course === "css"){
        info.innerHTML = `
            <h2>CSS3 Course</h2>
            <p>
            CSS makes websites attractive and responsive. Learn colors, fonts,
            Flexbox, Grid, animations, transitions, responsive layouts, and modern UI design.
            </p>
        `;
    }

    else if(course === "js"){
        info.innerHTML = `
            <h2>JavaScript Course</h2>
            <p>
            JavaScript adds interactivity to websites. Learn variables,
            functions, DOM manipulation, events, arrays, objects, APIs,
            and build dynamic web applications.
            </p>
        `;
    }

}
    }

    else if(course === "js"){
        info.innerHTML = `
            <h2>JavaScript Course</h2>
            <p>
            JavaScript adds interactivity to websites. Learn variables,
            functions, DOM manipulation, events, arrays, objects, APIs,
            and build dynamic web applications.
            </p>
        `;
    }

}
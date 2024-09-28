const menuBtn = document.querySelector("header img");
const nav = document.querySelector("header ul");
menuBtn.onclick = () => {
    menuBtn.style.display = "none";
    nav.style.display = "flex";
}

// Wrap every letter in a span for ml7
document.querySelectorAll('.ml7 .letters').forEach(textWrapper => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Wrap every letter in a span for ml10
var textWrapper10 = document.querySelector('.ml10 .letters');
textWrapper10.innerHTML = textWrapper10.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Create a timeline
anime.timeline({ loop: false })
    // First, fade in the canvas background
    .add({
        targets: '#demo-canvas',
        opacity: 1,  // Fade in the canvas
        duration: 1500,  // Duration of the fade-in
        easing: "easeInOutQuad"  // Smooth transition
    })
    
    // Then, fade in the text container
    .add({
        targets: '.main-title',
        opacity: 1,  // Make the text visible
        duration: 500,  // Duration of the fade-in
        easing: "easeInOutQuad",  // Smooth transition
        offset: '-=500'  // Start this animation slightly before the canvas finishes fading in
    })
    // Start the first animation for ml7
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],  // Slide from below
        translateX: ["0.55em", 0], // Slight horizontal movement
        translateZ: 0,
        rotateZ: [180, 0],         // Rotate from 180 to 0 degrees
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i   // Delay each letter's animation
    })
    // Then, start the animation for ml10
    .add({
        targets: '.ml10',
        opacity: 1,  // Make the tagline visible
        duration: 1, // Immediate visibility before starting the actual animation
    })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],  // Rotate each letter from -90 to 0 degrees on the Y-axis
        duration: 1300,
        delay: (el, i) => 45 * i  // Delay each letter's animation by 45ms
    });


gsap.to("#large-header", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 100%",
        end: "top 70%",
        scrub: 2
    }
})

if (window.innerWidth > 700) {
    gsap.from(".about-video video", {
        x: "-50vw",
        transform: "rotate(-10deg)",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#aboutus",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
            scrub: 2
        }
    });
}


gsap.from(".about-text", {
    right: "0",
    opacity: 0,
    transform: "rotate(10deg)",
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    }
})

const aboutDescription = document.getElementById("about-description");
let text = aboutDescription.textContent;

// Wrap each word and punctuation in a span
aboutDescription.innerHTML = text.replace(/(\w+|\S)/g, "<span>$&</span>");

// Add &nbsp; between each word if the screen width is more than 2000px
if (window.innerWidth > 2000) {
  aboutDescription.innerHTML = aboutDescription.innerHTML.replace(/<\/span>(\s*)<span>/g, '</span>&nbsp;&nbsp;&nbsp;<span>');
}

gsap.from(".about-text", {
    x: "50vw",
    stagger: .1,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
    }
})

gsap.to("#about-description span", {
    opacity: 1,
    y: 0,
    stagger: 0.1, // Adjust the stagger for a smoother animation
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#aboutus",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
    }
});

gsap.to("#servicesHeader img", {
    transform: "rotate(-90deg)",
    duration: 1,
    scrollTrigger: {
        trigger: "#services",
        start: "top 75%",
        end: "top 20%",
        scrub: 1
    }
});

gsap.to("#servicesHeader ", {
    opacity: 0,
    scale: .8,
    duration: 1,
    scrollTrigger: {
        trigger: "#services",
        start: "top 75%",
        end: "top 20%",
        scrub: 1
    }
});

gsap.to("#services .service-card:nth-child(1)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(1)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
})
gsap.to("#services .service-card:nth-child(2)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(2)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
})
gsap.to("#services .service-card:nth-child(3)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(3)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
})
gsap.to("#services .service-card:nth-child(4)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(4)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
})
gsap.to("#services .service-card:nth-child(5)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(5)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
})
gsap.to("#services .service-card:nth-child(6)", {
    opacity: 0,
    scale: .7,
    duration: 1,
    scrollTrigger: {
        trigger: "#services .service-card:nth-child(6)",
        start: "top 10%",
        end: "top -75%",
        scrub: 1,
        pin: true
    }
});

gsap.to("#portfolio .img2", {
    left: "0%",
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 60%",
        end: "top 0%",
        scrub: 1,
    }
});

gsap.to("#portfolio .img3", {
    left: "70%",
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 60%",
        end: "top 0%",
        scrub: 1,
    }
})

gsap.from("#portfolio .text-content", {
    y: 500,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 40%",
        end: "top 0%",
        scrub: 1,
    }
})

gsap.from("#video-player video", {
    scale: .8,
    duration: 1,
    scrollTrigger: {
        trigger: "#video-player",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
    }
})

// Get the footer element
const footer = document.querySelector('footer');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Change the body color to white when the footer is about to be visible
            document.body.style.backgroundColor = 'rgb(59, 59, 59)';
        } else {
            // Reset the body color (optional)
            document.body.style.backgroundColor = '#232222'; // or any other color
        }
    });
}, {
    root: null, // Use the viewport as the root
    threshold: 0 // Trigger when 10% of the footer is visible
});

// Observe the footer
observer.observe(footer);

gsap.to("#portfolio", {
    scale: .95,
    borderRadius: "5vw",
    duration: 1,
    scrollTrigger: {
        trigger: "footer",
        scrub: 1,
        start: "top 95%",
        end: "top 70%",
    }
})

// Get the width and height
const width = window.innerWidth;
const height = window.innerHeight;

// Calculate the aspect ratio
const aspectRatio = width / height;

if (aspectRatio < 1.63) {
    const img2 = document.querySelector("#portfolio .img2");
    const img3 = document.querySelector("#portfolio .img3");
    img2.style.top = "50vh";
    img2.style.width = "30vw";
    img2.style.aspectRatio = "9/10";
    img2.style.objectFit = "cover";
    img3.style.top = "50vh";
    img3.style.width = "30vw";
    img3.style.aspectRatio = "9/10";
    img3.style.objectFit = "cover";
    if (aspectRatio > 1.05) {
        img2.style.top = "25vh";
        img3.style.top = "25vh";
    }
}

const video = document.getElementById('myVideo');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play(); // Play the video when it's visible
        } else {
            video.pause(); // Pause the video when it's not visible
        }
    });
});

// obs.observe(video); // Observe the video element
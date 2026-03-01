const photoSlider = document.querySelector("#photo-range");
const photoWrapper = document.querySelector(".photos");

photoSlider.addEventListener("input", (event) => {
    photoWrapper.style.left = `${event.target.value * -405}px`;
})

//NAV BAR CLICK
const pageNavs = document.querySelectorAll("nav li");
const navBanner = document.querySelector(".nav-banner");

//website cards (about, contact, games ...)
const pageCards = document.querySelectorAll(".card");
const coin = document.querySelector(".coin");

for (const pageCard of pageCards) {
    pageCard.addEventListener("transitionend", () => {
        if (pageCard.classList.contains("slide-out")) {
            pageCard.classList.remove("slide-out");
            pageCard.style.display = "none";
        }
    });
}

// Navigation
//const navElements = [coin, ...pageNavs];
const navElements = document.querySelectorAll("[data-link]");
navElements.forEach((el) => {
    el.addEventListener("click", (event) => {
        changePage(event.target.getAttribute("data-link"));
    })
})

let prevLinkName = "";

function changePage(pageName) {
    const el = document.querySelector(`[data-link=${pageName}]`);

    navElements.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");

    for (const child of navBanner.children) {
        child.classList.remove("active");

        child.addEventListener("transitionend", () => {
            child.remove();
        }, { once: true });

        //remove right away if it already transitioned (if spammed some letters get stuck)
        const transform = getComputedStyle(child).transform;
        const matrix = new DOMMatrixReadOnly(transform);

        if (Math.round(matrix.m41) === -120) {
            child.remove();
        }
    }

    //fill nav-banner with new spans that have letters of the clicked nav
    //also give them more delayed transition as you go
    const linkName = el.getAttribute('data-link')
    
    let delayTime = 80;

    if (prevLinkName === linkName || prevLinkName === "") {
        delayTime = 0;
    }

    prevLinkName = linkName;

    setTimeout(() => {
        updateBanner(linkName);
    }, delayTime);

    //CHANGE WEB CARD
    pageCards.forEach(card => {
        if (card.id != linkName) {
            card.classList.remove("slide-in");
            card.classList.add("slide-out");
        } else {
            setTimeout(() => {
                card.style.removeProperty("display");
                card.classList.remove("slide-out");
                card.classList.remove("slide-in");

                // force style to browser
                void card.offsetWidth; 

                card.classList.add("slide-in");
            }, 100);
        }
    });

    // Update page URL
    const url = new URL(window.location);
    url.hash = linkName
    window.history.pushState({}, '', url);

    // Change tab name
    document.title = `${capitalize(linkName)} - Jan Krampla`;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

function updateBanner(text) {
    for (let i = 0; i < text.length; i++) {
        const newLetter = document.createElement("span");
        newLetter.innerHTML = text.charAt(i);
        newLetter.style.top = `${i * 128}px`;
        
        navBanner.appendChild(newLetter);

        //force the initial values into the browser so it registers change
        newLetter.offsetWidth;

        newLetter.style.transitionDelay = `${i * 0.05}s`;
        newLetter.classList.add("active");
    }
}


//GAME CONTAINER CAROUSELS

const containers = document.querySelectorAll(".cr-container");

//looping through all carousel containers
for (const container of containers) {
    //get height of the carousel container
    const height = container.getAttribute("data-height");

    //selecting all elements in one carousel container
    const wrap = container.querySelector(".cr-slide-wrap");
    const wrapInner = container.querySelector(".cr-slide-wrap-inner");
    const btnPrev = container.querySelector(".cr-btn.prev");
    const btnNext = container.querySelector(".cr-btn.next");
    const dotsWrap = container.querySelector(".cr-dots");

    //set height of container
    wrap.style.height = height;

    //get width of the container
    let width;

    function updateWidth() {
        width = container.getBoundingClientRect().width;

        //tell slides the width of one column
        for (const slide of wrapInner.children) {
            slide.style.width = `${width}px`
        }
    }

    window.addEventListener('resize', () => {
        updateWidth();
    })

    //Amount of slides in carousel
    const slideAmount = wrapInner.children.length;

    let activeSlide = 0;
    
    //store generated dots in this array
    const dots = [];

    //func that changes active slide and updates slide position
    //updates control button state (disabled)
    function setSlide(index) {
        activeSlide = index;

        btnNext.removeAttribute("disabled");
        btnPrev.removeAttribute("disabled");

        if (activeSlide >= slideAmount - 1) {
            activeSlide = slideAmount - 1;
            btnNext.setAttribute("disabled", "true");
        }

        if (activeSlide <= 0) {
            activeSlide = 0;
            btnPrev.setAttribute("disabled", "true");
        }

        //reset all dots and then activate one
        for (const dot of dots) {
            dot.classList.remove("active");
        }
        dots[activeSlide].classList.add("active");

        //slide offset
        wrapInner.style.left = `${-activeSlide * width}px`
    }

    //buttons
    btnPrev.addEventListener("click", () => {
        setSlide(activeSlide - 1);
    })

    btnNext.addEventListener("click", () => {
        setSlide(activeSlide + 1);
    })

    //generate dots
    for (let i = 0; i < slideAmount; i++) {
        const dot = document.createElement("div");

        dot.classList.add("cr-dot");

        dot.addEventListener("click", () => {
            setSlide(i);
        })
        
        dots.push(dot);
        dotsWrap.appendChild(dot);
    }

    //initialize slider (disable button, activate dot)
    setSlide(0);

    updateWidth();
}

//SET ACTIVE PAGE ON LOAD
if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    changePage(hash);
} else {
    changePage("hello");
}

//LIGHT/DARK MODE SWITCH
const lightBtn = document.querySelector("#theme");
lightBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    lightBtn.classList.toggle("dark");
});

//SHOW IMAGE FROM CAROUSEL
const myImages = document.querySelectorAll('.game-container img')

for (const image of myImages) {
    image.addEventListener("click", () => {
        const imgSrc = image.getAttribute("src");
        const modalImage = document.createElement("img");
        const imageWrapper = document.createElement("div");

        stopScroll();

        modalImage.setAttribute("src", imgSrc);
        modalImage.classList.add("modal-image");
        imageWrapper.classList.add("modal-image-wrapper");

        function close() {
            setTimeout(() => {
                imageWrapper.remove();
                modalImage.remove();
                startScroll();
            }, 150);

            modalImage.classList.add("transition-out");
            imageWrapper.classList.add("wrapper-transition-out");
        }

        imageWrapper.addEventListener("click", close);
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                close();
            }
        })
        
        document.body.appendChild(imageWrapper);
        imageWrapper.appendChild(modalImage);
    })
}

//WHAT YEAR IS IT?????
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear() - 2016;

//AFTER LOADING EVERYTHING - PUT DISPLAY NONE TO NONVISIBLE CARDS
//SO THE VIEWER CANNOT PRESS LINKS AND STUFF
pageCards.forEach((card, index) => {
    if (index !== 0) {
        card.style.display = "none";
    }
});

//helper functions
function stopScroll() {
    document.body.style.overflow = "hidden";
}

function startScroll() {
    document.body.style.removeProperty("overflow")
}
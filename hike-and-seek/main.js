// Tell the document (ALl the HTML) we want to find all <a> elements inside the `.navigation-list`
const mylinks = document.querySelectorAll('.navigation-list a')

for (const link of mylinks) {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        toggleNav()
        
        // Extract the `href` attribute from the link element
        const idToScrollTo = link.getAttribute("href")
        
        // If there is no link, scroll up
        if (idToScrollTo === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            
            // Abort continuing the function
            return
        }
        
        // Find the element we want to scroll to
        const elementToScrollTo = document.querySelector(idToScrollTo)
        
        if (elementToScrollTo) {
            // The element tells the page, it should scroll to it so that it appears in the center
            elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    })
}

//SHOW IMAGE
const myImages = document.querySelectorAll('.content-wrapper img')

for (const image of myImages) {
    image.addEventListener("click", () => {
        const imgSrc = image.getAttribute("src");
        const modalImage = document.createElement("img")

        stopScroll();

        modalImage.setAttribute("src", imgSrc)
        modalImage.classList.add("modal-image")

        function close() {
            modalImage.remove()
            startScroll();
        }

        modalImage.addEventListener("click", close);
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                close();
            }
        })
        
        document.body.appendChild(modalImage)
    })
}

//PLAY VIDEO BUTTON
const myVideos = document.querySelectorAll('video')

for (const video of myVideos) {
    const playButton = video.nextElementSibling;

    playButton.addEventListener("click", () => {
        video.play();

        video.setAttribute("controls", true);

        playButton.style.display = "none";
    })
}


//button toggle
const navButton = document.querySelector(".nav-btn");
const header = document.querySelector("header");

navButton.addEventListener("click", () => {
    toggleNav();
})

window.addEventListener('resize', () => {
    header.classList.remove("nav-open");
})

//toggle function
function toggleNav(){
    header.classList.toggle("nav-open");
}


//CLICK to close navigation
const prom = document.querySelector("nav div");

prom.addEventListener("click", () => {
    header.classList.remove("nav-open");
})

function stopScroll() {
    document.body.style.overflow = "hidden";
}

function startScroll() {
    document.body.style.removeProperty("overflow")
}
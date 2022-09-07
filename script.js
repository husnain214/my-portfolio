const root = document.documentElement
const lightTheme = document.querySelector ("#lightTheme")
const darkTheme = document.querySelector ("#darkTheme")
const logo = document.querySelector (".logo")
const hamMenu = document.querySelector (".hamburger-section")
const hamBtn = document.querySelector ("#hamburger-btn")
const cross = document.querySelector ("#cross")
const cursor = document.querySelector ("#cursor")
const hamburgerNavItems = document.querySelectorAll (".hamburger-items li")

hamburgerNavItems.forEach(
    item => item.addEventListener("click", () => hamMenu.style.height = "0")
)

lightTheme.addEventListener ("click", setLightTheme)
darkTheme.addEventListener ("click", setDarkTheme)

function setLightTheme () {
    root.style.setProperty ("--body-bg", "#eaf3f1")
    root.style.setProperty ("--dark-green", "#0A211E")
    logo.setAttribute ("src", "./images/logo.svg")
}

function setDarkTheme () {
    root.style.setProperty ("--body-bg", "#0A211E")
    root.style.setProperty ("--dark-green", "#eaf3f1")
    logo.setAttribute ("src", "./images/logo-dark.svg")
}

function toggleNav () {
    if (hamMenu.className.includes ("hamAnimationShow")) {
        hamMenu.classList.remove ("hamAnimationShow")
        hamMenu.classList.add ("hamAnimationHide")
    }
    else {
        hamMenu.classList.add ("hamAnimationShow")
        hamMenu.classList.remove ("hamAnimationHide")
    }
}

hamBtn.addEventListener ("click", () => {
    hamMenu.style.height = "100%"
})

cross.addEventListener ("click", () => {
    hamMenu.style.height = "0"
})

document.addEventListener ("mousemove", e => {
    cursor.style.top = `${e.pageY- 10}px`
    cursor.style.left = `${e.pageX - 10}px`
})
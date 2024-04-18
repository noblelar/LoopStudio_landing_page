const toggleBar = document.querySelector('.toggle_nav')
const closeBtn = document.querySelector('.close')
const sideBar = document.querySelector('.side_bar')

// functions
function toggleNav() {
    sideBar.classList.toggle('open')
}

// event listeners
toggleBar.addEventListener("click", toggleNav)
closeBtn.addEventListener("click", toggleNav)
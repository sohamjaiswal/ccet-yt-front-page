const persistentSidebarPref = localStorage.getItem('sidebar') ? localStorage.getItem('sidebar') : null;

const sidebarToggle = document.getElementById('sidebar-toggle')

let currentSidebarPref = true

const determiner = () => {
    return currentSidebarPref ? 'active' : 'inactive'
}

const updateTheme = () => {
    document.documentElement.setAttribute('sidebar', determiner());
    localStorage.setItem('sidebar', determiner())
    return
}

const init = () => {
    if (persistentSidebarPref) {
        currentSidebarPref = persistentSidebarPref === "active" ? true : false
        updateTheme()
        return
    }
    updateTheme()
    return
}

const sidebarToggleClickHandler = () => {
    currentSidebarPref = !currentSidebarPref
    updateTheme()
}

init()

sidebarToggle.addEventListener('click', sidebarToggleClickHandler)

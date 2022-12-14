const PERSISTENT_SIDEBAR_PREF = localStorage.getItem('sidebar') ? localStorage.getItem('sidebar') : null;

const SIDEBAR_TOGGLE = document.getElementById('sidebar-toggle')

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
    if (PERSISTENT_SIDEBAR_PREF) {
        currentSidebarPref = PERSISTENT_SIDEBAR_PREF === "active" ? true : false
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

SIDEBAR_TOGGLE.addEventListener('click', sidebarToggleClickHandler)

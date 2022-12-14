const CURRENT_THEME = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const THEME_SWITCH = document.getElementById('theme-switch')

if (CURRENT_THEME) {
    document.documentElement.setAttribute('theme', CURRENT_THEME);
    if (CURRENT_THEME === 'dark') {
        THEME_SWITCH.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        return
    }
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
    return
}

THEME_SWITCH.addEventListener('change', switchTheme, false);
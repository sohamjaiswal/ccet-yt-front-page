const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const themeSwitch = document.getElementById('theme-switch')

if (currentTheme) {
    document.documentElement.setAttribute('theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
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

themeSwitch.addEventListener('change', switchTheme, false);
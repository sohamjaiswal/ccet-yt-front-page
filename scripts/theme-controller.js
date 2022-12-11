const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const themeSwitch = document.getElementById('theme-switch')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }  
}

themeSwitch.addEventListener('change', switchTheme, false);
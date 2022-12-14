const SEARCH_BUTTON = document.getElementById('search-button')
const SEARCH_TEXT = document.getElementById('search-text')

const searchButtonClickHandler = () => {
    console.log('ran')
    const searchEntry = document.getElementById('search-text')
    const actualSearchEntry = searchEntry.value.replace(' ', '+')
    console.log(searchEntry, actualSearchEntry)
    // window.open('https://www.youtube.com/results?search_query=' + actualSearchEntry, '_blank').focus();
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank').focus()
}

SEARCH_BUTTON.addEventListener('click', () => searchButtonClickHandler(), false)
SEARCH_TEXT.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchButtonClickHandler()
    }
}, false)

const searchButton = document.getElementById('search-button')

const searchButtonClickHandler = () => {
    const searchEntry = document.getElementById('search-text')
    const actualSearchEntry = searchEntry.value.replace(' ', '+')
    console.log(searchEntry, actualSearchEntry)
    window.open('https://www.youtube.com/results?search_query=' + actualSearchEntry, '_blank').focus();
}

searchButton.addEventListener('click', () => searchButtonClickHandler(), false)

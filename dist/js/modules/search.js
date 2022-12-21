import { renderSearchResult } from './ui.js';
function filterBooks(query, books) {
    return books.filter((book) => book.title.toString().toLowerCase().includes(query) === true);
}
function search(query, books) {
    const filtred = filterBooks(query, books);
    if (!query || !filtred.length) {
        document.querySelector('.search__results')?.classList.add('hidden');
    }
    else {
        document.querySelector('.search__results')?.classList.remove('hidden');
    }
    document.querySelectorAll('.search__results > .search__result')
        .forEach((result) => {
        result.remove();
    });
    filtred.forEach((book) => {
        renderSearchResult(book);
    });
}
export { search };

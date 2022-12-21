import { fetchBooks } from './modules/api.js';
import { renderBooks, toggleView } from './modules/ui.js';
import { search } from './modules/search.js';
const books = await fetchBooks();
renderBooks(books);
document.querySelector('.book__back-button')
    ?.addEventListener('click', () => toggleView());
document.querySelector('.search__searchbar')
    ?.addEventListener('input', (event) => {
    const target = event.target;
    search(target.value.toLocaleLowerCase(), books);
});

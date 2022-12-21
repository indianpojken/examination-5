import { fetchBooks } from './modules/api.js'
import { renderBooks, toggleView } from './modules/ui.js';

renderBooks(await fetchBooks());

document.querySelector('.book__back-button')
    ?.addEventListener('click', () => toggleView());

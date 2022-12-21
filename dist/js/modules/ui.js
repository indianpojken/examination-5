const bookBackground = "linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%)";
function toggleView() {
    document.querySelector('body')?.classList.toggle('bg--dark');
    document.querySelector('#library')?.classList.add('slide-from-left');
    document.querySelector('#library')?.classList.toggle('hidden');
    document.querySelector('#book')?.classList.toggle('hidden');
    clearSearch();
}
function renderBook(book) {
    const query = (query) => document.querySelector(query);
    document.querySelectorAll('.book__title').forEach((title) => {
        title.innerText = book.title;
    });
    document.querySelectorAll('.book__author').forEach((author) => {
        author.innerText = book.author;
    });
    query('.book__book').style.background = `${bookBackground},${book.color}`;
    query('.book__plot').innerText = book.plot;
    query('.book__audiance > .book__stat').innerText = book.audience;
    query('.book__first-published > .book__stat').innerText = book.year.toString();
    query('.book__pages > .book__stat').innerText = book.pages?.toString() ?? "";
    query('.book__publisher > .book__stat').innerText = book.publisher;
    document.querySelectorAll('.book__stat').forEach((stat) => {
        if (!stat.innerText) {
            stat.parentElement?.classList.add('hidden');
        }
        else {
            stat.parentElement?.classList.remove('hidden');
        }
    });
}
function renderBooks(books) {
    books.forEach((book) => {
        const [template] = (document.querySelector('.books__grid > template')
            ?.content.cloneNode(true)).children;
        template.querySelector('.books__title').innerText = book.title;
        template.querySelector('.books__author').innerText = book.author;
        template.style.background = `${bookBackground},${book.color}`;
        template.addEventListener('click', () => {
            renderBook(book);
            toggleView();
        });
        document.querySelector('.books__grid')?.append(template);
    });
}
function renderSearchResult(book) {
    const [template] = (document.querySelector('.search__results > template')
        ?.content.cloneNode(true)).children;
    template.querySelector('.search__title').innerText = book.title;
    template.querySelector('.search__author').innerText = book.author;
    template.querySelector('.search__book').style.background = `${bookBackground},${book.color}`;
    template.addEventListener('click', () => {
        renderBook(book);
        toggleView();
    });
    document.querySelector('.search__results')?.append(template);
}
function clearSearch() {
    document.querySelector('.search__results')?.classList.add('hidden');
    document.querySelectorAll('.search__results > .search__result').forEach((result) => {
        result.remove();
    });
    document.querySelector('.search__searchbar').value = '';
}
export { renderBooks, toggleView, renderSearchResult };

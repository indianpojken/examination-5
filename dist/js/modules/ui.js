function toggleView() {
    document.querySelector('body')?.classList.toggle('bg--dark');
    document.querySelector('#library')?.classList.add('slide-from-left');
    document.querySelector('#library')?.classList.toggle('hidden');
    document.querySelector('#book')?.classList.toggle('hidden');
}
function renderBook(book) {
    const query = (query) => document.querySelector(query);
    document.querySelectorAll('.book__title').forEach((title) => {
        title.innerText = book.title;
    });
    document.querySelectorAll('.book__author').forEach((author) => {
        author.innerText = book.author;
    });
    query('.book__book').style.background = `
        linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%),
        ${book.color}
    `;
    query('.book__plot').innerText = book.plot;
    query('.book__audiance > .book__stat').innerText = book.audience;
    query('.book__first-published > .book__stat').innerText = book.year.toString();
    query('.book__pages > .book__stat').innerText = book.pages.toString();
    query('.book__publisher > .book__stat').innerText = book.publisher;
}
function renderBooks(books) {
    books.forEach((book) => {
        const [template] = (document.querySelector('.books__grid > template')
            ?.content.cloneNode(true)).children;
        const query = (query) => template?.querySelector(query);
        query('.books__title').innerText = book.title;
        query('.books__author').innerText = book.author;
        template.style.background = `
            linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%),
            ${book.color}
        `;
        template.addEventListener('click', () => {
            renderBook(book);
            toggleView();
        });
        document.querySelector('.books__grid')?.append(template);
    });
}
export { renderBooks, toggleView };

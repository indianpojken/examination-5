import { Book } from './interfaces';

function toggleView(): void {
    document.querySelector('body')?.classList.toggle('bg--dark');
    document.querySelector('#library')?.classList.add('slide-from-left');
    document.querySelector('#library')?.classList.toggle('hidden');
    document.querySelector('#book')?.classList.toggle('hidden');
}

function renderBook(book: Book): void {
    const query = (query: string): HTMLElement =>
        document.querySelector(query) as HTMLElement;

    document.querySelectorAll<HTMLElement>('.book__title').forEach((title) => {
        title.innerText = book.title;
    });

    document.querySelectorAll<HTMLElement>('.book__author').forEach((author) => {
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

function renderBooks(books: Book[]): void {
    books.forEach((book) => {
        const [template] =
            (document.querySelector<HTMLTemplateElement>('.books__grid > template')
                ?.content.cloneNode(true) as HTMLElement).children;

        const query = (query: string): HTMLElement =>
            template?.querySelector(query) as HTMLElement;

        query('.books__title').innerText = book.title;
        query('.books__author').innerText = book.author;

        (template as HTMLElement).style.background = `
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

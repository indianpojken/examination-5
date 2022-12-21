async function fetchBooks() {
    const endpoint = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    try {
        const response = await fetch(endpoint);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
export { fetchBooks };

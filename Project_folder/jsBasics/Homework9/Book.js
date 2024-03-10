class Book {
    constructor(title, author, year) {
        this.bookTitle = title
        this.bookAuthor = author
        this.bookYear = year
    }

    static findOldestbook(books) {
        if (!Array.isArray(books) || books.length === 0) {
        throw new Error('Invalid input')
    }
    let oldBooksort = books[0]
    for (let i=1; i < books.length; i++){
        if(books[i].bookYear < oldBooksort.bookYear){
            oldBooksort = books[i]
        }
    } return oldBooksort
}
    printInfo() {
    console.log(`${this.bookTitle}, ${this.bookAuthor}, ${this.bookYear}`)
    }
    }
    export { Book }

    const book1 = new Book('Pride and Prejudice', 'Jane Austen', '1813')
    const book2 = new Book('The old man and the sea', 'Ernest Hemingway', '1952')
    const book3 = new Book('The Da Vinci Code', 'Dan Brown', '2003')

    book1.printInfo()
    book2.printInfo()
    book3.printInfo()

const books = [book1, book2, book3]
const oldBook = Book.findOldestbook(books);
console.log('The oldest book is:', oldBook.bookTitle, oldBook.bookYear)

// const abc = "HEllo" 
// const cbd = 'Bye'

import { Book } from './Book.js'

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year)
        this.fileFormat = fileFormat
    }

    static createEBookFromBook(book, fileFormat) {
        return new EBook(book.bookTitle, book.bookAuthor, book.bookYear, fileFormat)
    }

    printInfo() {
        console.log(`${this.bookTitle}, ${this.bookAuthor}, ${this.bookYear}, ${this.fileFormat}`)
    }
}

const book = new Book('Pride and Prejudice', 'Jane Austen', '1813')
const eBook = EBook.createEBookFromBook(book, 'PDF')
eBook.printInfo()
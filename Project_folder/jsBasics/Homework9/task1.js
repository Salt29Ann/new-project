// get/set

export class Book {
    constructor(title, author, year) {
        this._bookTitle = title
        this._bookAuthor = author
        this._bookYear = year
    }
    get bookTitle() {
        return this._bookTitle
    }
    set bookTitle(value) {
        if (!/[a-zA-Z]/.test(value)) {
            throw new Error('Book title should contain at least one letter')
        }
        this._bookTitle = value
    }

    get bookAuthor() {
        return this._bookAuthor
    }
    set bookAuthor(value) {
        if (typeof value !== 'string') {
            throw new Error('Author name should contain letters');
        }
        this._bookAuthor = value
    }

    get bookYear() {
        return this._bookYear
    }
    set bookYear(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Book year should contain numbers')
        }
        this._bookYear = value
    }
    printInfo() {
        console.log(`${this._bookTitle}, ${this._bookAuthor}, ${this._bookYear}`)
        }
    }



    export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year)
        this._fileFormat = fileFormat
        this.validateFileFormat(fileFormat)
    }

    get fileFormat() {
        return this._fileFormat
    }
    set fileFormat(value) {
        this.validateFileFormat(value)
        this._fileFormat = value
    }
    validateFileFormat(value) {
        const existingFormats = ['PDF', 'EPUB', 'MOBI', 'TXT', 'DOCX']
        if (!existingFormats.includes(value.toUpperCase())) {
            throw new Error('Invalid file format')
        }
    }

printInfo() {
    console.log(`${this._bookTitle}, ${this._bookAuthor}, ${this._bookYear}, ${this._fileFormat}`)
    }
}

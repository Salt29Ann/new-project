import { Book, EBook } from "./task1.js";

const book1 = new Book("Pride and Prejudice", "Jane Austen", "1813");
const book2 = new Book("The old man and the sea", "Ernest Hemingway", "1952");
const book3 = new Book("The Da Vinci Code", "Dan Brown", "2003");

const Ebook1 = new EBook("Pride and Prejudice", "Jane Austen", "1813", "PDF");
const Ebook2 = new EBook(
  "The old man and the sea",
  "Ernest Hemingway",
  "1952",
  "TXT",
);
const Ebook3 = new EBook("The Da Vinci Code", "Dan Brown", "2003", "EPUB");

book1.printInfo();
book2.printInfo();
book3.printInfo();

Ebook1.printInfo();
Ebook2.printInfo();
Ebook3.printInfo();

import * as selectors from '../selector/selectors.js';
import Books from './books.js';

export default class UpdateDisplay {
  constructor(author, title) {
    this.title = title;
    this.author = author;
  }

	static books = [];

	static listSection = selectors.listSection;

	static bookTitle = selectors.bookTitle;

	static formBtn = selectors.formBtn;

	static bookAuthor = selectors.bookAuthor;

	static listBtn = selectors.listBtn;

	static addActive = selectors.addActive;

	// create new book
	static addBooks = () => {
	  const bookItem = new Books(
	    UpdateDisplay.bookTitle.value,
	    UpdateDisplay.bookAuthor.value,
	  );
	  UpdateDisplay.books.push(bookItem);
	  localStorage.setItem('books', JSON.stringify(UpdateDisplay.books));

	  UpdateDisplay.bookAuthor.value = '';
	  UpdateDisplay.bookTitle.value = '';
	  UpdateDisplay.addBookItem(bookItem, UpdateDisplay.books.length - 1);
	}

	static delBook = (bookItem, pos) => {
	  const bookBlock = document.getElementById(pos);
	  UpdateDisplay.books = UpdateDisplay.books.filter((item) => item !== bookItem);
	  localStorage.setItem('books', JSON.stringify(UpdateDisplay.books));
	  UpdateDisplay.listSection.removeChild(bookBlock);
	}

	static updateUi = () => {
	  if (localStorage.getItem('books')) {
	    UpdateDisplay.books = JSON.parse(localStorage.getItem('books'));
	    UpdateDisplay.books.forEach((bookItem, pos) => {
	      UpdateDisplay.addBookItem(bookItem, pos);
	    });
	  } else {
	    localStorage.setItem('books', '');
	    UpdateDisplay.books = [];
	  }
	}

	static addBookItem = (bookItem, pos) => {
	  const bookBlock = document.createElement('div');
	  bookBlock.classList.add('bookBlock');
	  bookBlock.id = pos;

	  const removeBtn = document.createElement('button');
	  removeBtn.classList.add('remove-btn');

	  bookBlock.innerHTML = `
      <p class='book-title'>'${bookItem.title}' by ${bookItem.author}</p>`;

	  removeBtn.innerText = 'Remove';

	  removeBtn.onclick = () => {
	    UpdateDisplay.delBook(bookItem, pos);
	  };

	  bookBlock.appendChild(removeBtn);
	  UpdateDisplay.listSection.appendChild(bookBlock);
	}
}
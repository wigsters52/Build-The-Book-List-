// book constructor
function Book (title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// ui constructor - set of prototype methods that add the book to the list
function UI () {}
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list')
  const row = document.createElement('tr')
  row.innerHTML =
   `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class='delete'>X<a></td>`

  list.appendChild(row)
}
// show alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('div')

  div.className = `alert ${className}`

  div.appendChild(document.createTextNode(message))

  const container = document.querySelector('.container')

  const form = document.querySelector('#book-form')

  container.insertBefore(div, form)
  setTimeout(function () {
    document.querySelector('.alert').remove()
  }, 3000)
}
// clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value
  // instantiate book
  const book = new Book(title, author, isbn)

  // INstantiate UI
  const ui = new UI()

  // validate
  if (title === '' || author === '' || isbn === '') {
    // error allert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    ui.addBookToList(book)

    // clear fields

    ui.clearFields()
  }

  // Add book to list
  ui.addBookToList(book)

  // clear fields

  ui.clearFields()
  e.preventDefault()
})

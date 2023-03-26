const {
  addBookHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes=[
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{booksId}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{booksId}',
    handler: updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{booksId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports=routes;

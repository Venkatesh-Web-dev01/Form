import { useState } from "react";

function BookForm() {
  const [bookList, setBookList] = useState([]);

  const handleBooks = (formData) => {
    const bookname = formData.get("bookname");
    const author = formData.get("author");
    const publisher = formData.get("publisher");
    const edition = formData.get("edition");

    const length = bookList.length;
    let id;

    if (length > 0) {
      id = length + 1;
    } else {
      id = 0;
    }

    const newBook = {
      bookId: bookList.length + 1,
      bName: bookname,
      bAuthor: author,
      bPublisher: publisher,
      bEdition: edition,
    };

    setBookList([...bookList, newBook]);
  };

  return (
    <>
      <h1>Book Form</h1>

      <form action={handleBooks}>
        <div>
          <label>Book Name: </label>
          <input type="text" name="bookname" />
        </div>

        <br />

        <div>
          <label>Author: </label>
          <input type="text" name="author" />
        </div>

        <br />

        <div>
          <label>Publisher: </label>
          <input type="text" name="publisher" />
        </div>

        <br />

        <div>
          <label>Edition: </label>
          <input type="text" name="edition" />
        </div>

        <br />

        <input type="submit" value="Submit" />
      </form>

      <hr />

      <h2>Book List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Edition</th>
            <th>Publisher</th>
          </tr>
        </thead>

        <tbody>
          {bookList.map((book) => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.bName}</td>
              <td>{book.bAuthor}</td>
              <td>{book.bEdition}</td>
              <td>{book.bPublisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookForm;
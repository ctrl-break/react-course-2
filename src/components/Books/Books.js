import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { removeBook } from '../../actions/book-actions'
import Book from "./Book";


function Books() {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)

  const handleDelete = useCallback(
    (evt) => {
      const bookId = evt.target.dataset.id
      console.log(bookId);
      dispatch(removeBook(bookId))
    }, [dispatch]
  )

  return (
    <ul className="list-group books-list">
      {books.map((book) =>
        <Book key={book._id} item={book} onDelete={handleDelete} />
      )}
    </ul>
  )
}

export default Books

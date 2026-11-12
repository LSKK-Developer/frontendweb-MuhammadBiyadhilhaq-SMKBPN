import { useState } from 'react'
import './App.css'

interface BookNote {
  id: number
  title: string
  author: string
  notes: string
}

function App() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [notes, setNotes] = useState('')
  const [books, setBooks] = useState<BookNote[]>([])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!title.trim() || !author.trim() || !notes.trim()) {
      return
    }

    const newBook: BookNote = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      notes: notes.trim(),
    }

    setBooks((previousBooks) => [...previousBooks, newBook])
    setTitle('')
    setAuthor('')
    setNotes('')
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Book Notes</h1>
        <p>Catat dan simpan perjalanan membaca buku kamu.</p>
      </header>

      <section className="book-form-section">
        <h2>Tambah Catatan Buku</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="book-title">Judul Buku</label>
            <input
              type="text"
              id="book-title"
              placeholder="Masukkan judul buku"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-author">Penulis</label>
            <input
              type="text"
              id="book-author"
              placeholder="Masukkan nama penulis"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="book-notes">Catatan</label>
            <textarea
              id="book-notes"
              placeholder="Apa yang kamu pelajari dari buku ini?"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>

          <button type="submit">Simpan Catatan</button>
        </form>
      </section>

      <section className="book-list-section">
        <h2>Daftar Buku</h2>
        {books.length > 0 ? (
          <ul className="book-list">
            {books.map((book) => (
              <li key={book.id} className="book-item">
                <h3>{book.title}</h3>
                <p>Penulis: {book.author}</p>
                <p>Catatan: {book.notes}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">
            Belum ada catatan buku. Yuk, mulai membaca!
          </p>
        )}
      </section>
    </main>
  )
}

export default App

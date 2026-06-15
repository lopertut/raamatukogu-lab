const express = require("express");
const router = express.Router();
const data = require("../data");

// GET /api/books
router.get("/", (req, res) => {
  res.json({ books: data.books });
});

// GET /api/books/search?title=...&author=...
router.get("/search", (req, res) => {
  const { title, author } = req.query;
  if (!title && !author) {
    return res.status(400).json({ error: "Lisa parameeter ?title=... või ?author=..." });
  }
  
  let results = data.books;

  // If both parameters are identical (single search bar use case)
  if (title === author) {
    results = results.filter((b) => 
      b.title.toLowerCase().includes(title.toLowerCase()) || 
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  } else {
    // Fallback to separate filters if they are searching specific fields
    if (title) results = results.filter((b) => b.title.toLowerCase().includes(title.toLowerCase()));
    if (author) results = results.filter((b) => b.author.toLowerCase().includes(author.toLowerCase()));
  }

  res.json({ results, count: results.length });
});

// GET /api/books/genres
router.get("/genres", (req, res) => {
  const genres = [...new Set(data.books.map((b) => b.genre))];
  res.json({ genres });
});

// GET /api/books/genre/:genre
router.get("/genre/:genre", (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const books = data.books.filter((b) => b.genre === genre);
  if (books.length === 0) return res.status(404).json({ error: "Selle žanriga raamatuid ei leitud" });
  res.json({ books, count: books.length });
});

// GET /api/books/:id
router.get("/:id", (req, res) => {
  const book = data.books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Raamatut ei leitud" });
  const bookLoans = data.loans.filter((l) => l.bookId === book.id && !l.returnedAt);
  res.json({ ...book, currentLoan: bookLoans[0] || null });
});

module.exports = router;

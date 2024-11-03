package com.bee.next.librairytraining.controllers;

import com.bee.next.librairytraining.entities.BookEntity;
import com.bee.next.librairytraining.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    // Get all books
    @GetMapping
    public List<BookEntity> getAllBooks() {
        return bookService.getAllBooks();
    }

    // Get a specific book by ID
    @GetMapping("/{id}")
    public ResponseEntity<BookEntity> getBookById(@PathVariable Integer id) {
        Optional<BookEntity> book = bookService.getBookById(id);
        return book.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new book
    @PostMapping
    public BookEntity createBook(@RequestBody BookEntity book) {
        return bookService.saveBook(book);
    }

    // Update an existing book
    @PutMapping("/{id}")
    public ResponseEntity<BookEntity> updateBook(@PathVariable Integer id, @RequestBody BookEntity bookDetails) {
        try {
            BookEntity updatedBook = bookService.updateBook(id, bookDetails);
            return ResponseEntity.ok(updatedBook);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a book
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
        try {
            bookService.deleteBook(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

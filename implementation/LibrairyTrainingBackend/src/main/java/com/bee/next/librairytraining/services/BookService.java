package com.bee.next.librairytraining.services;

import com.bee.next.librairytraining.entities.BookEntity;
import com.bee.next.librairytraining.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Fetch all books
    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    // Fetch a book by ID
    public Optional<BookEntity> getBookById(Integer id) {
        return bookRepository.findById(id);
    }

    // Save a new book
    public BookEntity saveBook(BookEntity book) {
        return bookRepository.save(book);
    }

    // Update an existing book
    public BookEntity updateBook(Integer id, BookEntity bookDetails) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setName(bookDetails.getName());
                    book.setAuthor(bookDetails.getAuthor());
                    return bookRepository.save(book);
                })
                .orElseThrow(() -> new RuntimeException("Book not found with id " + id));
    }

    // Delete a book by ID
    public void deleteBook(Integer id) {
        bookRepository.deleteById(id);
    }
}

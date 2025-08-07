package com.example.Library.service;

import com.example.Library.entity.Book;
import com.example.Library.repository.BookRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        Optional<Book> existingBook = bookRepository.findByAuthorAndTitle(book.getAuthor(), book.getTitle());
        if (existingBook.isPresent()) {
            throw new IllegalArgumentException("Book with same name and author is already in database");
        }

        return bookRepository.save(book);
    }

    public Book findBookById(long id) {
        Optional<Book> existingBook = bookRepository.findById(id);
        if (!existingBook.isPresent()) {
            throw new RuntimeException("Book with id" + id + " not found.");
        }
        return existingBook.get();
    }

    public List<Book> findBooksByAuthor(String author) {
        return bookRepository.findBooksByAuthor(author);
    }
}

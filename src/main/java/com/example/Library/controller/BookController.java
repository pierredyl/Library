package com.example.Library.controller;

import com.example.Library.entity.Book;
import com.example.Library.repository.BookRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.Library.service.BookService;

import java.util.List;


@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;


    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/findBookById")
    public Book findById(@RequestParam long id) {
        return bookService.findBookById(id);
    }

    @GetMapping("/findBooksByAuthor")
    public List<Book> findBooksByAuthor(@RequestParam String author) {
        return bookService.findBooksByAuthor(author);
    }

    @PostMapping("/addBook")
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }



}

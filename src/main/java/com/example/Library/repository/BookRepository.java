package com.example.Library.repository;

import com.example.Library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findByAuthorAndTitle(String title, String author);
    Optional<Book> findById(long id);
    List<Book> findBooksByAuthor(String author);
}

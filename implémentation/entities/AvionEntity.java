package com.bee.next.librairytraining.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class BookEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column
    private String author;
    // @ManyToOne
    // @JoinColumn(name = "library_id")
    // private LibraryEntity library;
}

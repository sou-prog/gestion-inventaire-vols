package com.bee.next.librairytraining.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class LibraryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @OneToMany
    @JoinColumn(name = "library_id")
    // @OneToMany(mappedBy = "library", cascade = CascadeType.ALL)
    private List<BookEntity> books;
}

package com.bee.next.librairytraining.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class RoleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    // Constructor with parameter
    public RoleEntity(ERole name) {
        this.name = name;
    }

    public RoleEntity() {

    }
}


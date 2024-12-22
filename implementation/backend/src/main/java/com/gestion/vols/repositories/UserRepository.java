package com.gestion.vols.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gestion.vols.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username); // Trouver un utilisateur par son nom d'utilisateur
    Boolean existsByUsername(String username); // Vérifier si un utilisateur avec ce nom d'utilisateur existe
    Boolean existsByEmail(String email);
    Optional<User> findByEmail(String email); // Trouver un utilisateur par son email
}
package com.gestion.vols.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;



@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users") // Nom de la table dans la base de données
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID auto-généré
    private Long   id;

    @Column(name = "username")
    private String username;

    @Column(nullable = false, unique = true)
    private String email; // Email de l'utilisateur, unique

    @Column(nullable = false)
    private String password; // Mot de passe de l'utilisateur (crypté)
    private String role;

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}



}

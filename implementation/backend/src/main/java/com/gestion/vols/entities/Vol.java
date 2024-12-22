
package com.gestion.vols.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vols") // Nom de la table dans la base de données
public class Vol {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // ID auto-généré
	private Long id;

	// Relation avec l'utilisateur qui a réservé ou est responsable du vol
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	// Relation avec le membre du personnel qui gère le vol
	@ManyToOne
	@JoinColumn(name = "staff_id")
	private Staff staff;

	@Column(nullable = false, unique = true)
	private String numeroVol;

	@Column(nullable = false)
	private String aeroportDepart;

	@Column(nullable = false)
	private String aeroportArrivee;

	@Column(nullable = false)
	private LocalDateTime dateDepart;

	@Column(nullable = false)
	private LocalDateTime dateArrivee;

	@Column(nullable = false)
	private String statut; // Exemple : "En cours", "Terminé", etc.

	// Association avec Avion
	@ManyToOne
	@JoinColumn(name = "avion_id", nullable = false)
	private Plane plane;

	// Association avec les membres d'équipage
	@ManyToMany
	@JoinTable(name = "vol_membres_equipage", joinColumns = @JoinColumn(name = "vol_id"), inverseJoinColumns = @JoinColumn(name = "membre_equipage_id"))
	private List<MembreEquipage> membresEquipage;

	// Association avec les réservations
	@OneToMany(mappedBy = "vol", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reservation> reservations;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	public String getNumeroVol() {
		return numeroVol;
	}

	public void setNumeroVol(String numeroVol) {
		this.numeroVol = numeroVol;
	}

	public String getAeroportDepart() {
		return aeroportDepart;
	}

	public void setAeroportDepart(String aeroportDepart) {
		this.aeroportDepart = aeroportDepart;
	}

	public String getAeroportArrivee() {
		return aeroportArrivee;
	}

	public void setAeroportArrivee(String aeroportArrivee) {
		this.aeroportArrivee = aeroportArrivee;
	}

	public LocalDateTime getDateDepart() {
		return dateDepart;
	}

	public void setDateDepart(LocalDateTime dateDepart) {
		this.dateDepart = dateDepart;
	}

	public LocalDateTime getDateArrivee() {
		return dateArrivee;
	}

	public void setDateArrivee(LocalDateTime dateArrivee) {
		this.dateArrivee = dateArrivee;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public Plane getPlane() {
		return plane;
	}

	public void setPlane(Plane plane) {
		this.plane = plane;
	}

	public List<MembreEquipage> getMembresEquipage() {
		return membresEquipage;
	}

	public void setMembresEquipage(List<MembreEquipage> membresEquipage) {
		this.membresEquipage = membresEquipage;
	}

	public List<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}

}

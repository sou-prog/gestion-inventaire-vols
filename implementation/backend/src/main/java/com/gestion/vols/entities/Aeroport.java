package com.gestion.vols.entities;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "aeroports") // Nom de la table dans la base de données
public class Aeroport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID auto-généré
    private Long id;

    @Column(nullable = false, unique = true)
    private String codeIATA; // Code IATA unique pour l'aéroport (exemple : JFK, CDG)

    @Column(nullable = false)
    private String nom; // Nom de l'aéroport (exemple : Aéroport Charles de Gaulle)

    @Column(nullable = false)
    private String ville; // Ville où se trouve l'aéroport (exemple : Paris)

    @Column(nullable = false)
    private String pays; // Pays où se trouve l'aéroport (exemple : France)

    @Column(nullable = false)
    private int capacite; // Capacité maximale de l'aéroport en termes de trafic

    // Association avec les vols départs
    @OneToMany(mappedBy = "aeroportDepart", cascade = CascadeType.ALL, orphanRemoval = true)
    private java.util.List<Vol> volsDepart;

    // Association avec les vols arrivées
    @OneToMany(mappedBy = "aeroportArrivee", cascade = CascadeType.ALL, orphanRemoval = true)
    private java.util.List<Vol> volsArrivee;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodeIATA() {
		return codeIATA;
	}

	public void setCodeIATA(String codeIATA) {
		this.codeIATA = codeIATA;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public int getCapacite() {
		return capacite;
	}

	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}

	public java.util.List<Vol> getVolsDepart() {
		return volsDepart;
	}

	public void setVolsDepart(java.util.List<Vol> volsDepart) {
		this.volsDepart = volsDepart;
	}

	public java.util.List<Vol> getVolsArrivee() {
		return volsArrivee;
	}

	public void setVolsArrivee(java.util.List<Vol> volsArrivee) {
		this.volsArrivee = volsArrivee;
	}
    

}

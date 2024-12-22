package com.gestion.vols.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reservations") // Nom de la table dans la base de données
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID auto-généré
    private Long id;

    @Column(nullable = false)
    private Date dateReservation; // Date à laquelle la réservation a été effectuée

    @Column(nullable = false)
    private String status; // Statut de la réservation (ex. : Confirmée, Annulée)

    @Column(nullable = false)
    private double prixTotal; // Prix total de la réservation

    // Relation avec Passager : Une réservation est effectuée par un passager
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Clé étrangère vers la table Passager
    private User user;

    // Relation avec Vol : Une réservation est associée à un vol spécifique
    @ManyToOne
    @JoinColumn(name = "vol_id", nullable = false) // Clé étrangère vers la table Vol
    private Vol vol;
}

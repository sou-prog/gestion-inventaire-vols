
package com.gestion.vols.services;

import com.gestion.vols.entities.Aeroport;
import com.gestion.vols.repositories.AeroportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AeroportService {

    @Autowired
    private AeroportRepository aeroportRepository;

    // Récupérer tous les aéroports
    public List<Aeroport> getAllAeroports() {
        return aeroportRepository.findAll();
    }

    // Récupérer un aéroport par son ID
    public Optional<Aeroport> getAeroportById(Long id) {
        return aeroportRepository.findById(id);
    }

    // Enregistrer un nouvel aéroport
    public Aeroport saveAeroport(Aeroport aeroport) {
        return aeroportRepository.save(aeroport);
    }

    // Mettre à jour un aéroport existant
    public Aeroport updateAeroport(Long id, Aeroport aeroportDetails) {
        return aeroportRepository.findById(id)
                .map(aeroport -> {
                    aeroport.setNom(aeroportDetails.getNom());
                    aeroport.setCodeIATA(aeroportDetails.getCodeIATA());
                    aeroport.setVille(aeroportDetails.getVille());
                    aeroport.setPays(aeroportDetails.getPays());
                    aeroport.setCapacite(aeroportDetails.getCapacite());
                    return aeroportRepository.save(aeroport);
                })
                .orElseThrow(() -> new RuntimeException("Aéroport introuvable avec l'ID " + id));
    }

    // Supprimer un aéroport par son ID
    public void deleteAeroport(Long id) {
        if (!aeroportRepository.existsById(id)) {
            throw new RuntimeException("Aéroport introuvable avec l'ID " + id);
        }
        aeroportRepository.deleteById(id);
    }
}



package com.gestion.vols.repositories;

import com.gestion.vols.entities.Aeroport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AeroportRepository extends JpaRepository<Aeroport, Long> {
}

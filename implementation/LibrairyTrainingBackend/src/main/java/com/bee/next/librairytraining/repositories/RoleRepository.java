package com.bee.next.librairytraining.repositories;

import com.bee.next.librairytraining.entities.ERole;
import com.bee.next.librairytraining.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByName(ERole name);
    boolean existsByName(ERole name);
}

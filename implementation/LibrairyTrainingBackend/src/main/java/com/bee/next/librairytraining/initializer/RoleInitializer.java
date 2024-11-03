package com.bee.next.librairytraining.initializer;

import com.bee.next.librairytraining.entities.ERole;
import com.bee.next.librairytraining.entities.RoleEntity;
import com.bee.next.librairytraining.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RoleInitializer implements CommandLineRunner {

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (!roleRepository.existsByName(ERole.ROLE_USER)) {
            roleRepository.save(new RoleEntity(ERole.ROLE_USER));
        }

        if (!roleRepository.existsByName(ERole.ROLE_ADMIN)) {
            roleRepository.save(new RoleEntity(ERole.ROLE_ADMIN));
        }
    }
}


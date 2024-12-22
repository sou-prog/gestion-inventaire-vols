package com.gestion.vols.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestion.vols.entities.User;
import com.gestion.vols.repositories.UserRepository;




@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    // add a user

    public User add(User user) {
        return userRepository.save(user);
    }

    // updating a user

    public User update(User user) {
        return userRepository.save(user);
    }

    // getting a user

    public User get(Long id) {
        return userRepository.findById(id).get();
    }

    // delete a user 

    public void delete(Long id) {
        userRepository.deleteById(id);
    }   

}

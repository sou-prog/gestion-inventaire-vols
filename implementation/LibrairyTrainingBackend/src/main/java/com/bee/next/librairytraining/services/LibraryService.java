package com.bee.next.librairytraining.services;

import com.bee.next.librairytraining.entities.LibraryEntity;
import com.bee.next.librairytraining.repositories.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {

    @Autowired
    private LibraryRepository libraryRepository;

    // Fetch all libraries
    public List<LibraryEntity> getAllLibraries() {
        return libraryRepository.findAll();
    }

    // Fetch a library by ID
    public Optional<LibraryEntity> getLibraryById(Integer id) {
        return libraryRepository.findById(id);
    }

    // Save a new library
    public LibraryEntity saveLibrary(LibraryEntity library) {
        return libraryRepository.save(library);
    }

    // Update an existing library
    public LibraryEntity updateLibrary(Integer id, LibraryEntity libraryDetails) {
        return libraryRepository.findById(id)
                .map(library -> {
                    library.setName(libraryDetails.getName());
                    return libraryRepository.save(library);
                })
                .orElseThrow(() -> new RuntimeException("Library not found with id " + id));
    }

    // Delete a library by ID
    public void deleteLibrary(Integer id) {
        libraryRepository.deleteById(id);
    }
}

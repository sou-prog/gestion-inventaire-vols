package com.bee.next.librairytraining.controllers;

import com.bee.next.librairytraining.entities.LibraryEntity;
import com.bee.next.librairytraining.services.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/libraries")
public class LibraryController {

    @Autowired
    private LibraryService libraryService;

    // Get all libraries
    @GetMapping
    public List<LibraryEntity> getAllLibraries() {
        return libraryService.getAllLibraries();
    }

    // Get a specific library by ID
    @GetMapping("/{id}")
    public ResponseEntity<LibraryEntity> getLibraryById(@PathVariable Integer id) {
        Optional<LibraryEntity> library = libraryService.getLibraryById(id);
        return library.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new library
    @PostMapping
    public LibraryEntity createLibrary(@RequestBody LibraryEntity library) {
        return libraryService.saveLibrary(library);
    }

    // Update an existing library
    @PutMapping("/{id}")
    public ResponseEntity<LibraryEntity> updateLibrary(@PathVariable Integer id, @RequestBody LibraryEntity libraryDetails) {
        try {
            LibraryEntity updatedLibrary = libraryService.updateLibrary(id, libraryDetails);
            return ResponseEntity.ok(updatedLibrary);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a library
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLibrary(@PathVariable Integer id) {
        try {
            libraryService.deleteLibrary(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

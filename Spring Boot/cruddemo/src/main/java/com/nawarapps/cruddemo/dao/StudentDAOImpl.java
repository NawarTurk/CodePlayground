package com.nawarapps.cruddemo.dao;

import com.nawarapps.cruddemo.entity.Student;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository  // Support component scanning and translate JDBC exception
public class StudentDAOImpl implements StudentDAO{

    // define field fot entity manager
    private EntityManager entityManager;

    // inject entity manager using constructor injection
    @Autowired
    public StudentDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    // implement save method
    @Override
    @Transactional  // because we are performing an update on the database
    // it handles the transaction management for us
    public void save(Student theStudent) {
        entityManager.persist(theStudent);
    }
}

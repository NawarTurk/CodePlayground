package com.nawarapps.cruddemo.dao;

import com.nawarapps.cruddemo.entity.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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

    @Override
    // no need to add @Transactional because we are not updating the database
    public Student findById(int studentId) {
        return entityManager.find(Student.class, studentId);
    }

    @Override
    public List<Student> findAllStudents() {
        TypedQuery<Student> theQuery = entityManager.createQuery("FROM Student order by lastName asc", Student.class);
        return theQuery.getResultList();
    }

    @Override
    public List<Student> findByLastName(String lastName) {
        TypedQuery<Student> theQuery = entityManager.createQuery("FROM Student where lastName = :theData", Student.class);
        theQuery.setParameter("theData", lastName);
        return theQuery.getResultList();
    }

    @Override
    @Transactional
    public void update(Student student) {
        entityManager.merge(student);
    }

    @Override
    @Transactional
    public void deleteStudent(int id) {
        Student theStudent = entityManager.find(Student.class, id);
        entityManager.remove(theStudent);
    }

}

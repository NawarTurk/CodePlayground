package com.nawarapps.cruddemo.dao;

import com.nawarapps.cruddemo.entity.Student;

import java.util.List;

public interface StudentDAO {

    void save(Student theStudent);
    Student findById(int studentId);
    List<Student> findAllStudents();
}

package com.nawarapps.restcruddemo.rest;

import com.nawarapps.restcruddemo.entity.Student;
import jakarta.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentRestController {

    private List<Student> studentList;
    // To Do: Check this again
    @PostConstruct  // Called only once when a given been is constructed
    public void loadData() {
        studentList = new ArrayList<>();
        studentList.add(new Student("T", "Nawar"));
        studentList.add(new Student("C", "Dan"));
        studentList.add(new Student("D", "Khan"));
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return studentList;
    }

    @GetMapping("/student/{studentId}")
    public Student getStudent(@PathVariable int studentId) {

        if (studentId < 0 || studentId >= studentList.size()) {
            throw new StudentNotFoundException("Student Id not found - " + studentId);
        }

        return studentList.get(studentId);
    }

    @ExceptionHandler
    public ResponseEntity<StudentErrorResponse> handleException(StudentNotFoundException exc) {
        StudentErrorResponse error = new StudentErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        // To do: Check this
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<StudentErrorResponse> handleException(Exception exc) {
        StudentErrorResponse error = new StudentErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exc.getMessage());  // we could customize this error msg
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}

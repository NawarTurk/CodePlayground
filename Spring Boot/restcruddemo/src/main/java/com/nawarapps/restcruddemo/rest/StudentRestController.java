package com.nawarapps.restcruddemo.rest;

import com.nawarapps.restcruddemo.entity.Student;
import jakarta.annotation.PostConstruct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}

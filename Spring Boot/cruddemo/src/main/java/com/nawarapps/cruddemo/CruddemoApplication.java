package com.nawarapps.cruddemo;

import com.nawarapps.cruddemo.dao.StudentDAO;
import com.nawarapps.cruddemo.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CruddemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CruddemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {  // inject studentDAO
		return runner -> {
//			createStudent(studentDAO);
			readStudent(studentDAO);
		};
	}

	private void readStudent(StudentDAO studentDAO) {
		System.out.println("Creating new student object ...");
		Student tempStudent = new Student("Nawar", "T","nawar.t@gmail.com");

		System.out.println("Saving the student ...");
		studentDAO.save(tempStudent);

		int studentId = tempStudent.getId();
		System.out.println("Saved student with Id  " + studentId);

		System.out.println("Retrieving a student with Id " + studentId);
		Student temp2 = studentDAO.findById(tempStudent.getId());
		System.out.println(temp2);

	}

//	private void createStudent(StudentDAO studentDAO) {
//		System.out.println("Creating new student object ...");
//		Student tempStudent = new Student("Nawar", "T","nawar.t@gmail.com");
//
//		System.out.println("Saving the student ...");
//		studentDAO.save(tempStudent);
//
//		System.out.println("Saved student. " + tempStudent.getId());
//	}
}

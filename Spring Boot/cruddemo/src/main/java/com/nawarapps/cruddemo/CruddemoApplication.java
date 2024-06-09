package com.nawarapps.cruddemo;

import com.nawarapps.cruddemo.dao.StudentDAO;
import com.nawarapps.cruddemo.entity.Student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class CruddemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CruddemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {  // inject studentDAO
		return runner -> {
//			createStudent(studentDAO);
//			readStudent(studentDAO);
//			findAllStudents(studentDAO);
//			queryForStudentByLastName(studentDAO);
//			updateStudent(studentDAO);
			deleteStudent(studentDAO);
		};
	}

	private void deleteStudent(StudentDAO studentDAO) {
		Student tempStudent = new Student("Dan", "The Pan", "NT@mail.com");
		studentDAO.save(tempStudent);
		int studentId = studentDAO.findByLastName("The Pan").get(0).getId();
		studentDAO.deleteStudent(studentId);

	}

	private void updateStudent(StudentDAO studentDAO) {
		System.out.println("Creating a new student object ...");
		Student tempStudent = new Student("Dan", "The Pan", "NT@mail.com");
		System.out.println(tempStudent);

		System.out.println("\nSaving the student to the database ...");
		studentDAO.save(tempStudent);

		System.out.println("\nRetrieving the student ...");
		int studentId = tempStudent.getId();
		Student retrievedStudent = studentDAO.findById(studentId);

		System.out.println("\nUpdating the student last name ...");
		retrievedStudent.setLastName("Updated Last Name");
		studentDAO.update(retrievedStudent);
		System.out.println("Student with Id: " + studentId + " is saved to the database.");

		System.out.println("\nThe updated student info: ");
		System.out.println(studentDAO.findById(studentId));
	}

	private void queryForStudentByLastName(StudentDAO studentDAO) {
		System.out.println("Creating new student objects ...");
		Student tempStudent1 = new Student("Nawar", "TTT", "NT@mail.com");
		Student tempStudent2 = new Student("tahani", "TTT", "NT@mail.com");
		Student tempStudent3 = new Student("Sarah", "TTT", "NT@mail.com");

		System.out.println("Saving the students to the database ...");
		studentDAO.save(tempStudent1);
		studentDAO.save(tempStudent2);
		studentDAO.save(tempStudent3);


		System.out.println("Retrieving student with a specific last name");
		List<Student> studentList =  studentDAO.findByLastName("TTT");
		for (Student student : studentList) {
			System.out.println(student);
		}
	}

	private void findAllStudents(StudentDAO studentDAO) {
		System.out.println("Creating new student objects ...");
		Student tempStudent1 = new Student("Nawar", "A","nawar.t@gmail.com");
		Student tempStudent2 = new Student("Nawar", "Z","nawar.t@gmail.com");
		Student tempStudent3 = new Student("Nawar", "T","nawar.t@gmail.com");

		System.out.println("Saving the students to the database");
		studentDAO.save(tempStudent1);
		studentDAO.save(tempStudent2);
		studentDAO.save(tempStudent3);

		System.out.println("Retrieving all students ...");

		List<Student> studentList = studentDAO.findAllStudents();

		for (Student student : studentList) {
			System.out.println(student);
		}


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

	private void createStudent(StudentDAO studentDAO) {
		System.out.println("Creating new student object ...");
		Student tempStudent = new Student("Nawar", "T","nawar.t@gmail.com");

		System.out.println("Saving the student ...");
		studentDAO.save(tempStudent);

		System.out.println("Saved student. " + tempStudent.getId());
	}
}

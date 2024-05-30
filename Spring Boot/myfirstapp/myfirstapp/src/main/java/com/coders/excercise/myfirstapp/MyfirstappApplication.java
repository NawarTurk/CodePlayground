package com.coders.excercise.myfirstapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Explicitly listing the packages
//@SpringBootApplication(
//		scanBasePackages = {"package1", "package2"}
//)

@SpringBootApplication
public class MyfirstappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyfirstappApplication.class, args);
	}

}

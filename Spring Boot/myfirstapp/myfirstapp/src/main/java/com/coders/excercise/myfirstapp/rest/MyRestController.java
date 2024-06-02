package com.coders.excercise.myfirstapp.rest;

import com.coders.excercise.myfirstapp.common.Coach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRestController {

    // inject properties
    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;

    private Coach myCoach;  // Define a proper field for the dependency
//    private Coach anotherCoach;

    // define a constructor for dep. injection
    @Autowired  // tells Spring to inject a dependency here
    public MyRestController(
            @Qualifier("baseballCoach") Coach theCoach) {
//            @Qualifier("baseballCoach") Coach theCoach,
//            @Qualifier("baseballCoach") Coach theAnotherCoach) {
        System.out.println("In constructor: " + getClass().getSimpleName());
        this.myCoach = theCoach;
//        this.anotherCoach = theAnotherCoach;
    }

//    // Utilizing the primary annotation
//    @Autowired
//    public MyRestController(Coach theCoach) {
//        this.myCoach = theCoach;
//    }

    // define a setter for dependency injection
//    @Autowired
//    public void setCoach(Coach theCoach) {
//        myCoach = theCoach;
//    }


    // expose "/" endpoint that returns "Hello World!"
    @GetMapping("/")
    public String sayHello() {
        return "Hello World!";
    }

    // expose a new endpoint
    @GetMapping("/workout")
    public String getDailyWorkout() {
        return "Run a hard 5k!|";
    }

    @GetMapping("/fortune")
    public String getDailyfortune() {
        System.out.println("hello");
        return "today is your lucky day!";
    }

    @GetMapping("/teaminfo")
    public String getTeamInfo() {
        return "Coach: " + coachName + ", Team name: " + teamName;
    }

    @GetMapping("/coachmsg")
    public String getCoachMsg() {
        return myCoach.getCoachMsg();
    }

//    @GetMapping("/check")
//    public String check() {
//        return "Comparing beans: myCoach == anotherCoach, " + (myCoach == anotherCoach);
//    }
}

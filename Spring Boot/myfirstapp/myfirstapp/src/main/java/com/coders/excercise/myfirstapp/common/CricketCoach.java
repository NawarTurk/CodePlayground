package com.coders.excercise.myfirstapp.common;

import org.springframework.stereotype.Component;

@Component  // this marks the class as a Spring bean and make it available for dep. injection
public class CricketCoach implements Coach{
    @Override
    public String getCoachMsg() {
        return "Practice!!!";
    }
}

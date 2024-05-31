package com.coders.excercise.myfirstapp.common;

import org.springframework.stereotype.Component;

@Component
public class BaseballCoach implements Coach{

    public BaseballCoach() {
        System.out.println("In constructor: " + getClass().getSimpleName());
    }

    @Override
    public String getCoachMsg() {
        return "I am a baseball coach!";
    }
}

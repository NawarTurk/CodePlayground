package com.coders.excercise.myfirstapp.common;

import org.springframework.stereotype.Component;

@Component
//@Primary
public class TennisCoach implements Coach{

    public TennisCoach() {
        System.out.println("In constructor: " + getClass().getSimpleName());
    }

    @Override
    public String getCoachMsg() {
        return "Tennis, Tennis & Tennis!";
    }
}

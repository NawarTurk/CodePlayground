package com.coders.excercise.myfirstapp.common;

import org.springframework.stereotype.Component;

@Component
public class TennisCoach implements Coach{
    @Override
    public String getCoachMsg() {
        return "Tennis, Tennis & Tennis!";
    }
}

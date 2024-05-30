package com.coders.excercise.myfirstapp.common;

import org.springframework.stereotype.Component;

@Component
public class BaseballCoach implements Coach{
    @Override
    public String getCoachMsg() {
        return "I am a baseball coach!";
    }
}

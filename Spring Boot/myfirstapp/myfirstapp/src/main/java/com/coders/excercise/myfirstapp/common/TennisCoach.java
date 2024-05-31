package com.coders.excercise.myfirstapp.common;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class TennisCoach implements Coach{
    @Override
    public String getCoachMsg() {
        return "Tennis, Tennis & Tennis!";
    }
}

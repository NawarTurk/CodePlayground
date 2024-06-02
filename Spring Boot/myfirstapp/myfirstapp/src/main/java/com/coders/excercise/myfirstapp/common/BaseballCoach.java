package com.coders.excercise.myfirstapp.common;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class BaseballCoach implements Coach{

    public BaseballCoach() {
        System.out.println("In constructor: " + getClass().getSimpleName());
    }

    @Override
    public String getCoachMsg() {
        return "I am a baseball coach!";
    }

    // define init method
    @PostConstruct
    public void startUpTasks() {
        System.out.println("Staring up " + getClass().getSimpleName() + " @PostConstruct");
    }

    // define destroy method
    @PreDestroy
    public void preDestroyTasks() {
        System.out.println(" pre-destroy tasks" + getClass().getSimpleName() + " @PreDestroy");
    }

}

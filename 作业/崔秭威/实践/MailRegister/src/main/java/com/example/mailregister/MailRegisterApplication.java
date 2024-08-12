package com.example.mailregister;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.mailregister.dao")
public class MailRegisterApplication {

    public static void main(String[] args) {
        SpringApplication.run(MailRegisterApplication.class, args);
    }

}

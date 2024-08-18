package com.eckey.lab;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @Author: ChengLiang
 * @CreateTime: 2023-10-17  14:11
 * @Description: TODO
 * @Version: 1.0
 */
@Slf4j
@SpringBootApplication
public class XFApplication {
    public static void main(String[] args) {
//        log.info("这是新的XFApplication");
        SpringApplication.run(XFApplication.class, args);
    }
}

package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OpenidController {

    @PostMapping("/save_openid")
    public String saveOpenid(@RequestBody OpenidRequest request) {
        String openid = request.getOpenid();
        System.out.println("Received openid: " + openid);
        return "OpenID received: " + openid;
    }
}

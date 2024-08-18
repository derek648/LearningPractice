package com.eckey.lab;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // 允许所有路径
                        .allowedOrigins("https://c272cb1.r28.cpolar.top") // 允许来自这个源的请求
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许的方法
                        .allowedHeaders("*") // 允许的头信息
                        .allowCredentials(true) // 是否允许发送Cookie
                        .maxAge(3600); // 预检请求的缓存时间（秒）
            }
        };
    }
}

package com.example.mailregister.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @description: 用户
 * @author: luohanye
 * @create: 2019-04-17
 **/
@Data
public class User implements Serializable {
    private Integer id;
    private String username;
    private String password;
    private String email;
    // 激活状态 0 未激活 1 已激活
    private Integer activeStatus;
    // 激活码
    private String activeCode;
}

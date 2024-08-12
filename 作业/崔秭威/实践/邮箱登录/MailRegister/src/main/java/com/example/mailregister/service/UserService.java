package com.example.mailregister.service;


import com.example.mailregister.entity.User;

public interface UserService {
    /**
     *  用户注册
     * @param user
     */
    void add(User user);

    /**
     *  根据激活码查找用户
     * @param activeCode
     * @return
     */
    User getUserByActiveCode(String activeCode);

    /**
     * 修改
     * @param user
     */
    void modify(User user);

    /**
     * 登录
     * @param user
     * @return
     */
    User get(User user);
}

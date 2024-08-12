package com.example.mailregister.controller;


import com.example.mailregister.common.IDUtils;
import com.example.mailregister.entity.User;
import com.example.mailregister.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    /**
     *  注册
     * @param user
     * @return
     */
    @RequestMapping(value = "/register")
    public String register(User user){
        user.setActiveStatus(0);
        String activeCode = IDUtils.getUUID();
        user.setActiveCode(activeCode);
        userService.add(user);

        return "success";
    }

    /**
     *  校验激活码
     * @param code
     * @return
     */
    @RequestMapping(value = "/checkCode")
    public String checkCode(String code){
        User user = userService.getUserByActiveCode(code);
        //如果用户不等于null，把用户状态修改status=1
        if (user !=null){
            user.setActiveStatus(1);
            //把code验证码清空，已经不需要了
            user.setActiveCode("");
            userService.modify(user);

            return "activeSuccess";
        }

        return "login";
    }

    /**
     * 登录
     * @return login
     */
    @RequestMapping(value = "/loginPage")
    public String login(){
        return "login";
    }

    /**
     * 登录
     */
    @RequestMapping(value = "/login")
    public String login(User user, Model model){
        User u = userService.get(user);
        if (u !=null){
            return "welcome";
        }
        return "error";
    }
}

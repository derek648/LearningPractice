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
    /*
    改为用户输入验证码登录，而非点击链接
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

     */

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
    /**
     * 重定向到会话主页
     * */
    @RequestMapping(value = "/conversation")
    public String conversation() {
        return "redirect:https://5f51573b.r29.cpolar.top/LearningPractice/wenxin/target/wenxin/Homepage.html";
        //return "conversation";
    }
    /**
     * 重定向到支付宝付款界面
     * */
    @RequestMapping(value = "/alipay")
    public String alipay(){
        return "redirect:http://5696670c.r23.cpolar.top";
        //return "alipay";
    }
    /**
     * 返回激活页面
     * */
    @RequestMapping(value = "/activePage")
    public String activePage() {
        return "activePage";
    }
    /**
     * 校验激活码，成功返回激活成功页面
     * */
    @RequestMapping(value = "active")
    public String active(String code) {
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
}

package com.example.mailregister.service;


import com.example.mailregister.dao.UserDao;
import com.example.mailregister.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private MailService mailService;

    @Override
    public void add(User user) {
        userDao.insert(user);
        //获取激活码
        String code = user.getActiveCode();
        System.out.println("激活码:"+code);
        //主题
        String subject = "来自华夏神帝的激活邮件";
        //上面的激活码发送到用户注册邮箱
        String context = "<a href=\"https://38b3195e.r1.cpolar.top/user/checkCode?code="+code+"\">激活请点击:"+code+"</a>";
        //发送激活邮件
        mailService.sendMimeMail (user.getEmail(),subject,context);
    }

    @Override
    public User getUserByActiveCode(String activeCode) {
        return userDao.selectUserByActiveCode(activeCode);
    }

    @Override
    public void modify(User user) {
        userDao.update(user);
    }

    @Override
    public User get(User user) {
        return userDao.select(user);
    }
}

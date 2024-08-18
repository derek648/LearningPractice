package com.eckey.lab.controller;

import com.eckey.lab.bean.ResultBean;
import com.eckey.lab.service.PushService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: ChengLiang
 * @CreateTime: 2023-10-18  15:15
 * @Description: TODO
 * @Version: 1.0
 */
@Slf4j
@RestController
@RequestMapping("/xfModel")
public class XFMessageController {

    @Autowired
    private PushService pushService;

    @GetMapping("/test")
    public ResultBean test(String uid, String text) {
        System.out.println(uid+text);
        if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(text)) {
            log.error("uid或text不能为空");
            return ResultBean.fail("uid或text不能为空");
        }
        return pushService.pushMessageToXFServer(uid, text);
    }

    @GetMapping("/")
    public String test2() {
        return "Homepage";
    }

}

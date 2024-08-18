package com.eckey.lab.service;

import com.eckey.lab.bean.ResultBean;

public interface PushService {

    void pushToOne(String uid, String text);

    void pushToAll(String text);

    ResultBean pushMessageToXFServer(String uid, String text);
}

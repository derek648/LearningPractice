package com.example.mailregister.service;

public interface MailService {
    /**
     *  发送多媒体类型邮件
     * @param to
     * @param subject
     * @param content
     */
    void sendMimeMail(String to, String subject, String content);

    void sendInlineResourceMail(String to, String subject, String content, String rscPath, String rscId);
}

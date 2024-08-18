package com.eckey.lab.bean;

import ch.qos.logback.core.rolling.RollingFileAppender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author: ChengLiang
 * @CreateTime: 2023-10-17  13:33
 * @Description: TODO
 * @Version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleContent {

    public static final String ROLE_USER = "user";

    public static final String ROLE_ASSISTANT = "assistant";

    private String role;

    private String content;

    public static RoleContent createUserRoleContent(String content) {
        return new RoleContent(ROLE_USER, content);
    }

    public static RoleContent createAssistantRoleContent(String content) {
        return new RoleContent(ROLE_ASSISTANT, content);
    }
}

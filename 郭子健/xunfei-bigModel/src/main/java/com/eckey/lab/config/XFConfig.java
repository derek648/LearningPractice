package com.eckey.lab.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @Author: ChengLiang
 * @CreateTime: 2023-10-17  13:58
 * @Description: TODO
 * @Version: 1.0
 */
@Data
@Component
@ConfigurationProperties("xf.config")
public class XFConfig {

    private String appId;

    private String apiSecret;

    private String apiKey;

    private String hostUrl;

    private Integer maxResponseTime;

}

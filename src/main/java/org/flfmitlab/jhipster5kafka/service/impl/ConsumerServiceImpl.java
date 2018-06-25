package org.flfmitlab.jhipster5kafka.service.impl;

import org.flfmitlab.jhipster5kafka.messaging.ConsumerChannel;
import org.flfmitlab.jhipster5kafka.messaging.Greeting;
import org.flfmitlab.jhipster5kafka.service.ConsumerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerServiceImpl implements ConsumerService {
	
	private final Logger log = LoggerFactory.getLogger(ConsumerServiceImpl.class);


    @StreamListener(ConsumerChannel.CHANNEL)
    public void consume(Greeting greeting) {
        log.info("Received message: {}.", greeting.getMessage());
    }
}

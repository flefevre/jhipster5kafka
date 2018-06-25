package org.flfmitlab.jhipster5kafka.messaging;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface ProducerChannel {

	String CHANNEL = "messageChannel";

	@Output
	MessageChannel messageChannel();
}

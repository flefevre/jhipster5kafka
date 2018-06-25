package org.flfmitlab.jhipster5kafka.service;

import org.flfmitlab.jhipster5kafka.messaging.Greeting;

public interface ConsumerService {
	
	public void consume(Greeting greeting);

}

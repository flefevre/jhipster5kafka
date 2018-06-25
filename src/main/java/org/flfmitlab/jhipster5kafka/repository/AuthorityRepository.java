package org.flfmitlab.jhipster5kafka.repository;

import org.flfmitlab.jhipster5kafka.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}

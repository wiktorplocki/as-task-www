import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Loading = () => (
  <div className="Loading">
    <div className="d-flex text-center masthead">
      <Container className="my-auto flex-center">
        <Row>
          <Col>
            <span>
              <h1>
                <FontAwesomeIcon icon={faCircleNotch} spin />
                <strong> Loading...</strong>
              </h1>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Loading;

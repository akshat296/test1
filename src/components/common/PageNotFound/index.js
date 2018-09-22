import React from 'react';
import loader from '../../../assets/img/loader.gif';
import { Col, Image } from 'react-bootstrap';
import MainLayout from '../Layout/Main';

export default () => (
  <MainLayout title=" ">
    <Col sm={12} className="text-center">
      <h1>Page Not Found</h1>
      <p>Request Page is not found</p>
    </Col>
  </MainLayout>
);

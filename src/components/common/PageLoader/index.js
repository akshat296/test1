import React from 'react';
import loader from '../../../assets/img/loader.gif';
import { Col, Image } from 'react-bootstrap';
import MainLayout from '../Layout/Main';

export default () => (
  <MainLayout title=" ">
    <Col sm={12}>
      <Image src={loader} style={{ position: 'absolute', top: '35%', left: '45%' }} />
    </Col>
  </MainLayout>
);

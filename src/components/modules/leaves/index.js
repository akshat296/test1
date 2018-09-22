import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import MainLayout from '../../common/Layout/Main';

import Routes from './Routes';
import Default50x50 from '../../../assets/img/default-50x50.gif';

class LeavesModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingHolidays: [
        {
          id: 1,
          name: 'Diwali',
          date: '01/01/2001',
          image: Default50x50
        },
        {
          id: 2,
          name: 'Diwali',
          date: '01/01/2001',
          image: Default50x50
        },
        {
          id: 3,
          name: 'Diwali',
          date: '01/01/2001',
          image: Default50x50
        },
        {
          id: 4,
          name: 'Diwali',
          date: '01/01/2001',
          image: Default50x50
        }
      ],
      recentLeaves: {
        data: [
          {
            id: 1,
            from: '01/01/2011',
            days: 3,
            status: 0
          },
          {
            id: 1,
            from: '01/01/2011',
            days: 3,
            status: 1
          },
          {
            id: 1,
            from: '01/01/2011',
            days: 3,
            status: 2
          },
          {
            id: 1,
            from: '01/01/2011',
            days: 3,
            status: 3
          }
        ],
        columns: [
          {
            label: 'From',
            dataField: 'from'
          },
          {
            label: 'Days',
            dataField: 'days'
          },
          {
            label: 'Status',
            dataField: 'status'
          }
        ]
      }
    };
  }
  render() {
    return (
      <MainLayout title="Module + Object">
        <Row>
          <Col md={12}>{this.props.children}</Col>
        </Row>
      </MainLayout>
    );
  }
}

export default LeavesModule;

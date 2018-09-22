import React, { Component } from 'react';
import MainLayout from '../../common/Layout/Main';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <MainLayout title="Dashboard" subTitle="Preview" />;
  }
}

export default Dashboard;

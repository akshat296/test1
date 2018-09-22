import React from 'react';
import { connect } from 'react-redux';
import MainLayout from '../../common/Layout/Main';
import Box from '../../common/Widgets/Box';
import Timeline from '../../common/Timeline';

class PayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00023',
          month: 'April',
          year: '2018-2019',
          duration: '20 days ago'
        },
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00022',
          month: 'March',
          year: '2018-2019',
          duration: '1 month ago'
        },
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00021',
          month: 'February',
          year: '2018-2019',
          duration: '2 months ago'
        },
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00020',
          month: 'January',
          year: '2018-2019',
          duration: '3 months ago'
        },
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00019',
          month: 'December',
          year: '2017-2018',
          duration: '4 months ago'
        },
        {
          name: 'Ashna Gandhi',
          description: '#Sal Slip/EMP/10286/00018',
          month: 'Novemeber',
          year: '2017-2018',
          duration: '5 months ago'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const selectedMonth = e.target.id;
    this.props.history.push({
      pathname: '/slip/' + selectedMonth,
      state: {
        id: 'SAL01010',
        month: selectedMonth
      }
    });
  }
  render() {
    return (
      <MainLayout title="Salary Slips">
        <Box className="box-info">
          <Box.Body>
            <Timeline key={this.state.data.year} data={this.state.data} controlFunc={this.handleClick} />
          </Box.Body>
        </Box>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.app.userData,
    fiscalYear: state.app.fiscalYear
  };
};

export default connect(mapStateToProps)(PayList);

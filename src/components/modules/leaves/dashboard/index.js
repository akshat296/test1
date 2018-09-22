// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import UpcomingHolidays from './UpcomingHolidays';
// import LeavesSummary from './LeavesSummary';
// import ActivityLog from './ActivityLog';
// import HolidayListActions from '../../../../redux/holidays';
// import EmpLeavesActions from '../../../../redux/empLeaves';
// import LeavesApplied from './LeavesApplied';

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recentLeaves: {
//         columns: [
//           {
//             label: 'From',
//             dataField: 'startDate'
//           },
//           {
//             label: 'Leave Type',
//             dataField: 'alhActivitySubTypeCode'
//           },
//           {
//             label: 'Status',
//             dataField: 'approvalStatus'
//           },
//           {
//             label: 'Reason',
//             dataField: 'reason'
//           }
//         ]
//       }
//     };
//   }

//   componentWillMount() {
//     this.props.empLeaves(5, 0, { startDate: 'DESC' }, '', '', '');
//     this.props.holidays(this.props.fiscalYear, this.props.workplaceId);
//   }

//   render() {
//     return (
//       <Row>
//         <Col md={7}>
//           <ActivityLog />
//           <LeavesApplied
//             data={this.props.appliedleaves ? this.props.appliedleaves : []}
//             columns={this.state.recentLeaves.columns}
//           />
//         </Col>
//         <Col md={5}>
//           <LeavesSummary />
//           <UpcomingHolidays data={this.props.holidayList ? this.props.holidayList : []} />
//         </Col>
//       </Row>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     holidayList: state.holidays.holidayList,
//     fiscalYear: state.app.fiscalYear,
//     workplaceId: state.app.workplaceId,
//     appliedleaves: state.empLeaves.leavesDetails.leavesData,
//     userData: state.app.userData
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     holidays: (fiscalYear, workplaceId) => {
//       dispatch(HolidayListActions.fetchHolidayList(fiscalYear, workplaceId));
//     },
//     empLeaves: (limit, offset, sortBy, status, alhActivitySubTypeCode, leaveID) => {
//       dispatch(EmpLeavesActions.empLeavesRequest(limit, offset, sortBy, status, alhActivitySubTypeCode, leaveID));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

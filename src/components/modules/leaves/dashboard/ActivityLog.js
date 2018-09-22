// import React, { Component } from 'react';
// import Box from '../../../common/Widgets/Box';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import { Modal, Button } from 'react-bootstrap';

// export default class ActivityLog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   // customOnClick(value) {
//   //   if (value) {
//   //     alert(`Clicked on ${value.date} with type ${value.type}`);
//   //   }
//   // }

//   getLog() {}

//   render() {
//     return (
//       <React.Fragment>
//         <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h4>Text in a modal</h4>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               bsClass="btn btn-default pull-left"
//               onClick={this.handleClose.bind(this)}
//             >
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Box className="box-info">
//           <Box.Header iconClass="fa fa-comments" title="Activity Map" />
//           <Box.Body>
//             <CalendarHeatmap
//               startDate={new Date('2018-03-30')}
//               endDate={new Date('2019-03-31')}
//               onClick={this.handleShow.bind(this)}
//               values={[
//                 { date: '2018-04-01', type: 1 },
//                 { date: '2018-04-02', type: 1 },
//                 { date: '2018-04-03', type: 1 },
//                 { date: '2018-04-04', type: 1 },
//                 { date: '2018-04-05', type: 2 },
//                 { date: '2018-04-06', type: 1 },
//                 { date: '2018-04-07', type: 1 },
//                 { date: '2018-04-08', type: 1 },
//                 { date: '2018-04-09', type: 1 },
//                 { date: '2018-04-10', type: 2 },
//                 { date: '2018-04-11', type: 1 },
//                 { date: '2018-04-12', type: 1 },
//                 { date: '2018-04-13', type: 1 },
//                 { date: '2018-04-14', type: 1 },
//                 { date: '2018-04-15', type: 3 },
//                 { date: '2018-04-16', type: 1 },
//                 { date: '2018-04-17', type: 1 },
//                 { date: '2018-04-18', type: 1 },
//                 { date: '2018-04-19', type: 1 },
//                 { date: '2018-04-20', type: 3 },
//                 { date: '2018-04-21', type: 1 },
//                 { date: '2018-04-22', type: 1 },
//                 { date: '2018-04-23', type: 1 },
//                 { date: '2018-04-24', type: 1 },
//                 { date: '2018-04-25', type: 4 },
//                 { date: '2018-04-26', type: 1 },
//                 { date: '2018-04-27', type: 1 },
//                 { date: '2018-04-28', type: 1 },
//                 { date: '2018-04-29', type: 1 },
//                 { date: '2018-04-30', type: 1 },

//                 { date: '2018-05-01', type: 1 },
//                 { date: '2018-05-02', type: 1 },
//                 { date: '2018-05-03', type: 1 },
//                 { date: '2018-05-04', type: 1 },
//                 { date: '2018-05-05', type: 2 },
//                 { date: '2018-05-06', type: 1 },
//                 { date: '2018-05-07', type: 1 },
//                 { date: '2018-05-08', type: 1 },
//                 { date: '2018-05-09', type: 1 },
//                 { date: '2018-05-10', type: 1 },
//                 { date: '2018-05-11', type: 1 },
//                 { date: '2018-05-12', type: 2 },
//                 { date: '2018-05-13', type: 2 },
//                 { date: '2018-05-14', type: 1 },
//                 { date: '2018-05-15', type: 1 },
//                 { date: '2018-05-16', type: 1 },
//                 { date: '2018-05-17', type: 1 },
//                 { date: '2018-05-18', type: 3 },
//                 { date: '2018-05-19', type: 1 },
//                 { date: '2018-05-20', type: 1 },
//                 { date: '2018-05-21', type: 1 },
//                 { date: '2018-05-22', type: 1 },
//                 { date: '2018-05-23', type: 1 },
//                 { date: '2018-05-24', type: 3 },
//                 { date: '2018-05-25', type: 1 },
//                 { date: '2018-05-26', type: 1 },
//                 { date: '2018-05-27', type: 1 },
//                 { date: '2018-05-28', type: 1 },
//                 { date: '2018-05-29', type: 1 },
//                 { date: '2018-05-30', type: 1 },
//                 { date: '2018-05-31', type: 1 },

//                 { date: '2018-06-01', type: 1 },
//                 { date: '2018-06-02', type: 1 },
//                 { date: '2018-06-03', type: 1 },
//                 { date: '2018-06-04', type: 1 },
//                 { date: '2018-06-05', type: 1 },
//                 { date: '2018-06-06', type: 1 },
//                 { date: '2018-06-07', type: 1 },
//                 { date: '2018-06-08', type: 1 },
//                 { date: '2018-06-09', type: 4 },
//                 { date: '2018-06-10', type: 4 },
//                 { date: '2018-06-11', type: 1 },
//                 { date: '2018-06-12', type: 1 },
//                 { date: '2018-06-13', type: 1 },
//                 { date: '2018-06-14', type: 2 },
//                 { date: '2018-06-15', type: 2 },
//                 { date: '2018-06-16', type: 2 },
//                 { date: '2018-06-17', type: 1 },
//                 { date: '2018-06-18', type: 1 },
//                 { date: '2018-06-19', type: 1 },
//                 { date: '2018-06-20', type: 1 },
//                 { date: '2018-06-21', type: 1 },
//                 { date: '2018-06-22', type: 1 },
//                 { date: '2018-06-23', type: 1 },
//                 { date: '2018-06-24', type: 1 },
//                 { date: '2018-06-25', type: 1 },
//                 { date: '2018-06-26', type: 1 },
//                 { date: '2018-06-27', type: 1 },
//                 { date: '2018-06-28', type: 1 },
//                 { date: '2018-06-29', type: 1 },
//                 { date: '2018-06-30', type: 1 },

//                 { date: '2018-07-01', type: 1 },
//                 { date: '2018-07-02', type: 1 },
//                 { date: '2018-07-03', type: 1 },
//                 { date: '2018-07-04', type: 3 },
//                 { date: '2018-07-05', type: 3 },
//                 { date: '2018-07-06', type: 1 },
//                 { date: '2018-07-07', type: 1 },
//                 { date: '2018-07-08', type: 1 },
//                 { date: '2018-07-09', type: 1 },
//                 { date: '2018-07-10', type: 1 },
//                 { date: '2018-07-11', type: 1 }
//               ]}
//               classForValue={value => {
//                 if (!value) {
//                   return 'color-empty';
//                 }
//                 return `color-${value.type}`;
//               }}
//             />
//           </Box.Body>
//         </Box>
//       </React.Fragment>
//     );
//   }
// }

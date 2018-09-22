// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import MainLayout from '../../common/Layout/Main';
// import Box from '../../common/Widgets/Box';
// import Filter from '../../common/Filter';
// import { Table } from '../../common/Table';
// import TabView from '../../common/Tab';
// import TabInfo from '../employees/empProfile/tabInfo';

// import ListActions from '../../../redux/emplist';
// import EmpProfileActions from '../../../redux/empProfile';

// class ReporteesModule extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       schema: [],
//       data: [],
//       BasicInfoSchema: [
//         {
//           key: 'status',
//           type: 'text',
//           label: 'Status'
//         },
//         {
//           key: 'title',
//           type: 'text',
//           label: 'Title'
//         },
//         {
//           key: 'firstName',
//           type: 'text',
//           label: 'First Name'
//         },
//         {
//           key: 'middleName',
//           type: 'text',
//           label: 'Middle Name'
//         },
//         {
//           key: 'lastName',
//           type: 'text',
//           label: 'Last Name'
//         },
//         {
//           key: 'email',
//           type: 'email',
//           label: 'Company Email'
//         },
//         {
//           key: 'mothersName',
//           type: 'text',
//           label: 'Mother Name'
//         },
//         {
//           key: 'fathersName',
//           type: 'text',
//           label: 'Father Name'
//         },
//         {
//           key: 'dateOfBirth',
//           type: 'date',
//           label: 'Date of Birth'
//         },
//         {
//           key: 'bloodGroup',
//           type: 'text',
//           label: 'Blood Group'
//         },
//         {
//           key: 'gender',
//           type: 'text',
//           label: 'Gender'
//         },
//         {
//           key: 'maritalStatus',
//           type: 'text',
//           label: 'Marital status'
//         }
//       ],
//       IDSchema: [
//         {
//           key: 'dp',
//           type: 'src',
//           label: 'Display Picture'
//         },
//         {
//           key: 'empId',
//           type: 'text',
//           label: 'Employee ID'
//         },
//         {
//           key: 'accessCardNumber',
//           type: 'text',
//           label: 'Access Card Number'
//         },
//         {
//           key: 'aadharCardNumber',
//           type: 'number',
//           label: 'Aadhar Card Number'
//         },
//         {
//           key: 'passportNumber',
//           type: 'text',
//           label: 'Passport Number'
//         },

//         {
//           key: 'panNumber',
//           type: 'text',
//           label: 'PAN Number'
//         }
//       ],
//       ContactInfoSchema: [
//         {
//           key: 'mobileNumber',
//           type: 'number',
//           label: 'Mobile Number'
//         },
//         {
//           key: 'personalEmail',
//           type: 'email',
//           label: 'Email'
//         },
//         {
//           key: 'currentAddress',
//           type: 'textarea',
//           label: 'Current Address'
//         },
//         {
//           key: 'permanentAddress',
//           type: 'textarea',
//           label: 'Permanent Address'
//         }
//       ],
//       columns: [
//         {
//           label: '#',
//           dataField: '#'
//         },
//         {
//           label: 'Name',
//           dataField: 'name'
//         },
//         {
//           label: 'Mobile Number',
//           dataField: 'mobileNumber'
//         },
//         {
//           label: 'Person Type',
//           dataField: 'personType'
//         }
//       ]
//     };
//   }
//   componentWillMount() {
//     this.props.fetchEmployeesList();
//   }

//   handleClick(rowData) {
//     const data = rowData.sections;
//     var selectedReportee = data.PERSON_BASIC_INFO['firstName'] + ' ' + data.PERSON_BASIC_INFO['lastName'];
//     this.props.fetchEmpProfile(rowData.id);
//     this.setState(prevState => {
//       return {
//         prevState,
//         clickedRow: true,
//         selectedReportee: selectedReportee,
//         showOnlyIcon: true,
//         data: data,
//         schema: rowData.schema
//       };
//     });
//   }

//   renderCompleteHeaderCell(column, index, length) {
//     return <th key={index}>{column.label}</th>;
//   }

//   renderCompleteRowData(rowData, columns, index) {
//     const data = rowData.sections;
//     return (
//       <tr key={index} onClick={this.handleClick.bind(this, rowData)}>
//         {columns.map((c, i) => {
//           switch (c.dataField) {
//             case 'mobileNumber':
//               return <td key={i}>{data.PERSON_CONTACT_INFO['mobileNumber']}</td>;
//             case 'personType':
//               return <td key={i}>{rowData[c.dataField]}</td>;
//             case '#':
//               return <td key={i}>{index + 1}</td>;
//             case 'name':
//               return (
//                 <td key={i}>
//                   {data.PERSON_BASIC_INFO['firstName']}{' '}
//                   {data.PERSON_BASIC_INFO['middleName']
//                     ? data.PERSON_BASIC_INFO['middleName']
//                     : data.PERSON_BASIC_INFO['lastName']}
//                 </td>
//               );
//             default:
//               return null;
//           }
//         })}
//       </tr>
//     );
//   }

//   renderHeaderCell(column, index, length) {
//     return (column.label === 'Name' || column.label === '#') && <th key={index}>{column.label}</th>;
//   }

//   renderRow(rowData, columns, index) {
//     const data = rowData.sections;
//     return (
//       <tr key={index} onClick={this.handleClick.bind(this, rowData)}>
//         {columns.map((c, i) => {
//           switch (c.dataField) {
//             case '#':
//               return <td key={i}>{index + 1}</td>;
//             case 'name':
//               return (
//                 <td key={i}>
//                   {data.PERSON_BASIC_INFO['firstName']}{' '}
//                   {data.PERSON_BASIC_INFO['middleName']
//                     ? data.PERSON_BASIC_INFO['middleName']
//                     : data.PERSON_BASIC_INFO['lastName']}
//                 </td>
//               );
//             default:
//               return null;
//           }
//         })}
//       </tr>
//     );
//   }
//   createTabs = (schema_conditions, data) => {
//     const tabList = [];
//     const tabPanel = [
//       <TabInfo
//         key="Tab1"
//         empId={this.state.id}
//         conditions={schema_conditions.PERSON_BASIC_INFO ? schema_conditions.PERSON_BASIC_INFO.properties : []}
//         modify={schema_conditions.PERSON_BASIC_INFO ? schema_conditions.PERSON_BASIC_INFO.modify : []}
//         basic={data.PERSON_BASIC_INFO}
//         infoSchema={this.state.BasicInfoSchema}
//       />
//     ];
//     Object.keys(schema_conditions).forEach(e => {
//       if (!schema_conditions[e].hidden) {
//         let el = e.replace('PERSON', '');
//         let final = el.split('_').join(' ');
//         tabList.push(final);
//         switch (e) {
//           case 'PERSON_CONTACT_INFO':
//             tabPanel.push(
//               <TabInfo
//                 key="Tab2"
//                 empId={this.state.id}
//                 conditions={
//                   schema_conditions.PERSON_CONTACT_INFO ? schema_conditions.PERSON_CONTACT_INFO.properties : []
//                 }
//                 contact={data.PERSON_CONTACT_INFO}
//                 modify={schema_conditions.PERSON_CONTACT_INFO ? schema_conditions.PERSON_CONTACT_INFO.modify : []}
//                 infoSchema={this.state.ContactInfoSchema}
//               />
//             );
//             break;
//           case 'PERSON_ID_INFO':
//             tabPanel.push(
//               <TabInfo
//                 key="Tab2"
//                 empId={this.state.id}
//                 conditions={schema_conditions.PERSON_ID_INFO ? schema_conditions.PERSON_ID_INFO.properties : []}
//                 idInfo={data.PERSON_ID_INFO}
//                 modify={schema_conditions.PERSON_ID_INFO ? schema_conditions.PERSON_ID_INFO.modify : []}
//                 infoSchema={this.state.IDSchema}
//               />
//             );
//             break;
//           default:
//             return null;
//         }
//       }
//     });
//     let result = [];
//     result.push(tabList);
//     result.push(tabPanel);
//     return result;
//   };

//   handleFilterCollapse = e => {
//     e.target.id
//       ? this.setState(prevState => {
//           return { prevState, showOnlyIcon: false };
//         })
//       : this.setState(prevState => {
//           return { prevState, showOnlyIcon: true };
//         });
//   };

//   render() {
//     const columns = [
//       {
//         label: '#',
//         dataField: '#'
//       },
//       {
//         label: 'Name',
//         dataField: 'name'
//       },
//       {
//         label: 'Person Type',
//         dataField: 'personType'
//       }
//     ];
//     this.props.emplist &&
//       this.props.emplist['0'] &&
//       Object.keys(this.props.emplist['0'].schema).map(schemaObj => {
//         if (schemaObj === 'PERSON_CONTACT_INFO') {
//           columns.push({ label: 'Mobile Number', dataField: 'mobileNumber' });
//         }
//         return null;
//       });
//     var tabData = this.createTabs(this.state.schema, this.state.data);
//     return (
//       <MainLayout title="Employees">
//         {this.state.showOnlyIcon &&
//           this.state.clickedRow && (
//             <Filter
//               options={[{ name: 'filter1', type: [] }, { name: 'filter2', type: [] }]}
//               minimizeButton={true}
//               showOnlyIcon={this.state.showOnlyIcon}
//               collapseController={this.handleFilterCollapse}
//             />
//           )}
//         {!this.state.showOnlyIcon && this.state.clickedRow ? (
//           <div className="row">
//             <div className="col-xs-2">
//               <Filter
//                 options={[{ name: 'filter1', type: [] }, { name: 'filter2', type: [] }]}
//                 minimizeButton={true}
//                 showOnlyIcon={this.state.showOnlyIcon}
//                 collapseController={this.handleFilterCollapse}
//               />
//             </div>
//             <div className="col-xs-4">
//               <Box className="box-info">
//                 <Box.Header title={'Reportees'} />
//                 <Table
//                   columns={columns}
//                   data={this.props.emplist ? this.props.emplist : []}
//                   renderHeaderCell={this.renderCompleteHeaderCell.bind(this)}
//                   renderRow={this.renderCompleteRowData.bind(this)}
//                 />
//               </Box>
//             </div>
//             <div className="col-xs-6">
//               <Box className="box-info">
//                 <Box.Header
//                   title={`${this.state.selectedReportee}`}
//                   cancelButton={true}
//                   cancelControl={e => {
//                     this.setState(prevState => {
//                       return { prevState, clickedRow: false };
//                     });
//                   }}
//                 />
//                 <Box.Body>
//                   <TabView tabList={tabData[0]} panel={tabData[1]} />
//                 </Box.Body>
//               </Box>
//             </div>
//           </div>
//         ) : this.state.showOnlyIcon && this.state.clickedRow ? (
//           <div className="row">
//             <div className="col-xs-4">
//               <Box className="box-info">
//                 <Box.Header title={'Reportees'} />
//                 <Table
//                   columns={columns}
//                   data={this.props.emplist ? this.props.emplist : []}
//                   renderHeaderCell={this.renderHeaderCell.bind(this)}
//                   renderRow={this.renderRow.bind(this)}
//                 />
//               </Box>
//             </div>
//             <div className="col-xs-8">
//               <Box className="box-info">
//                 <Box.Header
//                   title={`${this.state.selectedReportee}`}
//                   cancelButton={true}
//                   cancelControl={e => {
//                     this.setState(prevState => {
//                       return { prevState, clickedRow: false, showOnlyIcon: false };
//                     });
//                   }}
//                 />
//                 <Box.Body>
//                   <TabView tabList={tabData[0]} panel={tabData[1]} />
//                 </Box.Body>
//               </Box>
//             </div>
//           </div>
//         ) : (
//           <div className="row">
//             <div className="col-xs-2">
//               <Filter
//                 options={[{ name: 'filter1', type: [] }, { name: 'filter2', type: [] }]}
//                 minimizeButton={true}
//                 showOnlyIcon={this.state.showOnlyIcon}
//                 collapseController={this.handleFilterCollapse}
//               />
//             </div>
//             <div className="col-xs-10">
//               <Box className="box-info">
//                 <Box.Header title={'Reportees'} />
//                 <Table
//                   columns={columns}
//                   data={this.props.emplist ? this.props.emplist : []}
//                   renderHeaderCell={this.renderCompleteHeaderCell.bind(this)}
//                   renderRow={this.renderCompleteRowData.bind(this)}
//                 />
//               </Box>
//             </div>
//           </div>
//         )}
//       </MainLayout>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     emplist: state.emplist.emplist ? state.emplist.emplist.data : [],
//     employeeId: state.app.userData.id,
//     profileType: state.app.userData.type,
//     empDetails: state.empProfile.empDetails
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchEmpProfile: (id, self) => {
//       dispatch(EmpProfileActions.empProfileRequest(id, self));
//     },
//     fetchEmployeesList: () => {
//       dispatch(ListActions.listRequest());
//     }
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ReporteesModule);

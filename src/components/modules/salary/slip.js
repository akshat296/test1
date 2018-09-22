import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '../../common/Widgets/Box';
import FullListView from '../../common/List/FullListView';
import DateFormatting from '../../common/DateFormatting';
import MainLayout from '../../common/Layout/Main';

class SalarySlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salarySlip: {
        BasicInfo: {
          data: [
            {
              field: 'Working Days',
              value: '30'
            },
            {
              field: 'Payment Days',
              value: '25'
            },
            {
              field: 'Leave Without Pay',
              value: '0'
            },
            {
              field: 'Bank Name',
              value: 'Kotak Mahindra Bank'
            }
          ],
          cols: [
            {
              label: '',
              dataField: 'field'
            },
            {
              label: '',
              dataField: 'value'
            }
          ]
        },
        Total: {
          data: [
            {
              field: 'Gross Pay',
              value: '46000'
            },
            {
              field: 'Total Deduction',
              value: '2200'
            },
            {
              field: 'Net Pay',
              value: '43800'
            },
            {
              field: 'Rounded Total',
              value: '43800'
            },
            {
              field: 'Total in words',
              value: 'INR Forty Three Thousand,Eight Hundred Only'
            }
          ],
          cols: [
            {
              label: '',
              dataField: 'field'
            },
            {
              label: '',
              dataField: 'value'
            }
          ]
        },
        Earnings: {
          data: [
            {
              key: '1',
              type: 'Basic',
              default: '8000',
              amount: '8000'
            },
            {
              key: '2',
              type: 'House Rent Allowance',
              default: '4000',
              amount: '4000'
            },
            {
              key: '3',
              type: 'Transport Allowance',
              default: '4000',
              amount: '4000'
            },
            {
              key: '4',
              type: 'Special Allowance',
              default: '28000',
              amount: '28000'
            },
            {
              key: '5',
              type: 'Medical Reimbursement',
              default: '1000',
              amount: '1000'
            },
            {
              key: '6',
              type: 'Parking Reimbursement',
              default: '1000',
              amount: '1000'
            }
          ]
        },
        Deductions: {
          data: [
            {
              key: '1',
              type: 'Employee PF',
              default: '2000',
              amount: '2000'
            },
            {
              key: '2',
              type: 'Meal Charges',
              default: '200',
              amount: '200'
            }
          ]
        },
        columns: [
          {
            label: '#',
            dataField: 'key'
          },
          {
            label: 'Type',
            dataField: 'type'
          },
          {
            label: 'Default',
            dataField: 'default'
          },
          {
            label: 'Amount',
            dataField: 'amount'
          }
        ]
      }
    };
    this.renderListHeaderCell = this.renderListHeaderCell.bind(this);
    this.renderListRow = this.renderListRow.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      month: this.props.location.state.month
    }));
  }

  renderBasicInfo(rowData, columns, index) {
    return (
      <tr key={index}>
        {columns.map((c, i) => {
          switch (c.dataField) {
            case 'field':
              return <th key={i}>{rowData[c.dataField]}</th>;
            case 'value':
              return <td key={i}>{rowData[c.dataField]}</td>;
            default:
              return null;
          }
        })}
      </tr>
    );
  }

  renderListHeaderCell(column, index) {
    return (
      <th key={index} style={{ width: '50px' }}>
        {column.label}{' '}
      </th>
    );
  }
  renderListRow(rowData, columns, index) {
    return (
      <tr key={index}>
        {columns.map((c, i) => {
          switch (c.dataField) {
            case 'holidayOn':
              return (
                <td key={i}>
                  <DateFormatting date={rowData[c.dataField]} />
                </td>
              );
            default:
              return <td key={i}>{rowData[c.dataField]}</td>;
          }
        })}
      </tr>
    );
  }
  render() {
    return (
      <MainLayout title="Salary Slip">
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Basic Info" />
          <Box.Body className="no-padding">
            <FullListView
              className="table"
              data={this.state.salarySlip['BasicInfo'] ? this.state.salarySlip['BasicInfo'].data : []}
              columns={this.state.salarySlip.BasicInfo.cols}
              renderHeaderCell={this.renderListHeaderCell}
              renderRow={this.renderBasicInfo}
            />
          </Box.Body>
          <Box.Footer className="text-center" />
        </Box>
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Earnings" />
          <Box.Body className="no-padding">
            <FullListView
              className="table-condensed"
              data={this.state.salarySlip['Earnings'] ? this.state.salarySlip['Earnings'].data : []}
              columns={this.state.salarySlip.columns}
              renderHeaderCell={this.renderListHeaderCell}
              renderRow={this.renderListRow}
            />
          </Box.Body>
          <Box.Footer className="text-center" />
        </Box>
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Deductions" />
          <Box.Body className="no-padding">
            <FullListView
              className="table-condensed"
              data={this.state.salarySlip['Deductions'] ? this.state.salarySlip['Deductions'].data : []}
              columns={this.state.salarySlip.columns}
              renderHeaderCell={this.renderListHeaderCell}
              renderRow={this.renderListRow}
            />
          </Box.Body>
          <Box.Footer className="text-center" />
        </Box>
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Total" />
          <Box.Body className="no-padding">
            <FullListView
              className="table-condensed"
              data={this.state.salarySlip['Total'] ? this.state.salarySlip['Total'].data : []}
              columns={this.state.salarySlip.Total.cols}
              renderHeaderCell={this.renderListHeaderCell}
              renderRow={this.renderListRow}
            />
          </Box.Body>
          <Box.Footer className="text-center" />
        </Box>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalarySlip);

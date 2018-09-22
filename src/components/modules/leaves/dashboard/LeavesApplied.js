import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Box from '../../../common/Widgets/Box';
import FullListView from '../../../common/List/FullListView';
import { Link, Redirect } from 'react-router-dom';
import Badge from '../../../common/Badge';
import DateFormatting from '../../../common/DateFormatting';
import LinkButton from '../../../common/Navigation/LinkButton';
import swal from 'sweetalert';

class LeavesApplied extends Component {
  constructor(props) {
    super(props);
    this.renderRecentLeaveRow = this.renderRecentLeaveRow.bind(this);
  }

  handleAlertDemo() {
    swal('Good job!', 'You clicked the button!', 'success');
  }

  handleClick(rowData) {
    // var id = rowData.id;
    // this.props.history.push({
    //   pathname: '/leaves/application',
    //   state: {
    //     data: rowData,
    //     id: id,
    //     empName: '',
    //     approvalRequest: false
    //   }
    // });
  }

  renderRecentLeaveHeaderCell(column, index) {
    switch (column.dataField) {
      case 'status':
        return (
          <th key={index} style={{ width: '70px' }}>
            {column.label}
          </th>
        );
      default:
        return <th key={index}>{column.label}</th>;
    }
  }
  renderRecentLeaveRow(rowData, columns, index) {
    const subStatusEnum = {
      WFO: {
        name: 'Work From Office',
        class: 'bg-green'
      },
      WFH: {
        name: 'Work From Home',
        class: 'bg-green'
      },
      WFR: {
        name: 'Work From Remote Location',
        class: 'bg-green'
      },
      WOH: {
        name: 'Work On Holiday',
        class: 'bg-green'
      },
      EL: {
        name: 'Earned Leave',
        class: 'bg-red'
      },
      RL: {
        name: 'Restricted Leave',
        class: 'bg-red'
      },

      CL: {
        name: 'Complementary leave',
        class: 'bg-red'
      }
    };
    return (
      <tr key={index} onClick={this.handleClick.bind(this, rowData)}>
        {columns.map((c, i) => {
          switch (c.dataField) {
            case 'startDate':
              return (
                <td key={i} className="mailbox-name">
                  <DateFormatting date={rowData[c.dataField]} format={'DD/MM/YYYY'} />
                  {rowData['calenderDays'] == 1 || rowData['calenderDays'] == 0.5 ? (
                    <span>({rowData['calenderDays']} day)</span>
                  ) : (
                    <span>({rowData['calenderDays']} days)</span>
                  )}
                </td>
              );
            case 'alhActivitySubTypeCode':
              return (
                <td key={i} className="mailbox-name">
                  {subStatusEnum[rowData[c.dataField]] ? subStatusEnum[rowData[c.dataField]].name : ''}
                </td>
              );
            case 'approvalStatus':
              return (
                <td key={i} className="mailbox-status">
                  <Badge status={rowData['status']} />
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
      <Box className="box-info">
        <Box.Header iconClass="fa fa-comments" title="Pending Approvals">
          <div className="box-tools pull-right">
            <ButtonToolbar>
              <LinkButton to="/leaves/apply" bsStyle="primary" bsSize="small">
                Apply Leave
              </LinkButton>
              <LinkButton to="/leaves/applications" bsStyle="primary" bsSize="small">
                Leave Applications
              </LinkButton>
              <Button bsStyle="primary" bsSize="small" onClick={this.handleAlertDemo}>
                Alert Demo
              </Button>
            </ButtonToolbar>
          </div>
        </Box.Header>
        <Box.Body className="no-padding">
          <FullListView
            className="table-condensed"
            data={this.props.data ? this.props.data : []}
            columns={this.props.columns}
            renderHeaderCell={this.renderRecentLeaveHeaderCell}
            renderRow={this.renderRecentLeaveRow}
          />
        </Box.Body>
        <Box.Footer className="text-center">
          <Link to="leaves/applications">View All Leaves</Link>
        </Box.Footer>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    leaveType: state.app.leaveType
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeavesApplied);

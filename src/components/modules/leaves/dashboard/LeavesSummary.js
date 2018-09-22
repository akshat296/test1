import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Box from '../../../common/Widgets/Box';
import ProgressGroup from '../../../common/Widgets/ProgressGroup';
import DescriptionBlock from '../../../common/Widgets/DescriptionBlock';
import ALHActions from '../../../../redux/alh';

class LeavesSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.summary(this.props.fiscalYear);
  }

  render() {
    let leave = this.props.alh ? this.props.alh.leaveSummary : [];
    let workedData = leave ? (leave[0] ? leave[0]['W'] : []) : [];
    let leaveData = leave ? (leave[1] ? leave[1]['L'] : []) : [];
    Array.prototype.push.apply(workedData, leaveData);
    leave = workedData;
    let totalLeave = 0,
      remainingLeave = 0,
      takenLeave = 0,
      carryForward = 0;

    const bar_color = ['red', 'yellow', 'green'];
    if (leave && Object.keys(leave).length > 0) {
      leave.map((e, i) => {
        remainingLeave = remainingLeave + Number(e.remaining);
        takenLeave = takenLeave + Number(e.taken);
        carryForward = carryForward + Number(e.carryForward ? e.carryForward : 0);
      });
      totalLeave = Number(remainingLeave) + Number(takenLeave) + Number(carryForward);
      let totalCalendarDays = this.props.alh ? this.props.alh.yearSummary.totalCalenderDays : 0;
      let calendarDays = this.props.alh ? this.props.alh.yearSummary.calenderDays : 0;
      let totalWorkingDays = this.props.alh ? this.props.alh.yearSummary.totalWorkingDays : 0;
      let workingDays = this.props.alh ? this.props.alh.yearSummary.totalWorkingDays : 0;
      let workedDays = this.props.alh ? this.props.alh.getWorkingSummary.workedDays : 0;

      return (
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Leaves Summary">
            <i className="fa fa-comments" />
            <h3 className="box-title">Activity Summary</h3>
          </Box.Header>
          <Box.Body>
            <Row>
              <Col md={12}>
                {/* {this.props.alh.leaveSummary.map((e, i) => { */}
                {leave.map((e, i) => {
                  return (
                    <ProgressGroup
                      key={i}
                      title={e.name}
                      now={leave && Object.keys(leave).length > 0 ? e.remaining : ''}
                      max={leave && Object.keys(leave).length > 0 ? e.remaining + e.taken : ''}
                      color={bar_color[i]}
                      stripped
                    />
                  );
                })}
              </Col>
            </Row>
          </Box.Body>
          <Box.Footer className="text-center">
            <Row>
              <Col sm={3} xs={6}>
                <DescriptionBlock border={['right']}>
                  <DescriptionBlock.Header>{totalCalendarDays - calendarDays}</DescriptionBlock.Header>
                  <DescriptionBlock.Text>CALENDAR DAYS</DescriptionBlock.Text>
                </DescriptionBlock>
              </Col>
              <Col sm={3} xs={6}>
                <DescriptionBlock border={['right']}>
                  <DescriptionBlock.Header>{totalWorkingDays - workingDays}</DescriptionBlock.Header>
                  <DescriptionBlock.Text>WORKING DAYS</DescriptionBlock.Text>
                </DescriptionBlock>
              </Col>
              <Col sm={3} xs={6}>
                <DescriptionBlock border={['right']}>
                  <DescriptionBlock.Header>{workedDays}</DescriptionBlock.Header>
                  <DescriptionBlock.Text>WORKED</DescriptionBlock.Text>
                </DescriptionBlock>
              </Col>
              <Col sm={3} xs={6}>
                <DescriptionBlock>
                  <DescriptionBlock.Header>{takenLeave}</DescriptionBlock.Header>
                  <DescriptionBlock.Text>ON LEAVE</DescriptionBlock.Text>
                </DescriptionBlock>
              </Col>
            </Row>
          </Box.Footer>
        </Box>
      );
    } else {
      return (
        <Box className="box-info">
          <Box.Header iconClass="fa fa-comments" title="Leaves Summary" />
          <Box.Body>No records found</Box.Body>
        </Box>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    alh: state.alh.summary,
    fiscalYear: state.app.fiscalYear
  };
};

const mapDispatchToProps = dispatch => {
  return {
    summary: fiscalYear => {
      dispatch(ALHActions.fetchSummary(fiscalYear));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeavesSummary);

import React from 'react';
import Box from '../../../common/Widgets/Box';
import NavItem from '../../../common/Navigation/NavItem';
import LinkButton from '../../../common/Navigation/LinkButton';

export default () => {
  return (
    <React.Fragment>
      <LinkButton to="/leaves/apply" bsClass="btn btn-primary btn-block margin-bottom">
        New Leave Application
      </LinkButton>
      <Box className="box-solid">
        {/* <Box.Header title="" /> */}
        <Box.Body className="no-padding">
          <ul className="nav nav-pills nav-stacked">
            <NavItem to="/leaves" exact={true}>
              <i className="fa fa-file-text-o" />
              Leave Dashboard
            </NavItem>
            <NavItem to="/leaves/applications" exact={true}>
              <i className="fa fa-file-text-o" /> Leave Applications
            </NavItem>
            <NavItem to="/leaves/activity" exact={true}>
              <i className="fa fa-file-text-o" /> Activity Log
            </NavItem>
            {/* <NavItem to="/leaves/report" exact={true}>
              <i className="fa fa-file-text-o" /> Leaves Report
            </NavItem>
            <NavItem to="/leaves/attendance" exact={true}>
              <i className="fa fa-file-text-o" /> Attendance Report
            </NavItem> */}
            <NavItem to="/leaves/holidays" exact={true}>
              <i className="fa fa-file-text-o" /> Holidays List
            </NavItem>
            <NavItem to="/leaves/category" exact={true}>
              <i className="fa fa-file-text-o" /> Activity Category
            </NavItem>
          </ul>
        </Box.Body>
      </Box>
    </React.Fragment>
  );
};

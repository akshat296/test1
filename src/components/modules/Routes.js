import React from 'react';
import PrivateRoute from '../common/Navigation/PrivateRoute';
import LoginRoute from '../common/Navigation/LoginRoute';
import { Redirect, Route, Switch } from 'react-router';
import DashboardModule from './dashboard';
import LoginModule from './login';
import PageNotFound from '../common/PageNotFound';

// import LeavesModule from './leaves';
// import EmployeesModule from './employees';
// import EmpProfile from './employees/empProfile';
// import PayList from './salary';

// import SalarySlip from './salary/slip';
// import Employees from './personRole';
// import bpmnAcitivityLog from './bpmn/bpmnActivityLog';
// import PermissionDetails from './permissionDetails';
// import RolesConstraint from './rolesConstraint';
// import ProfileTypes from './profile';
// import ActivityType from './activityType';
// import PolicyModule from './policy';
// import InfoChangeHistory from './employees/infoChange';

// import UserMenuRoute from '../common/Navigation/UserMenu';
// import User from '../common/Navigation/UserMenu';
import ModuleLoader from './ModuleLoader';

const modulesToLoad = {
  //    Dashboard: () => import('./leaves/dashboard'),
};

export default () => (
  <React.Fragment>
    <LoginRoute exact path="/login" component={LoginModule} />
    <PrivateRoute exact path="/dashboard" component={DashboardModule} />

    <ModuleLoader modulesToLoad={modulesToLoad}>
      {/* <ModuleLoader.Route exact path="/bpmn" module="Attendance/Leaves" component="bpmnAcitivityLog" /> */}
      {/* <ModuleLoader.Route path="/people" module="People">
        <ModuleLoader.SubRoute path="/employees" subModule="Employees" component="Employees" />
        <ModuleLoader.SubRoute path="/employee/:id" component="EmployeeProfile" />
        <ModuleLoader.SubRoute path="/profiletypes" subModule="Profiles" component="PersonProfileTypeModule" />
        <ModuleLoader.SubRoute path="/relationshipHistory" component="TypeChangeHistory" />
        <ModuleLoader.SubRoute path="/profile" component="EmployeeProfile" />
        <ModuleLoader.SubRoute path="/reportees" component="ReporteesModule" />
        <ModuleLoader.SubRoute path="/directory" component="EmpDirectory" />
        <ModuleLoader.SubRoute path="/new-person" component="NewPerson" />
        <ModuleLoader.SubRoute path="/onboarding" component="OnBoardingPersonList" />
        <ModuleLoader.SubRoute path="/masterlist" component="OnBoardingPersonList" />
        <ModuleLoader.SubRoute path="/profileChange" component="InfoChangeHistory" />
      </ModuleLoader.Route> */}
      {/* <ModuleLoader.Route path="/organization" module="Organization" component="Organization">
        <ModuleLoader.SubRoute path="/" subModule="Organization" component="OrgList" />
        <ModuleLoader.SubRoute path="/orgUnit" subModule="Organization Unit" component="OrgUnit" />
        <ModuleLoader.SubRoute path="/unittype" subModule="Organization Unit Type" component="OrgType" />
        <ModuleLoader.SubRoute path="/legalentities" subModule="Legal Entities" component="LegalEntities" />
        <ModuleLoader.SubRoute path="/fiscal" subModule="Fiscal Year" component="FiscalType" />
        <ModuleLoader.SubRoute path="/workplace" subModule="WorkPlace" component="WorkPlace" />
      </ModuleLoader.Route>
      <ModuleLoader.Route path="/setup" module="Setup">
        <ModuleLoader.SubRoute
          path="/permission-details"
          subModule="Permission Details"
          component="PermissionDetails"
        />
        <ModuleLoader.SubRoute path="/roles-constraint" subModule="Roles Constraint" component="RolesConstraint" />
        <ModuleLoader.SubRoute path="/person" subModule="Assign Role" component="AssignRole" />
        <ModuleLoader.SubRoute path="/permission" subModule="Role-Permission" component="RolePermission" />
        <ModuleLoader.SubRoute path="/activity-type" subModule="Activity SubType" component="ActivitySubType" />
        <ModuleLoader.SubRoute path="/policy" subModule="Policy" component="Policy" />
      </ModuleLoader.Route> */}
    </ModuleLoader>
  </React.Fragment>
);

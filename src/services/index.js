import { create } from 'apisauce';

const api = create({ baseURL: 'http://10.101.10.95:8080' });
// const api = create({ baseURL: 'http://10.101.21.52:8080' });
// export function loginService(body) {
//   return _filterReponse(api.post('token', body));
// }

export function setAuthorization(body) {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken) {
    api.setHeaders({ Authorization: `Bearer ${accessToken}` });
  }
}

export function fetchUserPerUnitsService(id) {
  setAuthorization();
  return _filterReponse(api.get('employees/get-units/' + id));
}

export function addRoleToEmpService(ids) {
  setAuthorization();
  return _filterReponse(
    api.post('employees/attachRole/', { roleId: ids.roleId, personId: ids.empId, orgUnitId: ids.typeId })
  );
}

export function empLeavesService(limit, offset, sortBy, status, alhActivitySubTypeCode, leaveID) {
  setAuthorization();
  return _filterReponse(
    api.get(
      '/leaves/employee?sortBy=' +
        JSON.stringify(sortBy) +
        '&status=' +
        status +
        '&alhActivitySubTypeCode=' +
        alhActivitySubTypeCode +
        '&limit=' +
        limit +
        '&skip=' +
        offset +
        '&leaveId=' +
        leaveID
    )
  );
}

export function addEntityService(num, name) {
  setAuthorization();
  return _filterReponse(api.post('/legal-entities/create', { orgId: num, name: name }));
}
export function deleteEntityService(legalEntityId) {
  setAuthorization();
  return _filterReponse(api.delete('/legal-entities/' + legalEntityId));
}

export function editSubTypeService(editedSubTypeObj) {
  setAuthorization();
  return _filterReponse(api.put('alh/updateAlhActivitySubType', editedSubTypeObj));
}

function _filterReponse(promise) {
  return promise.then(res => {
    if (res.data.code === 500) {
      throw res.data;
    }
    return res.data;
  });
}

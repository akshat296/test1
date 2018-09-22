import { create } from 'apisauce';

const api = create({ baseURL: 'http://api.tsbuddy.com/' });

export function loginService({ email, password }) {
  // console.log(window.__INITIAL_DATA__.session);
  return _filterReponse(
    api.post(
      '/api/TokenAuth/Authenticate',
      {
        userNameOrEmailAddress: email,
        password: password,
        rememberClient: true
      },
      {
        headers: {
          'Abp.TenantId': window.__INITIAL_DATA__.session.tenantId || '5'
        }
      }
    )
  );
}

export function setAuthorization(body) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    api.setHeaders({ Authorization: `Bearer ${accessToken}` });
  }
}

function _filterReponse(promise) {
  return promise.then(res => res.data);
}

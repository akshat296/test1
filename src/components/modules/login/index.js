import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from '../../common/Formly';
import DocumentBodyHandler from '../../common/Utils/DocumentBodyHandler';
import LoginActions from '../../../redux/login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        schema: [
          {
            key: 'email',
            type: 'text',
            label: 'Email address',
            placeholder: 'user@company.com',
            help: "We'll never share your email with anyone else.",
            feedback: 'envelope',
            validationConstraints: {
              presence: {
                allowEmpty: false
              }
              // email: true
            }
          },
          {
            key: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            feedback: 'lock',
            validationConstraints: {
              presence: {
                allowEmpty: false
              }
            }
          }
        ],
        modelState: {},
        model: {
          email: '',
          password: ''
        }
      }
    };
  }
  handleFormUpdate({ model, modelState }) {
    this.state.form.model = model;
    this.state.form.modelState = modelState;
    this.setState(this.state);
  }
  render() {
    // if (this.props.redirectToReferrer) {
    //   const { from } = this.props.location.state || { from: { pathname: '/' } };
    //   return <Redirect to={from} />;
    // }
    return (
      <DocumentBodyHandler className="login-page">
        <div className="login-box">
          <div className="login-image" style={{ width: '150px', height: '150px', margin: '0 auto' }}>
            {/* <img
              src={`/assets/img/${this.props.logo}`}
              style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }}
            /> */}
          </div>
          {/* <div className="login-logo">{this.props.tenantName}</div> */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form
              onSubmit={e => {
                e.preventDefault();
                const errors = this.form.validate(true);
                if (errors.length === 0) {
                  //this.props.login(this.state.form.model.email, this.state.form.model.password);
                }
              }}
            >
              <Form
                ref={_form => (this.form = _form)}
                schema={this.state.form.schema}
                model={this.state.form.model}
                modelState={this.state.form.modelState}
                onFormUpdate={this.handleFormUpdate.bind(this)}
              />
              <div className="row">
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <a>I forgot my password</a>
          </div>
        </div>
      </DocumentBodyHandler>
    );
  }
}
const mapStateToProps = ({ login, userConfiguration }) => {
  // const { redirectToReferrer, processing } = login;
  // const { custom, setting } = userConfiguration;
  // console.log(setting.values);
  return {
    // redirectToReferrer,
    // processing,
    // logo: setting.values['Tenant.Logo'],
    // tenantName: custom.tenantName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // login: (username, password) => {
    //   dispatch(LoginActions.loginRequest(username, password));
    // },
    // updateField: (prop, value) => {
    //   dispatch(LoginActions.updateField(prop, value));
    // }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

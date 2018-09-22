import React, { Component } from 'react';
//import enhanceWithClickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import LoginActions from '../../../redux/login';
import UserImage from '../../../assets/img/default-user.png';
class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    //this.handledata=this.handledata.bind(this);
  }
  handleClickOutside() {
    this.setState({
      show: false
    });
  }

  render() {
    let img = this.props.myprofile.dp === '' ? UserImage : this.props.myprofile.dp;
    return (
      <li className="dropdown user user-menu">
        <a
          href="#"
          className="dropdown-toggle"
          onClick={() =>
            this.setState({
              show: !this.state.show
            })
          }
        >
          <img
            src={img}
            onError={e => {
              e.target.src = UserImage;
            }}
            className="user-image"
            alt="User Image"
          />
        </a>
        <ul style={{ display: this.state.show ? 'block' : 'none' }} className="dropdown-menu">
          <li className="user-header">
            <img
              className="profile-user-img img-responsive img-circle"
              alt="User Image"
              src={img}
              onError={e => {
                e.target.src = UserImage;
              }}
            />
            <p>
              - Web Developer
              <small>Member since Nov. 2012</small>
            </p>
          </li>

          <li className="user-footer">
            <div className="pull-left">
              <Link to="/people/profile">
                <button className="btn btn-default btn-flat">Profile</button>
              </Link>
            </div>
            <div className="pull-right">
              <button onClick={this.props.onLogOutClick} className="btn btn-default btn-flat">
                Sign out
              </button>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}
//export default enhanceWithClickOutside(UserMenu);
const mapStateToProps = state => {
  return {
    myprofile: state.app.userData
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);

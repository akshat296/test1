import React from 'react';
import Box from '../../common/Widgets/Box';
import UserImage from '../../../assets/img/default-user.png';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let img = this.props.dp === '' ? UserImage : this.props.dp;

    return (
      <Box className="box-info">
        <Box.Header iconClass="fa fa-comments" title="" />
        <Box.Body>
          <pre>
            <img
              className="profile-user-img img-responsive img-circle"
              alt="User Image"
              src={img}
              onError={e => {
                e.target.src = UserImage;
              }}
              style={{ width: 150, height: 150 }}
            />
          </pre>
          <br />
          <b>{this.props.email}</b>
        </Box.Body>
      </Box>
    );
  }
}

export default Image;

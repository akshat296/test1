import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class DateFormatting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.format
      ? moment(this.props.date).format(this.props.format)
      : moment(this.props.date).format(this.props.dateFormat);
  }
}

const mapStateToProps = ({ app }) => {
  return {
    dateFormat: app.dateFormat
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateFormatting);

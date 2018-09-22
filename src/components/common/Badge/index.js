import React from 'react';
import { connect } from 'react-redux';

class Badge extends React.Component {
  render() {
    switch (this.props.status) {
      case 'approved':
        return <span className="badge bg-green">{this.props.status}</span>;
      case 'rejected':
        return <span className="badge bg-red">{this.props.status}</span>;
      case 'progress':
        return <span className="badge bg-yellow">{this.props.status}</span>;
      case 'applied':
        return <span className="badge bg-aqua">{this.props.status}</span>;
      default:
        return (
          <span className={`badge ${this.props.className}`} style={this.props.style}>
            {this.props.label}
          </span>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    //leaveStatusType: state.app.leaveStatusType
  };
};

export default connect(mapStateToProps)(Badge);

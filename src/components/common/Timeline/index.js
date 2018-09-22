import React from 'react';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="timeline">
        {this.props.data.map((r, index) => (
          <ul className="timeline" key={index}>
            <li className="time-label">
              <span className="bg-red" id={r.month} onClick={this.props.controlFunc}>
                {r.month}
              </span>
            </li>
            <li>
              <i className="fa fa-lock" />
              <div className="timeline-item">
                <span className="time "> {r.duration} </span>
                <span className="time timeline-header">
                  <i className="fa fa-clock-o" /> {r.year}
                </span>
                <h3 className="timeline-header">
                  <a id={r.month} onClick={this.props.controlFunc}>
                    {r.name}
                  </a>
                </h3>
                <div className="timeline-body" id={r.month} onClick={this.props.controlFunc}>
                  {r.description}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </ul>
    );
  }
}

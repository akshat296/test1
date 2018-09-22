import React from 'react';

class CheckList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const checked = this.props.checked;
    const list = this.props ? this.props.list : [];
    return (
      <table className={`table ${this.props.className}`}>
        <tbody>
          {list.map((e, i) => {
            return (
              <tr key={i}>
                <td key={i}>
                  <label>{e}</label>
                </td>
                <td id={i}>
                  <input type="checkbox" name={e} onChange={this.props.controlFunc} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CheckList;

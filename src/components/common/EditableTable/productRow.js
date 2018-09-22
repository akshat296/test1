import React from 'react';
import EditableCell from './editableCell';

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.newDetail);
  }
  render() {
    return (
      <tr className="eachRow highlight" style={{ background: this.props.newDetail.color }}>
        {Object.keys(this.props.newDetail).map((obj, i) => {
          if (this.props.hideColums.indexOf(obj) < 0) {
            return (
              <EditableCell
                key={i}
                onPermissionTableUpdate={this.props.onPermissionTableUpdate}
                onInputBoxBlur={this.props.onInputBoxBlur}
                renderActions={this.props.renderActions}
                actionAdded={this.props.actionAdded}
                cellData={{
                  type: obj,
                  value: this.props.newDetail[obj],
                  id: this.props.newDetail.id,
                  unitId: this.props.newDetail.unitId,
                  new: this.props.newDetail.new ? this.props.newDetail.new : false,
                  options: this.props.newDetail.options ? this.props.newDetail.options : null,
                  input_types: this.props.newDetail.input_types,
                  options1: this.props.newDetail.options1 ? this.props.newDetail.options1 : [],
                  constaintId: this.props.newDetail.constaintId,
                  holidayOn: this.props.newDetail.holidayOn,
                  name: this.props.newDetail.name,
                  activityName: this.props.newDetail.activityName,
                  selectOptions: this.props.newDetail.selectOptions ? this.props.newDetail.selectOptions : []
                }}
              />
            );
          }
        })}
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
        </td>
      </tr>
    );
  }
}
export default ProductRow;

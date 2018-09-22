import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import DateFormatting from '../DateFormatting';

class EditableCell extends React.Component {
  render() {
    let new_flag = this.props.cellData.new;
    let input_types = this.props.cellData.input_types ? this.props.cellData.input_types : '';
    return (
      <td>
        {Array.isArray(this.props.cellData.options) ? (
          <FormGroup>
            <FormControl
              style={{ align: 'center', width: 'auto', display: 'flex', borderColor: 'red' }}
              onChange={this.props.actionAdded.bind(this)}
              inputRef={el => (this.inputEl = el)}
              componentClass="select"
              placeholder="select"
            >
              <option> {'---SELECT---'}</option>
              {this.props.cellData.type === 'unitType'
                ? this.props.cellData.options1.map((value, i) => (
                    <option key={i} id={value.id} value={value[this.props.cellData.type]}>
                      {value[this.props.cellData.type]}
                    </option>
                  ))
                : this.props.cellData.options.map((value, i) => (
                    <option key={i} id={value.id} value={value[this.props.cellData.type]}>
                      {value[this.props.cellData.type]}
                    </option>
                  ))}
            </FormControl>
          </FormGroup>
        ) : !(typeof new_flag === 'boolean' ? new_flag : new_flag[this.props.cellData.type]) ? (
          this.props.cellData.type === 'holidayOn' ? (
            <DateFormatting date={this.props.cellData.holidayOn}>
              <span
                id={this.props.cellData.id}
                value={this.props.cellData.constaintId}
                name={this.props.cellData.unitId}
                onClick={this.props.renderActions}
              >
                {this.props.cellData.value}
              </span>
            </DateFormatting>
          ) : (
            <span
              id={this.props.cellData.id}
              value={this.props.cellData.constaintId}
              name={this.props.cellData.unitId}
              onClick={this.props.renderActions}
            >
              {this.props.cellData.value}
            </span>
          )
        ) : input_types && input_types[this.props.cellData.type] ? (
          input_types[this.props.cellData.type] === 'select' ? (
            <FormControl
              style={{ align: 'center', width: 'auto', display: 'flex', borderColor: 'red' }}
              onChange={this.props.actionAdded}
              onBlur={this.props.onInputBoxBlur}
              inputRef={el => (this.inputEl = el)}
              componentClass="select"
              placeholder="select"
            >
              <option value="---SELECT---"> {'---SELECT---'}</option>
              {this.props.cellData.selectOptions &&
                this.props.cellData.selectOptions.map((obj, i) => (
                  <option key={i} id={obj.code} value={obj.name}>
                    {obj.name}
                  </option>
                ))}
            </FormControl>
          ) : (
            <input
              style={{ align: 'center', width: 'auto', display: 'flex', borderColor: 'red' }}
              type={input_types[this.props.cellData.type]}
              name={this.props.cellData.type}
              id={this.props.cellData.id}
              value={this.props.cellData.value}
              onChange={this.props.onPermissionTableUpdate}
              onBlur={this.props.onInputBoxBlur}
              required={true}
            />
          )
        ) : (
          <input
            style={{ align: 'center', width: 'auto', display: 'flex', borderColor: 'red' }}
            type="text"
            name={this.props.cellData.type}
            id={this.props.cellData.id}
            value={this.props.cellData.value}
            onChange={this.props.onPermissionTableUpdate}
            onBlur={this.props.onInputBoxBlur}
            required={true}
          />
        )}
      </td>
    );
  }
}
export default EditableCell;

import React from 'react';
import { connect } from 'react-redux';
import Box from '../../../common/Widgets/Box';
import { Table } from '../../../common/Table';
import DateFormatting from '../../../common/DateFormatting';

class ExceptionResolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          label: 'Date',
          dataField: 'date'
        },
        {
          label: 'Exception',
          dataField: 'errorMessegeText'
        },
        {
          label: 'Resolution Instructions',
          dataField: 'resolutionInstructions'
        }
      ]
    };
  }

  renderHeaderCell(column, index) {
    return <th key={index}>{column.label}</th>;
  }

  renderRow(rowData, columns, index) {
    return (
      <tr key={index} id={index}>
        {columns.map((c, i) => {
          switch (c.dataField) {
            case 'date':
              return (
                <td key={i}>
                  <DateFormatting date={rowData['date']} />
                </td>
              );
            case 'resolutionInstructions':
              return <td key={i}>{rowData[c.dataField]}</td>;
            default:
              return <td key={i}>{rowData[c.dataField]}</td>;
          }
        })}
      </tr>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-8">
          <Box className="box-info">
            <Box.Header title={'Exceptions'} />
            <Box.Body>
              <Table
                columns={this.state.columns}
                data={[]}
                renderHeaderCell={this.renderHeaderCell.bind(this)}
                renderRow={this.renderRow.bind(this)}
              />
            </Box.Body>
          </Box>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExceptionResolution);

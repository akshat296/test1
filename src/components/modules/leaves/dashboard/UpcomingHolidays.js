import React, { Component } from 'react';
import Box from '../../../common/Widgets/Box';
import FullListView, { ListItem } from '../../../common/List/FullListView';
import { Link } from 'react-router-dom';
import DateFormatting from '../../../common/DateFormatting';

export default class UpcomingHolidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HolidayList: {
        columns: [
          {
            label: 'Date',
            dataField: 'holidayOn'
          },
          {
            label: 'Holiday',
            dataField: 'name'
          }
        ]
      }
    };
  }
  renderTableHeader(column, index) {
    return (
      <th key={index} style={{ width: '50px' }}>
        {column.label}
      </th>
    );
  }
  renderTableRow(rowData, columns, index) {
    return (
      <tr key={index}>
        {columns.map((c, i) => {
          switch (c.dataField) {
            case 'holidayOn':
              return (
                <td key={i}>
                  <DateFormatting date={rowData[c.dataField]} />
                </td>
              );
            default:
              return <td key={i}>{rowData[c.dataField]}</td>;
          }
        })}
      </tr>
    );
  }
  render() {
    return (
      <Box className="box-info">
        <Box.Header iconClass="fa fa-comments" title="Upcoming Holidays" />
        <Box.Body>
          <FullListView
            className="table-hover table-striped"
            data={this.props.data ? this.props.data : []}
            columns={this.state.HolidayList.columns}
            renderHeaderCell={this.renderTableHeader.bind(this)}
            renderRow={this.renderTableRow.bind(this)}
          />
        </Box.Body>
        <Box.Footer className="text-center">
          <Link to="leaves/holidays">View All Holidays</Link>
        </Box.Footer>
      </Box>
    );
  }
}

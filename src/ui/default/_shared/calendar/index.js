import './index.scss';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { MainLayout, Box, GridView } from 'ui/default/_shared';

const moment = extendMoment(Moment);

const renderWeeks = (month, onDayClick, setDateColor) => {
  const start = moment(month).startOf('month');
  const end = moment(month).endOf('month');
  const range = moment.range(start, end + 1);
  return (
    <React.Fragment>
      {Array.from(range.by('weeks')).map((week, idx) => {
        const weekStart = moment(week).startOf('week');
        const weekEnd = moment(week).endOf('week');
        const weekRange = moment.range(weekStart, weekEnd);
        return (
          <tr key={idx} className="calendar-dow">
            {Array.from(weekRange.by('days')).map(
              (day, id) =>
                day.toDate() < start.toDate() || day.toDate() > end.toDate() ? (
                  <td key={id} />
                ) : (
                  <td
                    key={id}
                    className="pointer"
                    style={{ background: setDateColor(day.toDate()) }}
                    onClick={() => {
                      onDayClick(day.toDate());
                    }}
                  >
                    <div className="day">{day.format('DD')}</div>
                  </td>
                )
            )}
          </tr>
        );
      })}
    </React.Fragment>
  );
};

const renderWeekHeader = () => {
  return (
    <tr className="calendar-dow-header">
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
      <th>Sun</th>
    </tr>
  );
};

const Calendar = ({ month, onDayClick, setDateColor = () => {} }) => {
  return (
    <Box className="box-primary no-top-border">
      <Box.Header className="text-center" title={`${month.format('MMMM')}, ${month.format('YYYY')}`} />
      <Box.Body className="no-padding">
        <div id="zabuto_calendar_m4v">
          <div className="zabuto_calendar" id="zabuto_calendar_m4v">
            <table className="table">
              <tbody>
                {renderWeekHeader()}
                {renderWeeks(month, onDayClick, setDateColor)}
              </tbody>
            </table>
          </div>
        </div>
      </Box.Body>
    </Box>
  );
};

export default Calendar;

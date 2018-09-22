import React from 'react';
import Box from '../Widgets/Box';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import FilterIcon from '../../../assets/img/filterIcon.png';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: [],
      fromDate: moment(),
      toDate: moment(),
      showOnlyIcon: false
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(date) {
    this.setState({
      fromDate: date
    });
  }

  handleChange2(date) {
    this.setState({
      toDate: date
    });
  }

  handleClick(el) {
    var selected = this.state.selectedCategory;
    if (selected.includes(el)) {
      var indx = selected.indexOf(el);
      selected.splice(indx, 1);
    } else selected.push(el);
    this.setState({
      selectedCategory: selected
    });
  }

  render() {
    return !this.props.showOnlyIcon ? (
      <Box>
        <Box.Header
          iconClass="fa fa-filter"
          title="Filter By"
          minimizeControl={this.props.collapseController}
          minimizeButton={this.props.minimizeButton}
        />
        <Box.Body>
          <div>
            <div>
              <h5>
                <b>CATEGORIES</b>
              </h5>
            </div>
            {this.props.options.map((el, il) => {
              return el.name != 'Date' ? (
                <div
                  className="treeview"
                  key={il}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    marginTop: '10px',
                    display: 'block'
                  }}
                >
                  {el.name}
                  {el.type && el.type.length > 0 ? (
                    <i
                      id={il}
                      className={this.state.selectedCategory.includes(el) ? 'fa fa-chevron-down' : 'fa fa-chevron-left'}
                      style={{ marginLeft: '5px' }}
                      onClick={this.handleClick.bind(this, el)}
                    />
                  ) : null}
                  {this.state.selectedCategory.includes(el) &&
                    (el.type || el.type.length > 0) &&
                    el.type.map((el2, il2) => {
                      return typeof el2 != 'object' ? (
                        <button
                          key={il2}
                          name={el.name}
                          value={el2}
                          style={{
                            display: 'block',
                            marginLeft: '20px',
                            border: '0px',
                            background: 'white',
                            color: 'black'
                          }}
                          onClick={this.props.controlFunc}
                        >
                          {el2}
                        </button>
                      ) : (
                        <button
                          key={il2}
                          id={el2.code}
                          name={el.name}
                          value={el2.name}
                          style={{
                            display: 'block',
                            marginLeft: '20px',
                            border: '0px',
                            background: 'white',
                            color: 'black'
                          }}
                          onClick={this.props.controlFunc}
                        >
                          {el2.name}
                        </button>
                      );
                    })}
                </div>
              ) : (
                <div
                  className="treeview"
                  key={il}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    marginTop: '10px',
                    display: 'block'
                  }}
                >
                  {el.name}
                  <br />
                  {el.type.length > 0 &&
                    el.type.map((elem, ind) => {
                      return (
                        <div key={ind} style={{ margin: '10px', fontSize: '14px' }}>
                          {elem}
                          <input type="date" value={this.props.elem} name={elem} onChange={this.props.dateSelector} />
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </Box.Body>
      </Box>
    ) : (
      <button type="button" className="btn btn-box-tool" onClick={this.props.collapseController}>
        <img
          src={`${FilterIcon}`}
          id="filter"
          style={{
            boxShadow: '2px 2px grey, -.2em 0 .2em grey',
            background: 'white',
            padding: '3px',
            width: '30px',
            height: '30px'
          }}
        />
      </button>
    );
  }
}
export default Filter;

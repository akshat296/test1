import React, { Component } from 'react';
import Pagination from '../Pagination';
import { Table } from '../Table';
import Search from '../Search';
import Box from '../../common/Widgets/Box';
import Form from '../Formly';
import SortBy from '../SortBy';
import SortOrder from '../SortOrder';
import Select from '../Select';
import ListView from './ListView';
import DateFormatting from '../DateFormatting';

export const ListItem = ({ title, image, description, controlFunc }) => {
  return (
    <li className="item">
      <div className="product-info" onClick={controlFunc}>
        <a className="product-title">{title}</a>
        <span className="product-description">
          <DateFormatting date={description} />
        </span>
      </div>
    </li>
  );
};

export const ListHeader = ({ showEntries, filter, sortBy, search }) =>
  (({ showEntries } && (
    <Select
      options={this.props.showEntries.showEntries}
      label={this.props.showEntries.label}
      onChange={this.props.showEntries.onChange}
    />
  ))(
    { filter } && (
      <Select
        options={this.props.filter.filter}
        label={this.props.filter.label}
        onChange={this.props.filter.onChange}
      />
    )
  )({ sortBy } && <SortBy value={this.props.sortBy.sortBy} onChange={this.props.sortBy.onChange} />)(
    { search } && <Search value={this.props.search.matches} onChange={this.props.search.onChange} />
  ));
export const ListBody = ({}) => {
  <Table
    className={this.props.className}
    data={this.props.data}
    columns={this.props.columns}
    renderHeaderCell={this.props.renderHeaderCell}
    renderRow={this.props.renderRow}
  />;
};

export const ListFooter = ({ pagination }) => {
  ({ pagination } && (
    <div className="pull-right">
      <Pagination
        active={this.props.pagination.pager.active}
        currentPage={this.props.pagination.pager.offset}
        totalCount={this.props.pagination.pager.totalCount}
        maxPerPpage={this.props.pagination.pager.limit}
        controlFunc={this.props.pagination.handlePagination}
      />
    </div>
  ));
};
export default class FullListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let showEntries, filter, sortBy, search, pagination, list;
    if (this.props.showEntries) {
      showEntries = (
        <Select
          options={this.props.showEntries.showEntries}
          label={this.props.showEntries.label}
          onChange={this.props.showEntries.onChange}
        />
      );
    }
    if (this.props.filter) {
      filter = (
        <Select
          options={this.props.filter.filter}
          label={this.props.filter.label}
          onChange={this.props.filter.onChange}
        />
      );
    }
    if (this.props.sortBy) {
      sortBy = <SortBy value={this.props.sortBy.sortBy} onChange={this.props.sortBy.onChange} />;
    }
    if (this.props.search) {
      search = <Search value={this.props.search.matches} onChange={this.props.search.onChange} />;
    }
    if (this.props.pagination) {
      pagination = (
        <div className="pull-right">
          <Pagination
            active={this.props.pagination.pager.active}
            currentPage={this.props.pagination.pager.offset}
            totalCount={this.props.pagination.pager.totalCount}
            maxPerPage={this.props.pagination.pager.limit}
            controlFunc={this.props.pagination.handlePagination}
          />
        </div>
      );
    }
    if (this.props.columns) {
      list = (
        <Table
          className={this.props.className}
          data={this.props.data}
          columns={this.props.columns}
          renderHeaderCell={this.props.renderHeaderCell}
          renderRow={this.props.renderRow}
        />
      );
    }

    if (this.props.renderList) {
      list = <ListView className="products-list product-list-in-box" renderList={this.props.renderList} />;
    }
    return (
      <div>
        <Box.Header title={this.props.heading}>
          {showEntries}
          {filter}
          {sortBy}
          {search}
        </Box.Header>
        <Box.Body className="box-body table-responsive no-padding">{list}</Box.Body>
        <Box.Footer>{pagination}</Box.Footer>
      </div>
    );
  }
}

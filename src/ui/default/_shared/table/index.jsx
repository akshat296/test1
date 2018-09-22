import React from 'react';

const Table = ({ headerItems, body }) => {
  return (
    <table id="example2" className="table table-bordered table-hover dataTable" role="grid">
      {_renderHeader(headerItems)}
      <tbody>{_renderTableBody(body)}</tbody>
    </table>
  );
};

const _renderHeader = headerItems => {
  return (
    <thead>
      <tr role="row">
        {headerItems.map((data, i) => (
          <th className="sorting_asc" tabIndex={0} rowSpan={1} colSpan={1} aria-sort="ascending" key={i}>
            {data}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const _renderTableBody = items => {
  return items.length > 0
    ? items.map((item, i) => (
        <tr key={i} className={i % 2 === 0 ? 'odd' : 'even'}>
          {_renderKeys(item)}
        </tr>
      ))
    : null;
};

const _renderKeys = itemsObj =>
  Object.keys(itemsObj).map((data, i) => {
    return (
      <td className="text-left" key={i}>
        {itemsObj[data]}
      </td>
    );
  });

export default Table;

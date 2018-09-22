import React from 'react';

export const Table = ({ data, columns, className, renderHeaderCell, renderRow }) => {
  const renderHeader = () => columns.map((c, idx) => renderHeaderCell(c, idx));

  return (
    <table className={`table ${className}`}>
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>{data.map((r, index) => renderRow(r, columns, index))}</tbody>
    </table>
  );
};

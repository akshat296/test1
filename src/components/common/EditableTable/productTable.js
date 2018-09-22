import React from 'react';
import ProductRow from './productRow';

class ProductTable extends React.Component {
  render() {
    var onPermissionTableUpdate = this.props.onPermissionTableUpdate;
    var onInputBoxBlur = this.props.onInputBoxBlur;
    var actionAdded = this.props.actionAdded;
    var rowDel = this.props.onRowDel;
    var hideColums = this.props.hideColums;
    var renderActions = this.props.renderActions;
    var newDetail =
      this.props.permissionDetails && this.props.permissionDetails.length > 0
        ? this.props.permissionDetails.map(function(newDetail, i) {
            return (
              <ProductRow
                onPermissionTableUpdate={onPermissionTableUpdate}
                onInputBoxBlur={onInputBoxBlur}
                actionAdded={actionAdded}
                newDetail={newDetail}
                onDelEvent={rowDel.bind(this)}
                key={i}
                hideColums={hideColums}
                renderActions={renderActions}
              />
            );
          })
        : '';
    return (
      <div className="col-xs-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              {this.props.header.map((h, index) => (
                <th key={index}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newDetail ? newDetail : null}
            <tr>
              {
                <td>
                  <button type="button" onClick={this.props.onRowAdd} className="btn">
                    +
                  </button>
                </td>
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;

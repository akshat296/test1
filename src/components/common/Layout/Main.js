import React from 'react';
import Header from '../Navigation/Header';
import LeftSideBar from '../Navigation/LeftSideBar';

const PageHeader = ({ title, subTitle }) => {
  return (
    <section className="content-header">
      <h1>
        {title ? title : 'Page Title'}
        {subTitle ? <small>{subTitle}</small> : null}
      </h1>
      <ol className="breadcrumb">
        <li>
          <a>
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
  );
};

// TODO: Fix minimum height of content-wrapper
class MainLayout extends React.Component {
  state = {
    collapsed: false
  };

  componentDidMount() {}

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  collapeSideBar = () => {
    this.setState({
      collapsed: true
    });
  };

  expandSideBar = () => {
    this.setState({
      collapsed: false
    });
  };

  render = () => {
    const { title, subTitle, children } = this.props;
    return (
      <div className="wrapper">
        <Header collapsed={this.state.collapsed} toggleCollapse={this.toggleCollapse} />
        <LeftSideBar collapsed={this.state.collapsed} />
        <div
          style={{ minHeight: '900px', marginLeft: this.state.collapsed ? '100px' : '230px', zIndex: 100 }}
          className="content-wrapper"
        >
          <PageHeader title={title} subTitle={subTitle} />
          <section className="content">{children}</section>
        </div>
      </div>
    );
  };
}
export default MainLayout;

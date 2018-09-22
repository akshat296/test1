import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import '../../../../../src/index.scss';

import React from 'react';
import Header from '../navigation/header';
import MainSidebar from '../navigation/MainSidebar';
import Skin from '../utils/skin';

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
const MainLayout = ({ title, subTitle, children }) => (
  <Skin>
    <div className="wrapper">
      <Header />
      <MainSidebar />
      <div style={{ minHeight: '900px' }} className="content-wrapper">
        <PageHeader title={title} subTitle={subTitle} />
        <section className="content">{children}</section>
      </div>
    </div>
  </Skin>
);

export default MainLayout;

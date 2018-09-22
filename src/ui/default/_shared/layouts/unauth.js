import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';

import React from 'react';
import Skin from '../utils/skin';
import DocumentBodyHandler from '../utils/documentBodyHandler';

const UnAuthLayout = ({ className, children }) => (
  <DocumentBodyHandler className={className}>
    <Skin>{children}</Skin>
  </DocumentBodyHandler>
);

export default UnAuthLayout;

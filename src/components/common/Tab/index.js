import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class TabView extends React.Component {
  render() {
    const list = this.props.tabList ? this.props.tabList : [];
    const panel = this.props.panel && this.props.panel.length === list.length ? this.props.panel : [];
    return (
      <Tabs style={this.props.style} onSelect={this.props.onSelect || (() => {})}>
        <strong>{this.props.heading}</strong>
        <TabList>
          {list.map((t, i) => {
            return <Tab key={i}>{t}</Tab>;
          })}
        </TabList>
        {panel.map((p, i) => {
          return <TabPanel key={i}>{p}</TabPanel>;
        })}
      </Tabs>
    );
  }
}

export default TabView;

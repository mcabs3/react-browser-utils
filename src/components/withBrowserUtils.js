import React, { Component } from 'react';
import BrowserSizes from '../utils/BrowserSizes';
import { getBrowserData } from '../utils/helpers';


export default (ChildComponent) => {
  class WindowComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dimensions: {
          height: 0,
          width: 0,
        }
      };
      this.updateBrowserAttributes = this.updateBrowserAttributes.bind(this);
    }

    componentWillMount() {
      this.updateBrowserAttributes();
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateBrowserAttributes);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateBrowserAttributes);
    }

    updateBrowserAttributes() {
      this.setState({
        ...getBrowserData(window)
      });
    }

    render() {
      return (
        <ChildComponent
          {...this.props}
          browserUtils={this.state}
        />
      );
    }
  }

  const childComponentName = ChildComponent.displayName
    || ChildComponent.name
    || 'Component';

  WindowComponent.displayName = `WindowComponent(${childComponentName})`;
  return WindowComponent;
};

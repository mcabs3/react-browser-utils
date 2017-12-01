# react-browser-utils

A React Library that helps us developers track browser events

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Redux Integration](#redux-integration)
    * [Configure Store](#configure-store)
    * [Configure App](#configure-app)
    * [Example Component](#example-component)

## Installation

```bash
yarn add react-browser-utils
```

## Usage
You have two options for usage (because I like being flexible). Provided is a [withBrowserUtils]() HOC function that will inject the `browserUtils` prop into your component. The other option is to integrate into redux using the `BrowserUtils` component and `BrowserUtilsReducer`.

## Redux Integration
For those who love to keep the goods in [redux](https://github.com/reactjs/redux) feel free to follow the steps below

### Configure Store
```js
  // import the reducer
  import { BrowserUtilReducer } from 'react-browser-utils';

  // combine your reducer
  combineReducers({
    screen: BrowserUtilReducer
  })
```

### Configure App
This is your `index.js` or maybe `app.js` that is the root component of your application
```jsx
// Generic App component that creates the store and gives it to the Provider
import React, { Component } from 'react';
import BrowserUtils from 'react-browser-utils';
import { Provider } from 'react-redux';
import configureStore from '../your-store-configurer';

const store = configureStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserUtils>
          <App />
        </BrowserUtils>
      </Provider>
    )
  }
}

export default App;
```

### Example Component
Once plugged in you can create a redux `connected` component and pull the state from redux.
```jsx
// Connected Component that needs the "screen"
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  browserUtils: state.screen
});

const mapDispatch = dispatch => ({})

class ExamplePage extends Component {
  render () {
    const { browserUtils } = this.props;
    return (
      <div>
        <p>"Size" {browserUtils.size}</p>
        <p>Orientation {browserUtils.orientation}</p>
        <p>InnerWidth {browserUtils.width}</p>
        <p>InnerHeight {browserUtils.height}</p>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(ExamplePage)
```

## API

### `withBrowserUtils`
`withBrowserUtils` is a _higher order_ component function that will provide the `browserUtil` prop to the component passed in.

```jsx
// Generic App component that creates the store and gives it to the Provider
import React, { Component } from 'react';
import { withBrowserUtils } from 'react-browser-utils';
import configureStore from '../your-store-configurer';

const store = configureStore();

class Container extends Component {
  render () {
    return (
      <div>
        <p>Your screen size is: {this.props.browserUtils.size}</p>
      </div>
    );
  }
}

export default withBrowserUtils(Container);
```



## License

MIT © [Miguel Caballero](https://github.com/mcabs3)

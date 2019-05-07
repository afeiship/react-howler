# react-howler
> Howler for react.

## install:
```shell
npm install -S afeiship/react-howler
```

## usage:
1. import css
  ```scss
  @import "~react-howler/style.scss";

  // customize your styles:
  $react-howler-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactHowler from 'react-howler';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactHowler />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## docs:
- https://afeiship.github.io/react-howler/

## resouces:
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

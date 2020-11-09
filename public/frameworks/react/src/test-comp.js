'use strict';
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

const element = <Welcome name="Dude man" />;
ReactDOM.render(
    element,
    document.getElementById('react-comp')
);

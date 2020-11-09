'use strict';

function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'Hello, ',
        props.name
    );
}

var element = React.createElement(Welcome, { name: 'Dude man' });
ReactDOM.render(element, document.getElementById('react-comp'));
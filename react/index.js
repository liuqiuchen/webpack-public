const React = require('react');
const ReactDOM = require('react-dom');

import App from './app';

let Hello = React.createClass({
    render () {
        return (
            <div>
                <App />
            </div>
        );
    }
});

let div1 = document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(<Hello />, div1);

















import React from 'react';
import ReactDOM from 'react-dom';

import app from './app.js';
import Item from './item.jsx';

require('./css/index.css');
require('./css/base.css');

class Main extends React.Component {
    render () {

        let dataArr = this.props.dataArr;
        let content, footer;

        console.log(dataArr.length);

        if(dataArr.length !== 0) {
            // 显示中间部分和尾部
            content = <section className="main">
                        <input className="toggle-all" type="checkbox" defaultChecked="" />
                            <ul className="todo-list">
                                {
                                    // 改成当前组件的this
                                    dataArr.map(function (item, index) {
                                        return <Item key={index} {...item} />
                                    }.bind(this))
                                }
                            </ul>
                    </section>
            footer = <footer className="footer">
                        <span className="todo-count">
                            <strong>0</strong>
                            <span>条未选中</span>
                        </span>
                    </footer>
        } else {
            // 不显示中间部分和尾部
        }

        return (
            <div>
                <header className="header" >
                    <h1>todos</h1>
                    <input className="new-todo"
                           placeholder="请输入内容"
                           defaultValue=""
                           onKeyDown={this.downHandle}
                    />
                </header>
                { content }
                { footer }
            </div>
        );
    }

    downHandle(event) {
        // 当为enter键时
        if(event.keyCode === 13) {
            app.addItem(event.target.value);
            event.target.value = '';
        }
    }
}

let section = document.createElement('section');
section.className = 'todoapp';
document.body.appendChild(section);

function render (dataArr) {
    ReactDOM.render(<Main dataArr={dataArr} />, section);
}

render(app.dataArr);
app.render = render;




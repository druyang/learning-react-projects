'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Nested React Components 
var TaskApp = function (_React$Component) {
    _inherits(TaskApp, _React$Component);

    function TaskApp(props) {
        _classCallCheck(this, TaskApp);

        var _this = _possibleConstructorReturn(this, (TaskApp.__proto__ || Object.getPrototypeOf(TaskApp)).call(this, props));

        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);
        _this.handleAddTask = _this.handleAddTask.bind(_this);
        _this.handleRemoveTask = _this.handleRemoveTask.bind(_this);
        _this.state = {
            tasks: []
        };
        return _this;
    }

    _createClass(TaskApp, [{
        key: 'handleDeleteTasks',
        value: function handleDeleteTasks() {
            this.setState(function () {
                return {
                    tasks: []
                };
            });
        }
    }, {
        key: 'handleAddTask',
        value: function handleAddTask(task) {
            if (!task) {
                return 'Enter valid value';
            } else if (this.state.tasks.indexOf(task) > -1) {
                return 'Enter unique task';
            }
            this.setState(function (prevState) {
                return {
                    tasks: prevState.tasks.concat([task])
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randNum = Math.floor(Math.random() * this.state.tasks.length);
            alert(this.state.tasks[randNum]);
        }
    }, {
        key: 'handleRemoveTask',
        value: function handleRemoveTask(id) {
            this.setState(function (prevState) {
                return {
                    tasks: prevState.tasks.filter(function (task) {
                        return task !== id;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'To Do List:';
            var subtitle = 'Stop fucking procrastinating';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasTasks: this.state.tasks.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Tasks, {
                    tasks: this.state.tasks,
                    handleDeleteTasks: this.handleDeleteTasks,
                    handleRemoveTask: this.handleRemoveTask
                }),
                React.createElement(AddTask, {
                    handleAddTask: this.handleAddTask
                })
            );
        }
    }]);

    return TaskApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',

        // Must define this on react components: 
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.handlePick,
                        disabled: !this.props.hasTasks
                    },
                    ' What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// tasks


var Tasks = function (_React$Component4) {
    _inherits(Tasks, _React$Component4);

    function Tasks() {
        _classCallCheck(this, Tasks);

        return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
    }

    _createClass(Tasks, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteTasks },
                    'Remove All'
                ),
                React.createElement(
                    'ol',
                    null,
                    this.props.tasks.map(function (task) {
                        return React.createElement(Task, {
                            key: task,
                            taskText: task,
                            handleRemoveTask: _this5.props.handleRemoveTask
                        });
                    })
                )
            );
        }
    }]);

    return Tasks;
}(React.Component);

// Task  

var Task = function (_React$Component5) {
    _inherits(Task, _React$Component5);

    function Task() {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
    }

    _createClass(Task, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    null,
                    this.props.taskText,
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this7.props.handleRemoveTask(_this7.props.taskText);
                            } },
                        ' x '
                    )
                )
            );
        }
    }]);

    return Task;
}(React.Component);

// Text input and submit button 
// onSubmit 
// handleAddTask -> takes value type -> throws in array

// addtask 


var AddTask = function (_React$Component6) {
    _inherits(AddTask, _React$Component6);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        var _this8 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

        _this8.handleAddTask = _this8.handleAddTask.bind(_this8);
        _this8.state = {
            error: undefined
        };
        return _this8;
    }

    _createClass(AddTask, [{
        key: 'handleAddTask',
        value: function handleAddTask(e) {
            e.preventDefault();

            var task = e.target.elements.task.value.trim();
            var error = this.props.handleAddTask(task);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddTask },
                    React.createElement('input', { type: 'text', name: 'task' }),
                    React.createElement(
                        'button',
                        null,
                        'Add task'
                    )
                )
            );
        }
    }]);

    return AddTask;
}(React.Component);

ReactDOM.render(React.createElement(TaskApp, null), document.getElementById('app'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State(props) {
        _classCallCheck(this, State);

        var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, props));

        _this.thing = 'asdf';
        _this.state = { name: 'Gannon', date: '1991', list: ['red', 'turnip', 'snow', 'quantum entanglement'] };
        var defaultVal = JSON.stringify(_this.state);
        _this.update = _this.update.bind(_this);
        _this.textArea = React.createElement('textarea', { className: 'state-box', defaultValue: defaultVal, onChange: _this.update });
        return _this;
    }

    _createClass(State, [{
        key: 'update',
        value: function update(evt) {
            var state = {};
            try {
                var temp = JSON.parse(evt.target.value);
                if (temp && (typeof temp === 'undefined' ? 'undefined' : _typeof(temp)) === "object") state = temp;
            } catch (e) {
                state = this.state;
            }
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'state-demo', className: 'page-container' },
                React.createElement(
                    'h1',
                    null,
                    'State'
                ),
                React.createElement(
                    'p',
                    null,
                    'State allows you to tie data objects to the view. This stops the need for multiple updates to multiple elements when you change an object'
                ),
                React.createElement(
                    'p',
                    null,
                    'State is simply an object that react uses to build components, when the object changes the components are changed'
                ),
                React.createElement(
                    'p',
                    { className: 'state-p' },
                    'Here I have a json object that defines a name with a value of ',
                    React.createElement(
                        'a',
                        null,
                        this.state.name
                    ),
                    ', a date, in this case ',
                    React.createElement(
                        'a',
                        null,
                        this.state.date
                    ),
                    ' and a list with ',
                    React.createElement(
                        'a',
                        null,
                        this.state.list.length
                    ),
                    ' in it, feel free to change it, you will see it reflected in the various elements'
                ),
                this.textArea,
                React.createElement(
                    'h2',
                    null,
                    'Name:',
                    this.state.name
                ),
                React.createElement(
                    'h2',
                    null,
                    'Date:',
                    this.state.date
                ),
                React.createElement(
                    'ul',
                    null,
                    this.state.list.map(function (item, i) {
                        return React.createElement(
                            'li',
                            { key: i },
                            item
                        );
                    })
                )
            );
        }
    }]);

    return State;
}(React.Component);

export default State;
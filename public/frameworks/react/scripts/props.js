var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

////npx babel --watch src --out-dir scripts --presets react-app/prod
var propDemo = ['new thing', 'another thing', 'i am running out of things', 'im going to start numbering'];
var ind = 0;

var MainPage = function (_React$Component) {
    _inherits(MainPage, _React$Component);

    function MainPage(props) {
        _classCallCheck(this, MainPage);

        var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, props));

        _this.state = { list: [] };
        _this.add = _this.add.bind(_this);
        _this.index = 0;
        return _this;
    }

    _createClass(MainPage, [{
        key: 'add',
        value: function add() {
            ind++;
            this.setState({ list: [].concat(_toConsumableArray(this.state.list), [propDemo[ind] || ind]) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'page-container' },
                React.createElement(
                    'p',
                    null,
                    'props are fairly easy to understand. To add a prop simply add it like an attribute.'
                ),
                React.createElement(
                    'div',
                    { className: 'code' },
                    '\uFE64Mycomponent MyProp=\u2774\'my-prop-value\'\u2775\uFE65'
                ),
                React.createElement(
                    'p',
                    null,
                    'This prop can be simple things like strings, and numbers, or more advanced things like and functions'
                ),
                React.createElement(
                    'p',
                    null,
                    'Here is a the code for a component that takes a prop that is used to fill the h1 tag. when you click add it will make a new component'
                ),
                React.createElement(
                    'div',
                    { className: 'code' },
                    'class DemoComp extends Component{\n                    constructor(props){\n                        super(props)\n                    }\n                    return(){\n                        return <div>\n                            <h1>{this.props.MyProp}</h1>\n                        </div>\n                    }\n                }'
                ),
                React.createElement(
                    'button',
                    { onClick: this.add },
                    'Add new component'
                ),
                this.state.list.map(function (item) {
                    return React.createElement(DemoComp, { MyProp: item, key: _this2.index++ });
                })
            );
        }
    }]);

    return MainPage;
}(React.Component);

var DemoComp = function (_React$Component2) {
    _inherits(DemoComp, _React$Component2);

    function DemoComp(props) {
        _classCallCheck(this, DemoComp);

        return _possibleConstructorReturn(this, (DemoComp.__proto__ || Object.getPrototypeOf(DemoComp)).call(this, props));
    }

    _createClass(DemoComp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.MyProp
                )
            );
        }
    }]);

    return DemoComp;
}(React.Component);

export default MainPage;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Components = function (_React$Component) {
    _inherits(Components, _React$Component);

    function Components(props) {
        _classCallCheck(this, Components);

        return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).call(this, props));
    }

    _createClass(Components, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'components', className: 'page-container' },
                React.createElement(
                    'h3',
                    { className: 'title' },
                    'Components'
                ),
                React.createElement(
                    'p',
                    null,
                    'Components are the base unit of a react application'
                ),
                React.createElement(
                    'p',
                    null,
                    'Components are a set of code that creates an element. This creates reusable building blocks that react can make web pages from'
                ),
                React.createElement(
                    'p',
                    null,
                    'the syntax looks similar to html, using "\uFE64/\uFE65"'
                ),
                React.createElement(
                    'p',
                    null,
                    'You can simply write html and then return it to create a component example:'
                ),
                React.createElement(
                    'div',
                    { className: 'code' },
                    'function Welcome(props) \u2774 return \uFE64h1\uFE65Hello, \u2774props.name\u2775\uFE64/h1\uFE65; \u2775'
                )
            );
        }
    }]);

    return Components;
}(React.Component);

export default Components;
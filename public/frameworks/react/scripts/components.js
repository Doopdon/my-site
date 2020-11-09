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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Components are the easiest to understand"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Components are classes or functions that return a react element "
                ),
                React.createElement(
                    "h2",
                    null,
                    "the syntax looks like html, using \"\uFE64/\uFE65\" (By the way these are unicode characters \"\uFE64/\uFE65\" so I do not get compile errors)"
                ),
                React.createElement(
                    "h2",
                    null,
                    "You can simply write html and then return it to create a component example:"
                ),
                React.createElement(
                    "p",
                    null,
                    "function Welcome(props) \u2774 return \uFE64h1\uFE65Hello, \u2774props.name\u2775\uFE64/h1\uFE65; \u2775"
                )
            );
        }
    }]);

    return Components;
}(React.Component);
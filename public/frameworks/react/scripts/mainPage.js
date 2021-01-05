var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_React$Component) {
    _inherits(MainPage, _React$Component);

    function MainPage(props) {
        _classCallCheck(this, MainPage);

        var _this = _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this, props));

        _this.sectionNames = ['components', 'state', 'props'];
        return _this;
    }

    _createClass(MainPage, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { id: 'main-page', className: 'page-container' },
                React.createElement(
                    'p',
                    { className: 'description' },
                    'This is a simple react single page app demo. It contains demonstrations of:'
                ),
                React.createElement(
                    'div',
                    { className: 'link-buttons' },
                    this.sectionNames.map(function (name, i) {
                        return React.createElement(
                            'div',
                            { key: i, className: 'link button', onClick: function onClick() {
                                    return _this2.props.goTo(name);
                                } },
                            name
                        );
                    })
                )
            );
        }
    }]);

    return MainPage;
}(React.Component);

export default MainPage;
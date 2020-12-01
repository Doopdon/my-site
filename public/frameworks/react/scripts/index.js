'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Components from './components.js';
import MainPage from './mainPage.js';
import State from './state.js';
import Props from './props.js';

var pages = ['main', 'components', 'state', 'props'];
var pageIndex = 0;

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.state = { page: pages[pageIndex] };
        _this.next = _this.next.bind(_this);
        _this.prev = _this.prev.bind(_this);
        _this.goTo = _this.goTo.bind(_this);
        return _this;
    }

    _createClass(Index, [{
        key: 'next',
        value: function next() {
            if (!pages[1 + pageIndex]) return;
            this.setState({ page: pages[++pageIndex] });
        }
    }, {
        key: 'prev',
        value: function prev() {
            if (!pageIndex) return;
            this.setState({ page: pages[--pageIndex] });
        }
    }, {
        key: 'setPage',
        value: function setPage(page) {
            if (page == 'main') return React.createElement(MainPage, { goTo: this.goTo });
            if (page == 'components') return React.createElement(Components, null);
            if (page == 'state') return React.createElement(State, null);
            if (page == 'props') return React.createElement(Props, null);
        }
    }, {
        key: 'goTo',
        value: function goTo(name) {
            pageIndex = pages.findIndex(function (x) {
                return x == name;
            }) || 0;
            this.setState({ page: pages[pageIndex] });
        }
    }, {
        key: 'prevButton',
        value: function prevButton() {
            var greyOut = pageIndex == 0 ? '' : 'grey-out';
            return React.createElement(
                'button',
                { className: 'prev button ' + greyOut, onClick: this.prev },
                'Previous page'
            );
        }
    }, {
        key: 'nextButton',
        value: function nextButton() {
            var greyOut = pageIndex == pages.length - 1 ? '' : 'grey-out';
            return React.createElement(
                'button',
                { className: 'next button ' + greyOut, onClick: this.next },
                'Next page'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'nav' },
                    this.prevButton(),
                    this.nextButton()
                ),
                this.setPage(this.state.page)
            );
        }
    }]);

    return Index;
}(React.Component);

ReactDOM.render(React.createElement(Index, null), document.getElementById('react-comp'));
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=(r=a)&&r.__esModule?r:{default:r},i=n(18),u=n(2);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.openMenu=n.openMenu.bind(n),n.renderToolbar=n.renderToolbar.bind(n),n.hide=n.hide.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openMenu",value:function(){this.setState({isOpen:!0})}},{key:"hide",value:function(){this.setState({isOpen:!1})}},{key:"alertPopup",value:function(){u.notification.alert("This is an Onsen UI alert notification test.")}},{key:"renderToolbar",value:function(){return l.default.createElement(i.Toolbar,null,l.default.createElement("div",{className:"left"},l.default.createElement(i.ToolbarButton,{onClick:this.openMenu},l.default.createElement(i.Icon,{size:{default:30,material:40},icon:{default:"ion-navicon",material:"md-menu"}}))),l.default.createElement("div",{className:"center",style:{background:"green"}},"Ticket Registration"))}},{key:"render",value:function(){var e=this;return l.default.createElement(i.Splitter,null,l.default.createElement(i.SplitterSide,{side:"left",width:200,swipeable:!0,collapse:!0,isOpen:this.state.isOpen},l.default.createElement(i.Page,null,l.default.createElement(i.List,{dataSource:["Home","Login","Travel History","Logout","Settings","Feedback"],renderRow:function(t){return l.default.createElement(i.ListItem,{key:t,onClick:e.hide,tappable:!0},t)}}))),l.default.createElement(i.SplitterContent,null,l.default.createElement(i.Page,{renderToolbar:this.renderToolbar},l.default.createElement("section",{style:{margin:"16px"}},l.default.createElement("p",null,"Swipe to open the menu")))))}}]),t}(l.default.Component);t.default=c},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n(9);var r=n(11),o=u(n(0)),a=u(n(1)),l=u(n(2)),i=u(n(17));function u(e){return e&&e.__esModule?e:{default:e}}n(22),n(23),l.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var c=document.getElementById("app");a.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(i.default,null)),c)}},[[7,1,2]]]);
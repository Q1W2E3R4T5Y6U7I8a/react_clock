(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),a=n(4),i=n(5),l=n(7),s=n(6),r=n(1),m=(n(12),n(0));var u=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).timerId=void 0,e.state={hasClock:!0,clockName:"Clock-0",currentTime:(new Date).toLocaleTimeString()},e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}(),n=(new Date).toLocaleTimeString();console.info("The time is ".concat(t)),e.state.hasClock&&console.info("some message"),e.setState({clockName:t,currentTime:n})}),3e3)}},{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var e=this,t=this.state,n=t.hasClock,c=t.clockName,o=t.currentTime;return Object(m.jsxs)("div",{className:"App",role:"button",tabIndex:0,onContextMenu:this.handleContextMenu,onClick:this.handleClick,onKeyDown:function(t){"Enter"===t.key&&e.handleClick()},children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:c})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:o})]})]})}}]),n}(r.Component);o.a.render(Object(m.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.83b82194.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(n,e,t){n.exports=t(55)},55:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(5),i=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(24),c=t(6),l=t(7),d=t(9),u=t(8),m=t(10),f=t(2),h=t(1),p={colors:{primary:"#fff",orange:"#FFA611",blue:"#059BE5",darkBackground:"#222",dark:"#000",silver:"#D3D3D3"},mixins:{absolutePosition:function(n,e){return{position:"absolute",top:"".concat(n,"% "),left:"".concat(e,"% ")}},relativePosition:function(n,e){return{position:"relative",top:"".concat(n,"% "),left:"".concat(e,"% ")}}}};function g(){var n=Object(f.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        overflow: hidden;\n        font-family: 'Montserrat', sans-serif;\n    }\n    :root{\n        font-size: 10px;\n    }\n    button{\n        cursor: pointer;\n        border: none;\n        letter-spacing: 1px;\n    }\n\n"]);return g=function(){return n},n}var b=Object(h.b)(g()),v=function(n){return a.a.createElement(h.a,{theme:p},a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),n.children))};function x(){var n=Object(f.a)(["\n    flex-basis: 50px;\n    padding: 0 15px;\n    opacity: ",";\n    transition: opacity .4s;\n    border-radius: 100px;\n    font-size: 2rem;\n    background-color: ",";\n    color: ",";\n    transition: .4s;\n    @media (orientation: landscape) {\n        font-size: 1.4rem;\n        flex-basis: 30px;\n        @media(min-width: 700px){\n            font-size: 3.5rem;\n            flex-basis: 80px;\n            padding: 20px;\n        }\n    }\n        \n:hover{\n    color : ",";\n    background-color: ",";\n}\n"]);return x=function(){return n},n}var w=h.c.button(x(),function(n){return n.isGameReady?"1":".1"},function(n){return n.theme.colors.blue},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.blue},function(n){return n.theme.colors.primary}),y=function(n){var e=n.isGameReady,t=n.startGame;return a.a.createElement(w,{disabled:!e,isGameReady:e,onClick:t},n.children)};function E(){var n=Object(f.a)(["\n    width: 80%;\n    flex-basis: 60%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    text-align: justify;\n    letter-spacing: 1px;\n    font-size: 1.4rem;\n    @media (min-width: 700px){\n        font-size: 1.8rem;\n    }\n   & h1{\n        text-align: center;\n        color: ","\n    }\n   & p{\n        margin-top: 5%;\n        color: ",";\n        line-height: 140%;\n    }\n    @media(min-width: 490px){\n        width: 60%;\n        p{\n            line-height: 160%;\n        }\n    }\n    @media (min-width: 800px){\n        width: 50%;\n        p{\n            line-height: 180%;\n        }\n    }\n    @media(min-width: 1200px){\n        width: 30%;\n        p{\n            line-height: 200%;\n        }\n    }\n"]);return E=function(){return n},n}var G=h.c.div(E(),function(n){return n.theme.colors.orange},function(n){return n.theme.colors.primary}),k=function(){return a.a.createElement(G,null,a.a.createElement("h1",null,"Memory Game!"),a.a.createElement("p",null,"The game is simple - you have 9 pairs of colors to find as fast as you can. You will have 1 second to remember colors position. Start the game and let the timer begin! Compare your result with others!"))};function S(){var n=Object(f.a)(["\n    ","\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;;\n    align-items: center;\n    transform:",";\n    transition:  transform .4s;\n    background-color: ",";\n   \n"]);return S=function(){return n},n}var R=h.c.div(S(),function(n){return n.theme.mixins.absolutePosition(0,0)},function(n){return!n.isStartGameWindowActive&&"translateX(-100%)"},function(n){return n.theme.colors.darkBackground}),j=function(n){var e=n.startGame,t=n.time,r=n.isGameReady,o=n.isStartGameWindowActive;return a.a.createElement(R,{isStartGameWindowActive:o},a.a.createElement(k,null),a.a.createElement(y,{isGameReady:r,startGame:e,time:t},"Start Game"))};function B(){var n=Object(f.a)(["\n    flex-basis: 15%;\n    flex-grow: 1;\n    height: 33.33vh;\n    box-shadow: 0 0 1px 1px ",";\n    cursor: pointer;\n    @media(orientation: portrait){\n            height: 16.66vh;\n            flex-basis: 33.30%;\n    }\n"]);return B=function(){return n},n}var O=h.c.div(B(),function(n){return n.theme.colors.silver}),z=function(n){var e=n.isDone,t=n.boardColor,r=n.clickBoard,o={backgroundColor:e?t:"#484848"};return a.a.createElement(O,{style:o,onClick:r})};function D(){var n=Object(f.a)(["\n    height: 100vh;\n    display: flex;\n    flex-flow: row wrap;\n"]);return D=function(){return n},n}var A=h.c.div(D()),H=function(n){var e=n.renderedBoards.map(function(e){return a.a.createElement(z,{key:e.id,boardColor:e.color,isDone:e.isDone,clickBoard:function(t){return n.clickBoard(t,e.id)}})});return a.a.createElement(A,null,e)},C=t(4),P=t.n(C);function W(){var n=Object(f.a)(["\n    flex-basis: 15%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n    font-size: 2rem;\n    transform: ",";\n    transition: transform .4s, flex-basis 2s .4s;\n    color:  ",";\n    @media (orientation: landscape){\n        font-size: 1.2rem;\n        @media(min-width: 700px){\n            font-size: 2rem;\n        }\n    }\n    span{\n        display: block;\n        color:  ",";\n    }\n"]);return W=function(){return n},n}var T=h.c.h2(W(),function(n){return n.isSended&&"translateX(-110%)"},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.orange}),Y=function(n){var e=n.isSended,t=n.time;return a.a.createElement(T,{isSended:e},"Well done! Your time is: ",a.a.createElement("span",null,t," seconds!"))};function I(){var n=Object(f.a)(["\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    transform: ",";\n    transition: .3s;\n    font-size: 1.5rem;\n    @media (orientation:landscape){\n        font-size: 1.2rem;\n        @media(min-width: 700px){\n            font-size: 2rem;\n        }\n    }\n    & label{\n        color: ","\n    }\n    & input{\n        flex-basis: 15%;\n        width: 70%;\n        max-width: 250px;\n        min-height: 30px;\n        text-align: center;\n    }\n\n    & button{\n        font-weight: 700;\n        background-color: ",";;\n        padding: 10px;\n        border-radius: 50px;\n        @media (orientation: landscape){\n        font-size: 1rem;\n            @media(min-width: 700px){\n                font-size: 2rem;\n                padding: 15px 10px;\n            }\n        }\n    }\n"]);return I=function(){return n},n}var M=h.c.form(I(),function(n){return n.isSended?"translateX(100%)":"translateX(0)"},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.orange}),F=function(n){var e=n.fetchedResults,t=n.postAndGetResults,r=n.isSended,o=n.name,i=n.changeName;return a.a.createElement(M,{fetchedResults:e,onSubmit:t,isSended:r},a.a.createElement("label",{htmlFor:"name"},"Enter your name "),a.a.createElement("input",{placeholder:"Your name here",type:"text",id:"name",value:o,onChange:i}),a.a.createElement("button",{disabled:!!r},"Send your result!"))},N=function(n){var e=n.time,t=n.name;return a.a.createElement("tr",null,a.a.createElement("td",null,t),a.a.createElement("td",null,e))};function X(){var n=Object(f.a)(["\n    font-size: 1.5rem;\n    width: 70%;\n    margin: 0 auto;\n    flex-basis: 80%;\n    background-color: ",";\n    color: ",";\n\n    @media(orientation:landscape){\n        font-size: 1rem;\n        @media(min-width: 700px){\n            font-size: 2rem;\n        }\n    }\n    th{\n        color: ",";\n        padding: .5rem;\n        background-color: ",";\n    }\n\n    tr{\n\n        background-color: ",";\n    }\n    td{\n        color: ",";\n    }\n"]);return X=function(){return n},n}function J(){var n=Object(f.a)(["\n    height: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\nh3{\n    flex-basis: 15%;\n    text-align: center;\n    color: ",";\n    font-size: 1.7rem;\n    @media (orientation: landscape){\n        font-size: 1.2rem;\n        @media (min-width: 700px){\n            font-size: 2rem;\n        }\n    }\n}\n\n"]);return J=function(){return n},n}var U=h.c.div(J(),function(n){return n.theme.colors.primary}),q=h.c.table(X(),function(n){return n.theme.colors.orange},function(n){return n.theme.colors.orange},function(n){return n.theme.colors.dark},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.blue},function(n){return n.theme.colors.dark}),$=function(n){var e=n.fetchedResults.map(function(n,e){return a.a.createElement(N,{time:n.time,name:n.name,key:e})});return a.a.createElement(U,null,a.a.createElement("h3",null,"Top 8 best results"),a.a.createElement(q,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Time"))),a.a.createElement("tbody",null,e)))};function K(){var n=Object(f.a)(["\n    width: 90%;\n    flex-basis: 15%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    margin-bottom: ",";\n    transition: margin-bottom .4s;\n    font-size: 1.5rem;\n    @media (orientation: landscape){\n        font-size: 1.2rem;\n        @media(min-width: 700px){\n            font-size: 2rem;\n        }\n    }\n    span,h3{\n        margin: auto; \n\n    }\n    h3{\n        color: ",";\n        font-size: 1em;\n    }\n    span{\n        display: block;\n        text-align: center;\n        font-size: 1.2em;\n        transition: transform .4s;\n        color: ",";\n    }\n"]);return K=function(){return n},n}var L=h.c.div(K(),function(n){return n.isSended?"2rem":"0"},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.orange}),Q=function(n){var e=n.playerPosition,t=n.isSended,r="Send your result to find out!";return 1===e?r="Wooohoo! You're the best here!":e>1&&e<5?r="Good job!":e>=5&&e<=10?r="You have your name on the board! It's quite good, isn't it?":e>10&&(r="Man...Stop afking, start playing."),a.a.createElement(L,{isSended:t},a.a.createElement("h3",null,"Your position: ",e),a.a.createElement("span",null,r))};function V(){var n=Object(f.a)(["\n\n\n:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  width: 60px;\n  top: calc(50% - 30px);\n  left: calc(50% - 30px);\n  height: 60px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-top-color: #333;\n  animation: spinner .6s linear infinite;\n}\n\n@keyframes spinner {\n  to {transform: rotate(360deg)}\n}\n \n\n"]);return V=function(){return n},n}var Z=h.c.div(V()),_=function(n){return a.a.createElement(Z,null)};function nn(){var n=Object(f.a)(["\n    flex-basis: ",";\n    transform: ",";\n    width: 90%;\n    transition: .5s .5s;\n    background-color: ",";\n    box-shadow: 0 0 25px 0 ",";\n    border-radius: 2rem;\n    text-align: center;\n    position: relative;\n    top: 0;\n    left: 0;\n    @media (orientation: landscape){\n        width: 70%;\n    }\n    @media(min-width: 600px){\n        width: 80%;\n    }\n    @media(min-width: 800px){\n        width: 70%;\n    }\n    @media(min-width: 1000px){\n        width: 60%;\n    }\n    @media(min-width: 1200px){\n        width: 50%;\n    }\n"]);return nn=function(){return n},n}function en(){var n=Object(f.a)(["\n    ","\n    height: 100%;\n    width: 100%; \n    padding: 10px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    transform:  ",";\n    transition: transform .5s;\n    background-color: ",";\n    color: ",";\n"]);return en=function(){return n},n}var tn=h.c.div(en(),function(n){return n.theme.mixins.absolutePosition(0,0)},function(n){var e=n.isGameRunning,t=n.time;return!e&&t>0?"translateY(0)":"translateY(-100%)"},function(n){return n.theme.colors.darkBackground},function(n){return n.theme.colors.primary}),rn=h.c.div(nn(),function(n){return n.isSended?"60%":"45%"},function(n){return n.isSended?"translateY(-10%)":"0"},function(n){return n.theme.colors.darkBackground},function(n){return n.theme.colors.orange}),an="https://colors-results.firebaseio.com/.json",on=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(n=Object(u.a)(e)).call.apply(n,[this].concat(a)))).state={name:"",fetchedResults:[],isSended:!1,playerPosition:""},t.changeNameHandler=function(n){n.preventDefault(),t.setState({name:n.target.value})},t.postAndGetResultsHandler=function(n){n.preventDefault();var e=t.state.name,r={name:e,time:t.props.time};e?(t.setState({isSended:!0}),P.a.post(an,r).then(function(n){P.a.get(an).then(function(n){var e=Object.values(n.data),r=[];e.map(function(n){return r.push(n.time)});var a=1+r.sort(function(n,e){return n-e}).findIndex(function(n){return n===t.props.time});e.sort(function(n,e){var t=n.time,r=e.time,a=0;return t>r?a=1:t<r&&(a=-1),a}),e=e.splice(0,8),t.setState({fetchedResults:e,playerPosition:a})})})):alert("Enter your name!")},t}return Object(m.a)(e,n),Object(l.a)(e,[{key:"componentDidUpdate",value:function(n,e){var t=this;e.fetchedResults.length>0&&this.props.isGameRunning&&setTimeout(function(){t.setState({fetchedResults:[],isSended:!1,playerPosition:"",name:""})},1e3)}},{key:"render",value:function(){var n=this.state,e=n.name,t=n.isSended,r=n.fetchedResults,o=n.playerPosition,i=this.props,s=i.time,c=i.isGameRunning;return a.a.createElement(tn,{isGameRunning:c,time:s},a.a.createElement(Y,{isSended:t,time:s}),a.a.createElement(rn,{isSended:t},r.length>0&&a.a.createElement($,{fetchedResults:r,isSended:t}),a.a.createElement(F,{isSended:t,fetchedResults:r,postAndGetResults:this.postAndGetResultsHandler,name:e,changeName:this.changeNameHandler}),0===r.length&&t&&a.a.createElement(_,null)),a.a.createElement(Q,{isSended:t,playerPosition:o}),a.a.createElement(y,{isGameReady:this.props.isGameReady,startGame:this.props.startGame,fetchedResults:r},"Play Again!"))}}]),e}(r.Component),sn=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(n=Object(u.a)(e)).call.apply(n,[this].concat(a)))).state={allColors:[],renderedBoards:[],isGameReady:!1,isGameRunning:!1,clickedBoards:[],wait:!1,time:0,boardsDone:[],isStartGameWindowActive:!0},t.createRenderedBoardsHandler=function(){for(var n=Object(s.a)(t.state.allColors),e=[],r=0;r<t.state.allColors.length;r++){var a=Math.floor(Math.random()*n.length);e.push(n[a]),n.splice(a,1)}for(var o=t.state.renderedBoards,i=e.splice(0,9),c=i.concat(i),l=0;l<18;l++){var d=Math.floor(Math.random()*c.length);o[l]={id:l,color:c[d],isDone:!0},c.splice(d,1)}t.setState({renderedBoards:o,isGameReady:!0})},t.startGameHandler=function(){t.showBoardsForASecondHandler(),t.countTimeHandler(),t.setState({isGameRunning:!0,isStartGameWindowActive:!1,isGameReady:!1})},t.showBoardsForASecondHandler=function(){var n=t.state.renderedBoards;setTimeout(function(){n.forEach(function(n){return n.isDone=!1}),t.setState({renderedBoards:n})},1400)},t.countTimeHandler=function(){var n=0;t.timeID=setInterval(function(){n++,t.setState({time:n})},1e3)},t.clickOnBoardHandler=function(n,e){var r=t.state,a=r.renderedBoards,o=r.clickedBoards,i=a.findIndex(function(n){return n.id===e});a[i].isDone||t.state.wait||(a[i].isDone=!0,o.push(a[i]),t.setState({renderedBoards:a,clickedBoards:o}))},t}return Object(m.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=this.state.allColors;P.a.get("https://colors-a5386.firebaseio.com/.json").then(function(t){e=t.data,n.setState({allColors:e,isGameReady:!0}),n.createRenderedBoardsHandler()})}},{key:"componentDidUpdate",value:function(n,e){var t=this,r=this.state,a=r.clickedBoards,o=r.renderedBoards,i=r.boardsDone,s=r.isGameRunning;18===i.length&&!0===e.isGameRunning&&(clearInterval(this.timeID),this.setState({isGameReady:!1,isGameRunning:!1,boardsDone:[]}),e.isGameReady||setTimeout(function(){t.createRenderedBoardsHandler()},2e3)),s&&2===this.state.clickedBoards.length&&(a[0].color!==a[1].color?(this.setState({wait:!0}),setTimeout(function(){o[a[0].id].isDone=!1,o[a[1].id].isDone=!1,t.setState({renderedBoards:o,wait:!1})},350)):(i.push(a[0].id),i.push(a[1].id)),this.setState({clickedBoards:[],boardsDone:i}))}},{key:"render",value:function(){var n=this.state,e=n.renderedBoards,t=n.time,r=n.isGameRunning,o=n.isGameReady,i=n.isStartGameWindowActive;return a.a.createElement(v,null,a.a.createElement(j,{isGameRunning:r,startGame:this.startGameHandler,time:t,isGameReady:o,isStartGameWindowActive:i}),a.a.createElement(H,{clickBoard:this.clickOnBoardHandler,renderedBoards:e,giveColors:this.giveRandomColorsHandler}),a.a.createElement(on,{isGameReady:o,isGameRunning:r,time:t,startGame:this.startGameHandler}))}}]),e}(r.Component);i.a.render(a.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.11fb9b9c.chunk.js.map
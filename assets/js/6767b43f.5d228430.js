(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(100)),i={},c={unversionedId:"contracts/withdrawals-manager-stub",id:"contracts/withdrawals-manager-stub",isDocsHomePage:!1,title:"WithdrawalsManagerStub",description:"- Source Code",source:"@site/docs/contracts/withdrawals-manager-stub.md",sourceDirName:"contracts",slug:"/contracts/withdrawals-manager-stub",permalink:"/contracts/withdrawals-manager-stub",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/withdrawals-manager-stub.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NodeOperatorsRegistry",permalink:"/contracts/node-operators-registry"},next:{title:"wstETH",permalink:"/contracts/wsteth"}},l=[],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/lidofinance/withdrawals-manager-stub/blob/main/contracts/WithdrawalsManagerStub.sol"},"Source Code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://etherscan.io/address/0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f"},"Deployed Contract"))),Object(o.b)("p",null,"Though the Beacon chain already supports setting withdrawal credentials pointing to a smart contract,\nthe withdrawals specification is not yet final and might change before withdrawals are enabled in the Merge network.\nThis means that Lido cannot deploy the final implementation of the withdrawals manager contract yet.\nAt the same time, it's desirable to have withdrawal credentials pointing to a smart contract since this would\navoid the need to migrate a lot of validators to new withdrawal credentials once withdrawals are enabled."),Object(o.b)("p",null,"To solve this, Lido uses a DAO-controlled upgradeable proxy, WithdrawalsManagerProxy.\nInitially, the proxy uses a stub implementation contract, WithdrawalsManagerStub, that cannot receive Ether.\nThe implementation can only be changed by LDO holders collectively by performing a DAO vote.\nLido DAO will vote for setting validator withdrawal credentials pointing to this proxy contract."),Object(o.b)("p",null,"When Ethereum 2.0 withdrawals specification is finalized, Lido DAO will prepare the new implementation\ncontract and initiate a vote among LDO holders for upgrading this proxy to the new implementation."),Object(o.b)("p",null,"Once withdrawals are enabled in Ethereum 2.0, Lido DAO members will start a vote among LDO holders for\ndisabling the upgradeability forever and locking the implementation by changing proxy admin from the DAO Voting contract\nto a zero address (which is an irreversible action)."))}d.isMDXComponent=!0}}]);
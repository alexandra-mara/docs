(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(92)),o={},c={unversionedId:"contracts/stable-swap-state-oracle",id:"contracts/stable-swap-state-oracle",isDocsHomePage:!1,title:"StableSwapStateOracle",description:"- Source Code",source:"@site/docs/contracts/stable-swap-state-oracle.md",sourceDirName:"contracts",slug:"/contracts/stable-swap-state-oracle",permalink:"/contracts/stable-swap-state-oracle",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/stable-swap-state-oracle.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"LidoOracle",permalink:"/contracts/lido-oracle"},next:{title:"StEthPriceFeed",permalink:"/contracts/steth-price-feed"}},b=[{value:"Mechanics",id:"mechanics",children:[]},{value:"View Methods",id:"view-methods",children:[{value:"getState()",id:"getstate",children:[]},{value:"getProofParams()",id:"getproofparams",children:[]}]},{value:"Methods",id:"methods",children:[{value:"setAdmin()",id:"setadmin",children:[]},{value:"setPriceUpdateThreshold()",id:"setpriceupdatethreshold",children:[]},{value:"submitState()",id:"submitstate",children:[]}]}],i={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/lidofinance/curve-merkle-oracle/blob/main/contracts/StableSwapStateOracle.sol"},"Source Code")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://etherscan.io/address/0x3a6bd15abf19581e411621d669b6a2bbe741ffd6"},"Deployed Contract"))),Object(l.b)("p",null,"A trustless oracle for the ETH/stETH Curve pool using Merkle Patricia proofs of Ethereum state."),Object(l.b)("p",null,"Contract receives and verifies the report from the offchain code,\nand persists the verified state along with its timestamp."),Object(l.b)("p",null,"The oracle assumes that the pool's ",Object(l.b)("inlineCode",{parentName:"p"},"fee")," and ",Object(l.b)("inlineCode",{parentName:"p"},"A")," (amplification coefficient) values don't\nchange between the time of proof generation and submission."),Object(l.b)("h2",{id:"mechanics"},"Mechanics"),Object(l.b)("p",null,"The oracle works by verifying Merkle Patricia proofs of the following Ethereum state:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Curve stETH/ETH pool contract account and the following slots from its storage trie:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"admin_balances[0]")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"admin_balances[1]")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"stETH contract account and the following slots from its storage trie:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"shares[0xDC24316b9AE028F1497c275EB9192a3Ea0f67022]")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.StETH.totalShares")')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.beaconBalance")')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.bufferedEther")')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.depositedValidators")')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.beaconValidators")'))))),Object(l.b)("h2",{id:"view-methods"},"View Methods"),Object(l.b)("h3",{id:"getstate"},"getState()"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sol"},"function getState() external view returns (\n  uint256 _timestamp,\n  uint256 _etherBalance,\n  uint256 _stethBalance,\n  uint256 _stethPrice\n)\n")),Object(l.b)("p",null,"Returns current state of oracle"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Return Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_timestamp")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uint256")),Object(l.b)("td",{parentName:"tr",align:null},"The timestamp of the proven pool state/price")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_etherBalance")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uint256")),Object(l.b)("td",{parentName:"tr",align:null},"The proven ETH balance of the pool")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_stethBalance")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uint256")),Object(l.b)("td",{parentName:"tr",align:null},"The proven stETH balance of the pool")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_stethPrice")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uint256")),Object(l.b)("td",{parentName:"tr",align:null},"The proven stETH/ETH price in the pool")))),Object(l.b)("h3",{id:"getproofparams"},"getProofParams()"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sol"},"function getProofParams() external view returns (\n  address poolAddress,\n  address stethAddress,\n  bytes32 poolAdminEtherBalancePos,\n  bytes32 poolAdminCoinBalancePos,\n  bytes32 stethPoolSharesPos,\n  bytes32 stethTotalSharesPos,\n  bytes32 stethBeaconBalancePos,\n  bytes32 stethBufferedEtherPos,\n  bytes32 stethDepositedValidatorsPos,\n  bytes32 stethBeaconValidatorsPos,\n  uint256 advisedPriceUpdateThreshold\n)\n")),Object(l.b)("p",null,"Returns values of proof params"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"setadmin"},"setAdmin()"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sol"},"function setAdmin(address _admin) external\n")),Object(l.b)("p",null,"Passes the right to set the suggested price update threshold to a new address."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_admin")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"address")),Object(l.b)("td",{parentName:"tr",align:null},"New admin address")))),Object(l.b)("h3",{id:"setpriceupdatethreshold"},"setPriceUpdateThreshold()"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sol"},"function setPriceUpdateThreshold(uint256 _priceUpdateThreshold) external\n")),Object(l.b)("p",null,"Sets the suggested price update threshold."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_priceUpdateThreshold")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"uint256")),Object(l.b)("td",{parentName:"tr",align:null},"The suggested price update threshold. Expressed in basis points, 10000 BP corresponding to 100%.")))),Object(l.b)("h3",{id:"submitstate"},"submitState()"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sol"},"function submitState(\n  bytes memory _blockHeaderRlpBytes,\n  bytes memory _proofRlpBytes\n) external\n")),Object(l.b)("p",null,"Used by the offchain clients to submit the proof"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Reverts unless:"),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"the block the submitted data corresponds to is in the chain;"),Object(l.b)("li",{parentName:"ul"},"the block is at least ",Object(l.b)("inlineCode",{parentName:"li"},"MIN_BLOCK_DELAY")," blocks old"),Object(l.b)("li",{parentName:"ul"},"all submitted proofs are valid")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter Name"),Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_blockHeaderRlpBytes")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"bytes")),Object(l.b)("td",{parentName:"tr",align:null},"RLP-encoded block header")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"_proofRlpBytes")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"bytes")),Object(l.b)("td",{parentName:"tr",align:null},"RLP-encoded list of Merkle Patricia proofs.")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"_proofRlpBytes")," contains next encoded variables in exact order:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"proof of the Curve pool contract account;"),Object(l.b)("li",{parentName:"ol"},"proof of the stETH contract account;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},"admin_balances[0]")," slot of the Curve pool contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},"admin_balances[1]")," slot of the Curve pool contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},"shares[0xDC24316b9AE028F1497c275EB9192a3Ea0f67022]")," slot of stETH contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.StETH.totalShares")')," slot of stETH contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.beaconBalance")')," slot of stETH contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.bufferedEther")')," slot of stETH contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.depositedValidators")')," slot of stETH contract;"),Object(l.b)("li",{parentName:"ol"},"proof of the ",Object(l.b)("inlineCode",{parentName:"li"},'keccak256("lido.Lido.beaconValidators")')," slot of stETH contract.")))}s.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.a.createElement(u,c(c({ref:t},i),{},{components:a})):r.a.createElement(u,c({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
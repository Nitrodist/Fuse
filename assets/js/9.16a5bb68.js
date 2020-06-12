(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-fuse-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-fuse-js"}},[t._v("#")]),t._v(" What is Fuse.js?")]),t._v(" "),a("social-share",{attrs:{networks:["twitter","reddit","linkedin","email"]}}),t._v(" "),a("p",[t._v("Fuse.js is a "),a("strong",[t._v("powerful, lightweight fuzzy-search library, with zero dependencies")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"what-is-fuzzy-searching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-fuzzy-searching"}},[t._v("#")]),t._v(" What is fuzzy searching?")]),t._v(" "),a("p",[t._v("Generally speaking, fuzzy searching (more formally known as "),a("em",[t._v("approximate string matching")]),t._v(") is the technique of finding strings that are "),a("em",[t._v("approximately")]),t._v(" equal to a given pattern (rather than "),a("em",[t._v("exactly")]),t._v(").")]),t._v(" "),a("h3",{attrs:{id:"why-should-i-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-use-it"}},[t._v("#")]),t._v(" Why should I use it?")]),t._v(" "),a("ul",[a("li",[t._v("With Fuse.js, you don’t need to setup a dedicated backend just to handle search.")]),t._v(" "),a("li",[t._v("Simplicity and performance were the main criteria when developing this library.")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("As easy as 1, 2, 3")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. List of items to search in")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" books "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Old Man\'s War"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      firstName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lastName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Scalzi'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Lock Artist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      firstName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Steve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lastName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hamilton'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Set up the Fuse instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fuse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fuse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("books"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'author.firstName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. Now search!")]),t._v("\nfuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     item: {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//       title: "Old Man\'s War",')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       author: {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         firstName: 'John',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         lastName: 'Scalzi'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     },")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     refIndex: 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"when-should-i-use-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-should-i-use-it"}},[t._v("#")]),t._v(" When should I use It?")]),t._v(" "),a("p",[t._v("It might not make sense for every situation, but can be ideal depending on your search requirements. For example:")]),t._v(" "),a("ul",[a("li",[t._v("When you want client-side fuzzy searching of small to moderately large data sets.")]),t._v(" "),a("li",[t._v("When you can't justify setting up a dedicated backend simply to handle search. ElasticSearch or Algolia, although both great services, may be overkill for your particular use cases.")])]),t._v(" "),a("h3",{attrs:{id:"can-i-still-use-it-on-the-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-still-use-it-on-the-backend"}},[t._v("#")]),t._v(" Can I still use it on the backend?")]),t._v(" "),a("p",[t._v("Of course! Fuse.js has no DOM dependencies.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Check out the "),a("RouterLink",{attrs:{to:"/demo.html"}},[t._v("live demo")]),t._v(" to fiddle with it and to learn how to use it.")],1),t._v(" "),a("h2",{attrs:{id:"product-of-the-week"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-of-the-week"}},[t._v("#")]),t._v(" Product of the Week")]),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:"https://notebag.app/",target:"_blank",rel:"noopener"}},[a("img",{staticStyle:{width:"100px"},attrs:{src:"/assets/img/potw/notebag@2x.png"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://notebag.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Notebag"),a("OutboundLink")],1),t._v(" is a new experience in note taking, designed from the ground up to be usable from your keyboard. Its fuzzy searching is powered by Fuse.js.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);
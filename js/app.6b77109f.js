(function(e){function t(t){for(var n,o,d=t[0],l=t[1],i=t[2],p=0,b=[];p<d.length;p++)o=d[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,d=1;d<c.length;d++){var l=c[d];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var u=l;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1918:function(e,t,c){"use strict";c("da2d")},"2a49":function(e,t,c){},"34a8":function(e,t,c){"use strict";c("4e5d")},"3e0a":function(e,t,c){"use strict";c("2a49")},"4e5d":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=Object(n["createTextVNode"])("简历");function a(e,t,c,a,o,d){var l=Object(n["resolveComponent"])("el-breadcrumb-item"),i=Object(n["resolveComponent"])("el-breadcrumb"),u=Object(n["resolveComponent"])("BasisInfo"),p=Object(n["resolveComponent"])("el-col"),b=Object(n["resolveComponent"])("WorkExperience"),s=Object(n["resolveComponent"])("el-row"),j=Object(n["resolveComponent"])("el-main"),f=Object(n["resolveComponent"])("el-container");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i,{separator:"         "},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.userName),1)]})),_:1}),Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[r]})),_:1}),Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.createTime),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{id:"main"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{gutter:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{span:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{userName:o.userName},null,8,["userName"])]})),_:1}),Object(n["createVNode"])(p,{span:14},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b)]})),_:1})]})),_:1})]})),_:1})]})),_:1})],64)}var o=Object(n["withScopeId"])("data-v-1c63dfdf");Object(n["pushScopeId"])("data-v-1c63dfdf");var d=Object(n["createVNode"])("h3",null,"基础信息",-1),l=Object(n["createVNode"])("h3",null,"语言证书",-1),i=Object(n["createVNode"])("h3",null,"职业技能",-1),u={style:{width:"300px"}};Object(n["popScopeId"])();var p=o((function(e,t,c,r,a,o){var p=Object(n["resolveComponent"])("el-progress");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("h2",null,Object(n["toDisplayString"])(c.userName),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(a.job),1),d,Object(n["createVNode"])("table",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.basisInfo,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:e},[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e[0]),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e[1]),1)])})),128))]),l,Object(n["createVNode"])("table",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.certification,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:e},[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e[0]),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e[1]),1)])})),128))]),i,Object(n["createVNode"])("table",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(a.jobSkill,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:e},[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(t),1),Object(n["createVNode"])("td",u,[Object(n["createVNode"])(p,{percentage:e,"stroke-width":10,format:o.describeState,color:o.describeWithColor},null,8,["percentage","format","color"])])])})),128))])],64)})),b=(c("d3b7"),c("25f0"),c("99af"),{useName:"BasisInfo",props:{userName:String},methods:{describeState:function(e){return e<60?"了解":e<70?"使用":e<80?"理解":e>=80?"熟练":""},describeWithColor:function(e){var t=(185-2*e).toString(16);return 1===t.length&&(t="0".concat(t)),"#".concat(t).concat(t).concat(t)}},data:function(){return{job:"后端开发工程师",basisInfo:{education:["学历","统招二本（一年国外）"],birthTime:["出生日期","1994-03-26"],gender:["性别","男"],phone:["电话","18752488860"],email:["电子邮件","maxwangein@gmail.com"],QQ:["QQ","494939649"],wechat:["微信","yifan_wang_"]},certification:{english:["英语四级","537"],germany:["德语六级","60"]},jobSkill:{Java:90,MySQL:85,Linux:80,"Spring Boot":80,IDE:80,Git:80,"Spring Cloud":75,"CI/CD":75,"Web Crawler":75,Editor:72,Testing:70,Algorithm:70,Javascript:70,ElasticSearch:65,TypeScript:60,Python:60,Frontend:50,"Machine learning":40}}}});c("3e0a");b.render=p,b.__scopeId="data-v-1c63dfdf";var s=b,j=Object(n["withScopeId"])("data-v-d9c0986e");Object(n["pushScopeId"])("data-v-d9c0986e");var f=Object(n["createStaticVNode"])("<h3 data-v-d9c0986e>自我介绍</h3><p data-v-d9c0986e>机电专业本科学历。兴趣使然，自学软件开发，已经补习完计算机专业主要课程。英语阅读能力强，善于学习利用一手资料。</p><p data-v-d9c0986e>目前有近两年的后端工作经验。项目中涉及后端，自动化测试，CI/DI，Linux运维相关的一些技术，都有相当大的参与。广度较广，能很快学习新技术和概念。</p><p data-v-d9c0986e>工作非常负责，而且对自己代码质量自我要求较高。也会积极参与项目选型和重构。</p><p data-v-d9c0986e>工作以外的时间会不断学习，曾经给page-helper修复过一个bug，也参与了一个github上的刷题项目，贡献了七八十条leetcode题目的解法。</p><br data-v-d9c0986e><h3 data-v-d9c0986e>工作经历</h3><ul data-v-d9c0986e><li data-v-d9c0986e><strong data-v-d9c0986e>金岭教育科技有限公司</strong> <sub data-v-d9c0986e>2019-10-15至2020-08-30</sub></li><p data-v-d9c0986e>职位：后端开发工程师</p><p data-v-d9c0986e>工作内容：所在产品组的产品可以视作给学生和老师用的ERP，管理的是学生和教师在校所产生的数据。负责产品功能的开发和日常维护，编写文档和项目中一些工具的选型。</p><p data-v-d9c0986e>亮点：</p><p data-v-d9c0986e>1.优化了学生成绩即时查询（核心功能）功能的性能。极端情况有近2W学生，每个学生评价平均有约300条得分相关数据，需要根据老师自定义的算法执行排序。</p><p data-v-d9c0986e>2.设计了一套类似page-helper的功能模块，可以对sql语句或es语句进行拦截并修改，节约了同事约20人天的工作量。</p><p data-v-d9c0986e>3.项目重构以后完成了基础功能模块的编写。</p><p data-v-d9c0986e>4.给原有的项目推荐了一些能优化工作的东西，如文档管理，arthas，mybatis-plus等。</p><p data-v-d9c0986e>5.自动化测试方案的探索。</p><li data-v-d9c0986e><strong data-v-d9c0986e>天启慧眼信息技术有限公司</strong> <sub data-v-d9c0986e>2019-01至2019-09</sub></li><p data-v-d9c0986e>职位：后端开发工程师</p><p data-v-d9c0986e>工作内容：桌面端产品的开发，负责后端部分工作，也负责部分运维工作。</p><p data-v-d9c0986e>亮点：诊断并解决了当时公司没有人能够解决的，机器部署到医院重启以后项目不能启动的问题。</p><li data-v-d9c0986e><strong data-v-d9c0986e>北京欣欣人类科技有限公司</strong></li><p data-v-d9c0986e>当时是创业团队，没有薪水。是我的第一份开发工作，在职一个月。维护后端代码，根据业务需求添加新的功能并负责服务器的运维。</p></ul>",8);Object(n["popScopeId"])();var O=j((function(e,t,c,n,r,a){return f})),v={useName:"WorkExperience"};c("34a8");v.render=O,v.__scopeId="data-v-d9c0986e";var g=v,h={name:"App",components:{BasisInfo:s,WorkExperience:g},data:function(){return{userName:"王一凡",createTime:"2021-03-03"}}};c("1918");h.render=a;var m=h,N=(c("41e0"),c("5a5c")),y=c.n(N),S=(c("8c51"),c("fe7e")),V=c.n(S),k=(c("c0ba"),c("c082")),w=c.n(k),x=(c("828f"),c("015f")),C=c.n(x),_=(c("47b1"),c("5a1e")),B=c.n(_),I=(c("884b"),c("0518")),D=c.n(I),P=(c("ab0d"),c("a2ec")),T=c.n(P),E=(c("1e7f"),c("d94e")),W=c.n(E),F=(c("6841"),c("ad2e")),L=c.n(F),M=function(e){e.config.globalProperties.$Element={size:"small"},e.use(D.a).use(T.a).use(W.a).use(L.a),e.use(C.a).use(B.a),e.use(V.a).use(w.a),e.use(y.a)},Q=Object(n["createApp"])(m);M(Q),Q.mount("#app")},da2d:function(e,t,c){}});
//# sourceMappingURL=app.6b77109f.js.map

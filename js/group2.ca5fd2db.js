(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group2"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("d3b7"),a("e6cf");function n(t,e,a,n,s,r,i){try{var c=t[r](i),o=c.value}catch(l){return void a(l)}c.done?e(o):Promise.resolve(o).then(n,s)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var i=t.apply(e,a);function c(t){n(i,s,r,c,o,"next",t)}function o(t){n(i,s,r,c,o,"throw",t)}c(void 0)}))}}},4638:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result-container"},[a("div",{staticClass:"title-wrap"},[a("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.q))]),a("span",{staticClass:"sub-title"},[t._v("找到"+t._s(t.total)+"个结果")])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[a("table",{staticClass:"el-table"},[a("thead",[a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.resultlist,(function(e,n){return a("tr",{key:n,staticClass:"el-table__row",on:{dblclick:function(a){return t.playMusic(e.id)}}},[a("td",[t._v(t._s(n+1))]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(e.name))]),0!==e.mvid?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.playmv(e.mvid)}}}):t._e()]),0!==e.alias.length?a("span",[t._v(t._s(e.alias[0]))]):t._e()])]),a("td",[t._v(t._s(e.artists[0].name))]),a("td",[t._v(t._s(e.album.name))]),a("td",{staticClass:"time"},[t._v(t._s(t._f("dataFormat")(e.duration)))])])})),0)])]),a("el-tab-pane",{attrs:{label:"歌单",name:"list"}},[a("div",{staticClass:"items"},t._l(t.songlist,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(e.playCount))])]),a("img",{attrs:{src:e.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(e.name))])])})),0)]),a("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[a("div",{staticClass:"items mv"},t._l(t.mvlist,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(e.playCount))])]),a("span",{staticClass:"time"},[t._v(t._s(t._f("dataFormat")(e.duration)))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"singer"},[t._v(t._s(e.artistName))])])])})),0)])],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":10,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)},s=[],r=(a("96cf"),a("1da1")),i={name:"result",data:function(){return{activeIndex:"songs",total:0,page:1,limit:10,resultlist:[],songlist:[],mvlist:[]}},created:function(){this.getResultList()},watch:{activeIndex:function(){var t=1;switch(this.activeIndex){case"songs":t=1;break;case"list":t=1e3;break;case"mv":t=1004;break;default:break}1==t?(this.limit=10,this.page=1,this.getResultList()):1e3==t?(this.limit=10,this.page=1,this.getSongList()):(this.limit=8,this.page=1,this.getMvList())}},methods:{getResultList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/search",{params:{keywords:t.$route.query.q,limit:t.limit,type:1,offset:(t.page-1)*t.limit}});case 2:a=e.sent,n=a.data,console.log(n),t.total=n.result.songCount,t.resultlist=n.result.songs;case 7:case"end":return e.stop()}}),e)})))()},getSongList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/search",{params:{keywords:t.$route.query.q,limit:t.limit,type:1e3,offset:(t.page-1)*t.limit}});case 2:a=e.sent,n=a.data,t.total=n.result.playlistCount,t.songlist=n.result.playlists;case 6:case"end":return e.stop()}}),e)})))()},getMvList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/search",{params:{keywords:t.$route.query.q,limit:t.limit,type:1004,offset:(t.page-1)*t.limit}});case 2:a=e.sent,n=a.data,t.total=n.result.mvCount,t.mvlist=n.result.mvs;case 6:case"end":return e.stop()}}),e)})))()},playMusic:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.get("https://autumnfish.cn/song/url",{params:{id:t}});case 2:n=a.sent,s=n.data,e.$parent.musicUrl=s.data[0].url;case 5:case"end":return a.stop()}}),a)})))()},handleCurrentChange:function(t){this.page=t,"songs"===this.activeIndex?this.getResultList():"list"===this.activeIndex?this.getSongList():this.getMvList()},playmv:function(t){this.$router.push("/mv?id=".concat(t))}}},c=i,o=(a("92a5"),a("2877")),l=Object(o["a"])(c,n,s,!1,null,null,null);e["default"]=l.exports},"86d9":function(t,e,a){"use strict";var n=a("f3ba"),s=a.n(n);s.a},"92a5":function(t,e,a){"use strict";var n=a("f294"),s=a.n(n);s.a},"96cf":function(t,e,a){var n=function(t){"use strict";var e,a=Object.prototype,n=a.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function o(t,e,a,n){var s=e&&e.prototype instanceof d?e:d,r=Object.create(s.prototype),i=new O(n||[]);return r._invoke=k(t,a,i),r}function l(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(n){return{type:"throw",arg:n}}}t.wrap=o;var u="suspendedStart",m="suspendedYield",v="executing",p="completed",h={};function d(){}function f(){}function g(){}var _={};_[r]=function(){return this};var C=Object.getPrototypeOf,y=C&&C(C(j([])));y&&y!==a&&n.call(y,r)&&(_=y);var w=g.prototype=d.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){function a(s,r,i,c){var o=l(t[s],t,r);if("throw"!==o.type){var u=o.arg,m=u.value;return m&&"object"===typeof m&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(m).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,c)}))}c(o.arg)}var s;function r(t,n){function r(){return new e((function(e,s){a(t,n,e,s)}))}return s=s?s.then(r,r):r()}this._invoke=r}function k(t,e,a){var n=u;return function(s,r){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===s)throw r;return E()}a.method=s,a.arg=r;while(1){var i=a.delegate;if(i){var c=L(i,a);if(c){if(c===h)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===u)throw n=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=v;var o=l(t,e,a);if("normal"===o.type){if(n=a.done?p:m,o.arg===h)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n=p,a.method="throw",a.arg=o.arg)}}}function L(t,a){var n=t.iterator[a.method];if(n===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,L(t,a),"throw"===a.method))return h;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var s=l(n,t.iterator,a.arg);if("throw"===s.type)return a.method="throw",a.arg=s.arg,a.delegate=null,h;var r=s.arg;return r?r.done?(a[t.resultName]=r.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,h):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,h)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function j(t){if(t){var a=t[r];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var s=-1,i=function a(){while(++s<t.length)if(n.call(t,s))return a.value=t[s],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:E}}function E(){return{value:e,done:!0}}return f.prototype=w.constructor=g,g.constructor=f,g[c]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,a,n,s,r){void 0===r&&(r=Promise);var i=new x(o(e,a,n,s),r);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),w[c]="Generator",w[r]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var n=e.pop();if(n in t)return a.value=n,a.done=!1,a}return a.done=!0,a}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function s(n,s){return c.type="throw",c.arg=t,a.next=n,s&&(a.method="next",a.arg=e),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var o=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(o&&l){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),$(a),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var s=n.arg;$(a)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:j(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(s){Function("r","regeneratorRuntime = r")(n)}},e81b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",src:t.mvurl}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.mvlist.cover,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.mvlist.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvlist.briefDesc))]),a("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvlist.publishTime))]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvlist.playCount)+"次")]),a("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvlist.desc)+" ")])])]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.hotComment.length)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.hotComment,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.content))])]),0!==e.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(e.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("time1")(e.time)))])])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v(t._s(t.total))])]),a("div",{staticClass:"comments-wrap"},t._l(t.comment,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.content))])]),0!==e.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(e.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("time1")(e.time)))])])])})),0)])]),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.otherMv,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playmv(e.id)}}}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(e.playCount))])]),a("span",{staticClass:"time"},[t._v(t._s(t._f("dataFormat")(e.duration)))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"singer"},[t._v(t._s(e.artistName))])])])})),0)])])])},s=[],r=(a("96cf"),a("1da1")),i={name:"mv",data:function(){return{mvurl:"",mvlist:[],otherMv:[],hotComment:[],comment:[],hotTotal:0,total:0}},created:function(){this.getMvUrl(),this.getMvList(),this.getOtherMv(),this.getMvComment()},methods:{handleCurrentChange:function(t){console.log("当前页: ".concat(t))},getMvUrl:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/mv/url",{params:{id:t.$route.query.id}});case 2:a=e.sent,n=a.data,t.mvurl=n.data.url;case 5:case"end":return e.stop()}}),e)})))()},getMvList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/mv/detail",{params:{mvid:t.$route.query.id}});case 2:a=e.sent,n=a.data,t.mvlist=n.data;case 5:case"end":return e.stop()}}),e)})))()},getOtherMv:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/simi/mv",{params:{mvid:t.$route.query.id}});case 2:a=e.sent,n=a.data,t.otherMv=n.mvs;case 5:case"end":return e.stop()}}),e)})))()},getMvComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/comment/mv",{params:{id:t.$route.query.id,limit:10}});case 2:a=e.sent,n=a.data,console.log(n),t.hotComment=n.hotComments,t.comment=n.comments,t.total=n.total;case 8:case"end":return e.stop()}}),e)})))()},playmv:function(t){this.$router.push("/mv?id=".concat(t)),this.getMvUrl(),this.getMvList(),this.getOtherMv(),this.getMvComment()}}},c=i,o=a("2877"),l=Object(o["a"])(c,n,s,!1,null,null,null);e["default"]=l.exports},f294:function(t,e,a){},f3ba:function(t,e,a){},f7ad:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist-container"},[a("div",{staticClass:"top-wrap"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),a("div",{staticClass:"info-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))]),a("div",{staticClass:"author-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.playlist.creator.avatarUrl,alt:""}}),a("span",{staticClass:"name"},[t._v(t._s(t.playlist.creator.nickname))]),a("span",{staticClass:"time"},[t._v(t._s(t._f("time")(t.playlist.createTime))+" 创建")])]),a("div",{staticClass:"tag-wrap"},[a("span",{staticClass:"title"},[t._v("标签:")]),a("ul",[a("li",[t._v(t._s(t.playlist.tags[0]))]),a("li",[t._v(t._s(t.playlist.tags[1]))]),a("li",[t._v(t._s(t.playlist.tags[2]))])])]),a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"title"},[t._v("简介:")]),a("span",{staticClass:"desc"},[t._v(t._s(t.playlist.description))])])])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[a("table",{staticClass:"el-table playlit-table"},[a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.playlist.tracks,(function(e,n){return a("tr",{key:n,staticClass:"el-table__row"},[a("td",[t._v(t._s(n+1))]),a("td",[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.al.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(e.id)}}})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(e.name))]),0!==e.mv?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.playmv(e.mv)}}}):t._e()])])]),a("td",[t._v(t._s(e.ar[0].name))]),a("td",[t._v(t._s(e.al.name))]),a("td",[t._v(t._s(t._f("dataFormat")(e.dt)))])])})),0)])]),a("el-tab-pane",{attrs:{label:"评论"+(t.total1+t.total),name:"2"}},[a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 精彩评论"),a("span",{staticClass:"number"},[t._v(t._s(t.total1))])]),a("div",{staticClass:"comments-wrap"},t._l(t.hotCommentList,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.content))])]),0!==e.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(e.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("time1")(e.time)))])])])})),0)]),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v("最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.commentList,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:e.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(e.user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.content))])]),0!==e.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(e.beReplied[0].user.nickname))]),a("span",{staticClass:"comment"},[t._v(": "+t._s(e.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("time1")(e.time)))])])])})),0)])])],1)],1)},s=[],r=(a("96cf"),a("1da1")),i={name:"playlist",data:function(){return{activeIndex:"1",playlist:[],songslist:[],hotCommentList:[],commentList:[],total:0,total1:0}},created:function(){this.getplaylist(),this.getHotComment(),this.getComment()},methods:{getplaylist:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/playlist/detail",{params:{id:t.$route.query.q}});case 2:a=e.sent,n=a.data,console.log(n),t.playlist=n.playlist;case 6:case"end":return e.stop()}}),e)})))()},playMusic:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.get("https://autumnfish.cn/song/url",{params:{id:t}});case 2:n=a.sent,s=n.data,e.$parent.musicUrl=s.data[0].url;case 5:case"end":return a.stop()}}),a)})))()},getHotComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/comment/hot",{params:{id:t.$route.query.q,type:2,limit:10}});case 2:a=e.sent,n=a.data,t.hotCommentList=n.hotComments,t.total1=n.total;case 6:case"end":return e.stop()}}),e)})))()},getComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("https://autumnfish.cn/comment/playlist",{params:{id:t.$route.query.q,limit:10}});case 2:a=e.sent,n=a.data,t.commentList=n.comments,t.total=n.total;case 6:case"end":return e.stop()}}),e)})))()},playmv:function(t){this.$router.push("/mv?id=".concat(t))}}},c=i,o=(a("86d9"),a("2877")),l=Object(o["a"])(c,n,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=group2.ca5fd2db.js.map
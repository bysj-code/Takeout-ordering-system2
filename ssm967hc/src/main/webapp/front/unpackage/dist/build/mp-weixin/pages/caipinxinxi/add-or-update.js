(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinxinxi/add-or-update"],{1999:function(n,e,i){"use strict";var a=i("b86f"),t=i.n(a);t.a},"1f5c":function(n,e,i){"use strict";i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"5fd3"))}},t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},5609:function(n,e,i){"use strict";i.r(e);var a=i("1f5c"),t=i("a5b7");for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);i("1999");var c,u=i("f0c5"),o=Object(u["a"])(t["default"],a["b"],a["c"],!1,null,"5c055db6",null,!1,a["a"],c);e["default"]=o.exports},"741f":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(i("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,a,t,r,c){try{var u=n[r](c),o=u.value}catch(s){return void i(s)}u.done?e(o):Promise.resolve(o).then(a,t)}function c(n){return function(){var e=this,i=arguments;return new Promise((function(a,t){var c=n.apply(e,i);function u(n){r(c,a,t,u,o,"next",n)}function o(n){r(c,a,t,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("5fd3"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{cross:"",ruleForm:{caipinmingcheng:"",caipinfenlei:"",caipintupian:"",caipinkouwei:"",caipintese:"",caipinjiage:"",caipinxiangqing:"",cantingbianhao:"",cantingmingcheng:"",lianxidianhua:"",cantingdizhi:"",userid:""},caipinfenleiOptions:[],caipinfenleiIndex:0,user:{},ro:{caipinmingcheng:!1,caipinfenlei:!1,caipintupian:!1,caipinkouwei:!1,caipintese:!1,caipinjiage:!1,caipinxiangqing:!1,cantingbianhao:!1,cantingmingcheng:!1,lianxidianhua:!1,cantingdizhi:!1,clicktime:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var i=this;return c(a.default.mark((function t(){var r,c,u,o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,i.$api.session(r);case 3:return c=t.sent,i.user=c.data,i.ruleForm.cantingbianhao=i.user.cantingbianhao,i.ro.cantingbianhao=!0,i.ruleForm.cantingmingcheng=i.user.cantingmingcheng,i.ro.cantingmingcheng=!0,i.ruleForm.lianxidianhua=i.user.lianxidianhua,i.ro.lianxidianhua=!0,i.ruleForm.cantingdizhi=i.user.cantingdizhi,i.ro.cantingdizhi=!0,t.next=15,i.$api.option("caipinfenlei","caipinfenlei",{});case 15:if(c=t.sent,i.caipinfenleiOptions=c.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=25;break}return i.ruleForm.id=e.id,t.next=23,i.$api.info("caipinxinxi",i.ruleForm.id);case 23:c=t.sent,i.ruleForm=c.data;case 25:if(i.cross=e.cross,!e.cross){t.next=85;break}u=n.getStorageSync("crossObj"),t.t0=a.default.keys(u);case 29:if((t.t1=t.t0()).done){t.next=85;break}if(o=t.t1.value,"caipinmingcheng"!=o){t.next=35;break}return i.ruleForm.caipinmingcheng=u[o],i.ro.caipinmingcheng=!0,t.abrupt("continue",29);case 35:if("caipinfenlei"!=o){t.next=39;break}return i.ruleForm.caipinfenlei=u[o],i.ro.caipinfenlei=!0,t.abrupt("continue",29);case 39:if("caipintupian"!=o){t.next=43;break}return i.ruleForm.caipintupian=u[o],i.ro.caipintupian=!0,t.abrupt("continue",29);case 43:if("caipinkouwei"!=o){t.next=47;break}return i.ruleForm.caipinkouwei=u[o],i.ro.caipinkouwei=!0,t.abrupt("continue",29);case 47:if("caipintese"!=o){t.next=51;break}return i.ruleForm.caipintese=u[o],i.ro.caipintese=!0,t.abrupt("continue",29);case 51:if("caipinjiage"!=o){t.next=55;break}return i.ruleForm.caipinjiage=u[o],i.ro.caipinjiage=!0,t.abrupt("continue",29);case 55:if("caipinxiangqing"!=o){t.next=59;break}return i.ruleForm.caipinxiangqing=u[o],i.ro.caipinxiangqing=!0,t.abrupt("continue",29);case 59:if("cantingbianhao"!=o){t.next=63;break}return i.ruleForm.cantingbianhao=u[o],i.ro.cantingbianhao=!0,t.abrupt("continue",29);case 63:if("cantingmingcheng"!=o){t.next=67;break}return i.ruleForm.cantingmingcheng=u[o],i.ro.cantingmingcheng=!0,t.abrupt("continue",29);case 67:if("lianxidianhua"!=o){t.next=71;break}return i.ruleForm.lianxidianhua=u[o],i.ro.lianxidianhua=!0,t.abrupt("continue",29);case 71:if("cantingdizhi"!=o){t.next=75;break}return i.ruleForm.cantingdizhi=u[o],i.ro.cantingdizhi=!0,t.abrupt("continue",29);case 75:if("clicktime"!=o){t.next=79;break}return i.ruleForm.clicktime=u[o],i.ro.clicktime=!0,t.abrupt("continue",29);case 79:if("userid"!=o){t.next=83;break}return i.ruleForm.userid=u[o],i.ro.userid=!0,t.abrupt("continue",29);case 83:t.next=29;break;case 85:i.styleChange();case 86:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},caipinfenleiChange:function(n){this.caipinfenleiIndex=n.target.value,this.ruleForm.caipinfenlei=this.caipinfenleiOptions[this.caipinfenleiIndex]},caipintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.caipintupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return c(a.default.mark((function i(){var t,r,c,u,o,s,l,p,f,g;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.ruleForm.caipinmingcheng){i.next=3;break}return e.$utils.msg("菜品名称不能为空"),i.abrupt("return");case 3:if(e.ruleForm.caipinfenlei){i.next=6;break}return e.$utils.msg("菜品分类不能为空"),i.abrupt("return");case 6:if(e.ruleForm.caipinjiage){i.next=9;break}return e.$utils.msg("菜品价格不能为空"),i.abrupt("return");case 9:if(!e.ruleForm.caipinjiage||e.$validate.isIntNumer(e.ruleForm.caipinjiage)){i.next=12;break}return e.$utils.msg("菜品价格应输入整数"),i.abrupt("return");case 12:if(!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){i.next=15;break}return e.$utils.msg("联系电话应输入手机格式"),i.abrupt("return");case 15:if(!e.cross){i.next=31;break}if(u=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==u){i.next=31;break}if(s=n.getStorageSync("crossObj"),u.startsWith("[")){i.next=27;break}for(l in s)l==u&&(s[l]=o);return p=n.getStorageSync("crossTable"),i.next=25,e.$api.update("".concat(p),s);case 25:i.next=31;break;case 27:t=Number(n.getStorageSync("userid")),r=s["id"],c=n.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 31:if(!r||!t){i.next=53;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=r,f={page:1,limit:10,crossuserid:t,crossrefid:r},i.next=37,e.$api.list("caipinxinxi",f);case 37:if(g=i.sent,!(g.data.total>=c)){i.next=43;break}return e.$utils.msg(n.getStorageSync("tips")),i.abrupt("return",!1);case 43:if(!e.ruleForm.id){i.next=48;break}return i.next=46,e.$api.update("caipinxinxi",e.ruleForm);case 46:i.next=50;break;case 48:return i.next=50,e.$api.add("caipinxinxi",e.ruleForm);case 50:e.$utils.msgBack("提交成功");case 51:i.next=61;break;case 53:if(!e.ruleForm.id){i.next=58;break}return i.next=56,e.$api.update("caipinxinxi",e.ruleForm);case 56:i.next=60;break;case 58:return i.next=60,e.$api.add("caipinxinxi",e.ruleForm);case 60:e.$utils.msgBack("提交成功");case 61:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,i("543d")["default"])},a5b7:function(n,e,i){"use strict";i.r(e);var a=i("741f"),t=i.n(a);for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);e["default"]=t.a},b86f:function(n,e,i){},d2c1:function(n,e,i){"use strict";(function(n){i("25f8");a(i("66fd"));var e=a(i("5609"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])}},[["d2c1","common/runtime","common/vendor"]]]);
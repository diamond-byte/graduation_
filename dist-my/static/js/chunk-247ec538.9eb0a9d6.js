(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247ec538"],{"3c11":function(t,a,e){},"6c22":function(t,a,e){},b236:function(t,a,e){"use strict";var i=e("3c11"),n=e.n(i);n.a},c93f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"staff_details"}},[e("span",{staticClass:"back",on:{click:t.back}},[t._v("返回")]),e("el-tabs",{staticClass:"tab",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"基本信息",name:"first"},on:{click:function(a){return t.basics(this.$route.query.id)}}},[e("basicInfo")],1),e("el-tab-pane",{attrs:{label:"订单信息",name:"second"}},[e("orderInfo")],1),e("el-tab-pane",{attrs:{label:"收益信息",name:"third"}},[e("shouyiInfo")],1)],1)],1)},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"basicInfo"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.photo,alt:""}})]),e("span",{staticClass:"text1"},[t._v(t._s(t.basic.realname))]),e("br"),e("span",{staticClass:"text2"},[t._v("海纳百川,有容乃大")])]),e("div",{staticClass:"bottom"},[e("span",{staticClass:"info"},[t._v("联系方式:")]),e("span",[t._v(t._s(t.basic.telephone))]),e("br"),e("span",{staticClass:"info"},[t._v("状态:")]),e("span",[t._v(t._s(t.basic.status))]),e("br"),e("span",{staticClass:"info"},[t._v("地址:")]),e("span",[t._v(t._s(t.basic.province)+t._s(t.basic.city))])])])},r=[],l={data:function(){return{basic:{},photo:""}},created:function(){var t=this;this.$axios.get("/waiter/findWaiterById",{params:{id:this.$route.query.id}}).then((function(a){t.basic=a.data.data,t.photo=t.basic.imgPhoto}))}},c=l,o=(e("b236"),e("9ca4")),u=Object(o["a"])(c,s,r,!1,null,"31e67b56",null),d=u.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"orderInfo"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderTimeList,stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"订单编号",width:"100px",align:"center"}}),e("el-table-column",{attrs:{prop:"orderTime",label:"下单时间",width:"250px",align:"center"}}),e("el-table-column",{attrs:{prop:"total",label:"总价",width:"180px",align:"center"}}),e("el-table-column",{attrs:{prop:"status",label:"状态",width:"180px",align:"center"}}),e("el-table-column",{attrs:{prop:"customerId",label:"顾客ID",width:"200px",align:"center"}}),e("el-table-column",{staticClass:"caozuo",attrs:{label:"操作",width:"100px",align:"center",color:"lightblue"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{staticClass:"caozuo",on:{click:function(e){return t.details(a.row.id)}}},[t._v("详情")])]}}])})],1)],1)},b=[],f=(e("fe59"),e("08ba"),{data:function(){return{orderList:[]}},computed:{orderTimeList:function(){return this.orderList.forEach((function(t){t.orderTime=new Date(t.orderTime).toLocaleDateString()})),this.orderList}},created:function(){this.findAll()},methods:{details:function(t){this.$router.push({path:"/staffOrderdetail/index",query:{id:t}})},findAll:function(){var t=this;this.$axios.get("/order/query",{params:{id:this.$route.query.id}}).then((function(a){t.orderList=a.data.data}))}}}),h=f,m=Object(o["a"])(h,p,b,!1,null,"665ee466",null),v=m.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"shouyiInfo"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shouyi,stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"订单编号",width:"250px",align:"center"}}),e("el-table-column",{attrs:{prop:"money",label:"金额",width:"250px",align:"center"}}),e("el-table-column",{attrs:{prop:"description",label:"描述",width:"250px",align:"center"}}),e("el-table-column",{attrs:{prop:"transferAccounts",label:"凭证",width:"250px",align:"center"}})],1)],1)},w=[],x={data:function(){return{shouyi:[]}},created:function(){var t=this;this.$axios.get("/waiter/detailsShou",{params:{id:this.$route.query.id}}).then((function(a){t.shouyi=a.data.data}))}},g=x,y=Object(o["a"])(g,_,w,!1,null,"33fe05d0",null),k=y.exports,C={data:function(){return{activeName:"first"}},components:{basicInfo:d,orderInfo:v,shouyiInfo:k},methods:{handleClick:function(t,a){},back:function(){this.$router.back()}}},$=C,I=(e("e466"),Object(o["a"])($,i,n,!1,null,"dbdb08ec",null));a["default"]=I.exports},e466:function(t,a,e){"use strict";var i=e("6c22"),n=e.n(i);n.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf877cda"],{"2bb8":function(e,t,a){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,i){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"===typeof e?s(o(e),(function(o){var i=encodeURIComponent(r(o))+a;return n(e[o])?s(e[o],(function(e){return i+encodeURIComponent(r(e))})).join(t):i+encodeURIComponent(r(e[o]))})).join(t):i?encodeURIComponent(r(i))+a+encodeURIComponent(r(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var a=[],r=0;r<e.length;r++)a.push(t(e[r],r));return a}var o=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},"5ee4":function(e,t,a){"use strict";t.decode=t.parse=a("a2d3"),t.encode=t.stringify=a("2bb8")},"5f81":function(e,t,a){},8176:function(e,t,a){"use strict";var r=a("5f81"),n=a.n(r);n.a},a2d3:function(e,t,a){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,s){t=t||"&",a=a||"=";var o={};if("string"!==typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var l=1e3;s&&"number"===typeof s.maxKeys&&(l=s.maxKeys);var u=e.length;l>0&&u>l&&(u=l);for(var c=0;c<u;++c){var p,f,m,d,g=e[c].replace(i,"%20"),h=g.indexOf(a);h>=0?(p=g.substr(0,h),f=g.substr(h+1)):(p=g,f=""),m=decodeURIComponent(p),d=decodeURIComponent(f),r(o,m)?n(o[m])?o[m].push(d):o[m]=[o[m],d]:o[m]=d}return o};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},aedf:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"customer"},[a("div",{staticClass:"cus-top"},[a("el-button",{staticClass:"cus-add",attrs:{type:"primary"},on:{click:e.addCus}},[e._v("添加")]),a("el-input",{staticClass:"cus-sousuo",attrs:{placeholder:"请输入状态",clearable:""},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{staticClass:"cus-find",attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1),a("div",{staticClass:"cus-bottom"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.cusInfo,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"100px",align:"center"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",width:"250px",align:"center"}}),a("el-table-column",{attrs:{prop:"telephone",label:"手机号",width:"250px",align:"center"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"230px",align:"center"}}),a("el-table-column",{staticClass:"caozuo",attrs:{label:"操作",width:"185px",align:"center",color:"lightblue"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"caozuo",on:{click:function(a){return e.deleteById(t.row)}}},[e._v("删除")]),e._v(" "),a("a",{staticClass:"caozuo",on:{click:function(a){return e.change(t.row)}}},[e._v("编辑")]),e._v(" "),a("a",{staticClass:"caozuo",on:{click:function(a){return e.cus_details(t.row.id)}}},[e._v("详情")])]}}])})],1)],1),a("div",{staticClass:"cus-footer"},[a("el-pagination",{attrs:{"current-page":e.currentPage1,"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})],1),a("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"myform",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名","label-width":e.formLabelWidth,prop:"username"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"realname"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.realname,callback:function(t){e.$set(e.form,"realname",t)},expression:"form.realname"}})],1),a("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth,prop:"telephone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),a("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"pass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth,prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"启用",value:"启用"}}),a("el-option",{attrs:{label:"禁用",value:"禁用"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",staticStyle:{"margin-top":"-50px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.formSave("myform")}}},[e._v("确 定")])],1)],1)],1)},n=[],s=a("5ee4"),o=a.n(s),i={name:"Customer",data:function(){return{input:"",cusInfo:[],total:0,currentPage1:1,pageSize:6,form:{username:"",realname:"",telephone:"",pass:"",status:""},title:"添加顾客信息",dialogFormVisible:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],realname:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:7,max:11,message:"长度在 7 到 11 个字符",trigger:"blur"}],pass:[{required:!0,trigger:"blur"},{min:5}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},formLabelWidth:"120px"}},created:function(){this.findAll()},methods:{cus_details:function(e){this.$router.push({path:"/cus_details/index",query:{id:e}})},formSave:function(e){var t=this,a=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;a.$axios.post("/customer/saveOrUpdate",o.a.stringify(a.form)).then((function(e){200==e.data.status?(t.$message({message:"保存成功",type:"success"}),a.findAll()):t.$message.error("保存失败"),a.dialogFormVisible=!1}))}))},addCus:function(){this.dialogFormVisible=!0,this.title="添加顾客信息",this.form={}},change:function(e){var t=this;this.dialogFormVisible=!0,this.title="编辑顾客信息",this.$axios.get("/customer/findCustomerById",{params:{id:e.id}}).then((function(a){a.data.data;t.form={id:e.id,username:e.username,realname:e.realname,telephone:e.telephone,pass:a.data.data.password,status:e.status}}))},search:function(){this.input?this.findAll(this.input):this.findAll()},findAll:function(e){var t=this;if(e)var a=this.currentPage1-1,r={page:a,pageSize:this.pageSize,status:e};else a=this.currentPage1-1,r={page:a,pageSize:this.pageSize};this.$axios.post("/customer/query",o.a.stringify(r)).then((function(e){console.log(e.data),t.cusInfo=e.data.data.list,t.total=e.data.data.total}))},handleSizeChange:function(e){},handleCurrentChange:function(e){this.findAll()},deleteById:function(e){var t=this,a=this;this.$confirm("此操作将永久删除该顾客信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r=e.id;t.$axios.get("customer/deleteById",{params:{id:r}}).then((function(e){200==e.data.status?(t.$message({type:"success",message:"删除成功!"}),a.findAll()):t.$message.error(e.data.message)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},l=i,u=(a("8176"),a("9ca4")),c=Object(u["a"])(l,r,n,!1,null,"165f6e4a",null);t["default"]=c.exports}}]);
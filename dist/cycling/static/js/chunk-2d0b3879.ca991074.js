(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3879"],{2984:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{attrs:{outlined:"",color:"rgb( 230, 230, 230 )"}},[a("v-card-title"),a("v-card-text",[a("p",{staticClass:"text-h5"},[e._v("Road Cup")]),a("div",{staticClass:"pl-3 mt-3"},[e.RoadCupSelected?a("h3",{staticClass:"pl-3",staticStyle:{"border-left":"5px solid #1890ff"}},[e._v(" "+e._s(e.RoadCupSelected.description)+" ")]):e._e(),a("v-row",[a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{dense:"",hint:e.RoadCupSelected.lastrun?"Latest refresh to "+e.RoadCupSelected.description+" on "+e.RoadCupSelected.lastrun:"","persistent-hint":"",label:"Road Cup",items:e.RoadCup,"return-object":"","item-text":"description"},model:{value:e.RoadCupSelected,callback:function(t){e.RoadCupSelected=t},expression:"RoadCupSelected"}})],1),a("v-col",{staticClass:"mt-4 ml-4",attrs:{cols:"12",sm:"4"}},[a("v-autocomplete",{attrs:{loading:e.RoadCupCategoryLoader,dense:"",label:"Select a Category",items:e.RoadCupCategory,"return-object":"","item-text":"racegroupname"},model:{value:e.RoadCupCategorySelector,callback:function(t){e.RoadCupCategorySelector=t},expression:"RoadCupCategorySelector"}})],1)],1),a("v-row",[a("v-col",[a("v-data-table",{attrs:{loading:e.ReadCupResultLoader,items:e.ReadCupResult,headers:[{text:"Place",value:"place"},{text:"POINTS",value:"points"},{text:"FIRST NAME",value:"firstname"},{text:"LAST NAME",value:"lastname"},{text:"USAC #",value:"usac"},{text:"CURRENT CAT",value:"currentcat"},{text:"RACING AGE",value:"racingage"}]}})],1)],1)],1)])],1)],1)],1)],1)},l=[],c=(a("99af"),a("be3b")),d={data:function(){return{RoadCup:[],RoadCupSelected:null,RoadCupCategory:[],RoadCupCategorySelector:null,RoadCupCategoryLoader:!1,ReadCupResult:[],ReadCupResultLoader:!1}},mounted:function(){this.getCupDetails()},watch:{RoadCupSelected:function(e){this.getCategory()},RoadCupCategorySelector:function(e){var t=this;this.ReadCupResultLoader=!0,console.log("vaue",e),c["a"].get("/AcaPointscompetitionresult/?pointscompetitionid=".concat(e.pointscompetitionid,"&racegroupid=").concat(e.racegroupid,"&fields=place,points,firstname,lastname,usac,currentcat,racingage")).then((function(e){console.log(e),t.ReadCupResult=e.data,t.ReadCupResultLoader=!1}))}},methods:{getCupDetails:function(){var e=this;c["a"].get("/AcaPointscompetition/?name=BCR").then((function(t){console.log(t),e.RoadCup=t.data,e.RoadCupSelected=e.RoadCup[e.RoadCup.length-1]}))},getCategory:function(){var e=this;this.RoadCupCategoryLoader=!0,c["a"].get("/AcaPointscompetitionraceresult/?pointscompetitionid=".concat(this.RoadCupSelected.id,"&fields=racegroupname,id,racegroupid,pointscompetitionid")).then((function(t){console.log(t),e.RoadCupCategory=t.data,e.RoadCupCategoryLoader=!1}))}}},u=d,s=a("2877"),n=a("6544"),r=a.n(n),i=a("c6a6"),p=a("b0af"),C=a("99d9"),R=a("62ad"),g=a("8fea"),m=a("0fd9"),v=Object(s["a"])(u,o,l,!1,null,null,null);t["default"]=v.exports;r()(v,{VAutocomplete:i["a"],VCard:p["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:R["a"],VDataTable:g["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0b3879.ca991074.js.map
"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u623F\u5C4B\u4FE1\u606F"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5F00\u53D1\u5DE5\u5177/HBuilderX/workspace/wupingchengtou/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

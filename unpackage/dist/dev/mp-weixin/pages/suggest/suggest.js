"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      code: "<h2>\u610F\u89C1\u548C\u5EFA\u8BAE</h2>",
      submit: "\u63D0\u4EA4"
    };
  },
  methods: {
    OnClick: function submit() {
      this.submit = "\u63D0\u4EA4\u6210\u529F";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.code,
    b: common_vendor.t($data.submit),
    c: common_vendor.o((...args) => $options.OnClick && $options.OnClick(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5F00\u53D1\u5DE5\u5177/HBuilderX/workspace/wupingchengtou/pages/suggest/suggest.vue"]]);
wx.createPage(MiniProgramPage);

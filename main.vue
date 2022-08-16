<script>
import Vue from "vue";
import xyGenerateMain from "@/components/ant-generate/xy-generate-main.vue";
import FunctionModuleTest from "@/test/test.vue";

Vue.config.productionTip = false;

import "xe-utils";
import VXETable from "vxe-table";
Vue.use(VXETable);

import Antd from "ant-design-vue";
Vue.use(Antd);

import api from "./axios/api";

import "./components/edit-tool/lib";
Vue.prototype.$api = api;

import { XyWebImageCache } from "@/cache/cache";
const imgCache = new XyWebImageCache();
Vue.prototype.$xyCache = imgCache;

const newVue = Vue;

export const componentsMap = new Map([
  ["vue2", newVue],
  ["xyGenerateMain", xyGenerateMain],
  ["FunctionModuleTest", FunctionModuleTest],
]);
export default newVue;
</script>

<style lang="less" scoped>
// @import "vxe-table/lib/style.css";
// @import "ant-design-vue/dist/antd.less";
// @import "./assets/styles/xy-ant-theme.less";

/deep/ .xy-form-model {
  // @deepimport "vxe-table/lib/style.css";
  // @deepimport "ant-design-vue/dist/antd.less";
  // @deepimport "./style/xy-ant-theme.less";
}

::v-deep {
  .ant-radio-inner::after {
    background-color: var(--ant-primary-color);
    border-left: 0;
    border-radius: 16px;
    border-top: 0;
    content: " ";
    display: block;
    height: 16px;
    left: 50%;
    margin-left: -8px;
    margin-top: -8px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    width: 16px;
  }

  .ant-radio-checked .ant-radio-inner::after {
    opacity: 1;
    transform: scale(0.5);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }

  .w-100per {
    width: 100%;
  }

  .w-16 {
    width: 16px;
  }

  .ant-form-item {
    display: block;
  }

  .ant-input-affix-wrapper:before {
    display: none;
  }

  .ant-col-1,
  .ant-col-2,
  .ant-col-3,
  .ant-col-4,
  .ant-col-5,
  .ant-col-6,
  .ant-col-7,
  .ant-col-8,
  .ant-col-9,
  .ant-col-10,
  .ant-col-11,
  .ant-col-12,
  .ant-col-13,
  .ant-col-14,
  .ant-col-15,
  .ant-col-16,
  .ant-col-17,
  .ant-col-18,
  .ant-col-19,
  .ant-col-20,
  .ant-col-21,
  .ant-col-22,
  .ant-col-23,
  .ant-col-24 {
    flex: 0 0 auto;
    float: left;
  }

  .ant-col-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    width: 50%;
  }

  .ant-row {
    position: relative;
    height: auto;
    margin-right: 0;
    margin-left: 0;
    zoom: 1;
    display: block;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss" scoped>
::v-deep {
  .vh-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .vh-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &.default {
      align-items: flex-start;
    }
  }

  .vh-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

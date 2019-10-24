# vuenus-tablelist

## Demo
[https://piedasing.github.io/vuenus-tablelist/](https://piedasing.github.io/vuenus-tablelist/)

## Intall
``` bash
npm install vuenus-tablelist --save
```

## Import
``` js
import Vue from "vue";
import VuenusTableList from "vuenus-table-list";

Vue.component("vuenus-table-list", VuenusTableList);
```

## Usage
``` html
<template>
    <vuenus-table-list
        :columns="columns"
        :rows="rows"
    ></vuenus-table-list>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    field: "img",                    // 欄位名稱， rows 內的 key 要分別與此相同
                    label: "Thumbnail",              // th 顯示的名稱
                    type: "img",                     // 欄位類型 (text -> 純文字 、 html -> 含有標籤的內容 、 img -> 圖片 、 date -> 時間格式)
                    thClass: "gull-th-class",        // 綁在 th 的 class (空格隔開)，可省略
                    thStyle: "width:150px;",         // 綁在 th 的 style (寫法跟 inline-style 一樣，分號隔開)，可省略
                    tdClass: "",                     // 綁在 td 的 class，可省略
                    tdStyle: ""                      // 綁在 th 的 style，可省略
                },
                {
                    field: "title",
                    label: "Title",
                    type: "text"
                },
                {
                    field: "createdAt",
                    label: "Created On",
                    type: "date",
                    dateOutputFormat: "MMM DD, YYYY" // 只有 type = date 才有作用，用來顯示該欄位的時間格式，預設為 YYYY-MM-DD，可省略
                },
                {
                    field: "checkbox",
                    label: "勾選",
                    type: "checkbox"
                }
            ],
            rows: [
                {
                    id: 1,
                    img: require("@/assets/images/products/speaker-1.jpg"),    // 欄位內容， key 要與 column 定義的欄位 field 一樣
                    title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
                    createdAt: "2018-10-29",
                    checkbox: false
                },
                {
                    id: 2,
                    img: require("@/assets/images/products/speaker-2.jpg"),
                    title: "Portable Speaker with HD Sound",
                    createdAt: "2011-10-31",
                    checkbox: false,
                    slot: { // 塞在對應欄位之後的內容，可以用 html，可省略
                        img: `<button class="btn-sm btn-primary mt-1">Button</button>`,
                        title: `<p style="color: #3377ff; font-weight: bold;">test</p>`
                    }
                },
                {
                    id: 3,
                    img: require("@/assets/images/products/headphone-2.jpg"),
                    title: "Lightweight On-Ear Headphones - Black",
                    createdAt: "2011-10-30",
                    checkbox: false
                },
                {
                    id: 4,
                    img: require("@/assets/images/products/watch-1.jpg"),
                    title: "Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)",
                    createdAt: "2011-10-11",
                    checkbox: false
                },
                {
                    id: 5,
                    img: require("@/assets/images/products/watch-1.jpg"),
                    title: "Automatic-self-wind mens Watch 5102PR-001",
                    createdAt: "2011-10-21",
                    checkbox: false
                },
                {
                    id: 6,
                    img: require("@/assets/images/products/headphone-3.jpg"),
                    title: "On-Ear Headphones - Black",
                    createdAt: "2011-10-31",
                    checkbox: false
                }
            ]
        }
    }
}
</script>
```

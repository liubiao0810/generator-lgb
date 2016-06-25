/**
 * @File:      示例页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-05 19:35:07
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            pagesdata: {
                options: {},
                data: {
                    pageCurNum: 1, // 当前页数
                    totalPages: 10, // 总页数
                    pageSize: 20, // 每页显示的数量
                    totalMsg: '', // 总共数据展示信息
                    startPage: 1 // 开始页
                }
            }
        };
    },
    events: {
        
    },
    components: {
        'v-pages': require('../components/v-pages/')
    },
    methods: {
        click: function () {
            $.ajax({
                type: 'get',
                url: 'example',
                dataType: 'json',
                success: function (json) {
                    console.log(json);
                }
            });
        },
        alert: function () {
            bootbox.alert("Hello world!");
        },
        prompt: function () {
            bootbox.prompt("What is your name?", function(result) {
                if (result === null) {
                    bootbox.alert("不能为空哦");
                } else {
                    bootbox.alert("success!只是：" + result );
                }
            });
        },
        confirm: function () {
            bootbox.confirm("Are you sure?", function(result) {
                bootbox.alert("sure!");
            });
        }
    }
});
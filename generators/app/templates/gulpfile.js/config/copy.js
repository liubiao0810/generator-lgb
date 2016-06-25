/**
 * @File:      文件拷贝任务配置
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-22 11:11:27
 */
var config = require('./');

module.exports = {
    root: config.sourceDirectory,
    bootstrapSrc: config.devModulesPath + '/bootstrap/dist/**/*',
    bootstrapDest: config.publicDirectory + '/lib/bootstrap/'
};
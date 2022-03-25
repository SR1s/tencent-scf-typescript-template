'use strict';

/**
 * 提供给云函数的执行入口，控制台上的配置为 index.main_handler
 * 具体代码写在 src/index.ts 里
 */
exports.main_handler = async (event, context) => {
    const app = require('./dist/index.js')
    return {
        data: await app.main_handler(event, context)
    }
}
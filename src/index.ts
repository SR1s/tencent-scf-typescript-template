/**
 * 云函数的业务代码入口
 * @param event 事件信息
 * @param context 上下文信息
 */
async function main_handler(event: any, context: any) {
    console.log("Hello World by TypeScript")
}

export { main_handler }
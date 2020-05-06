# 第 04 周学习笔记

## 事件循环、宏任务、微任务

- 事件循环
  - 事件循环不是由 JavaScript 引擎实现的，而是由浏览器或 Node.js 宿主环境实现的；
  - 循环宏任务的工作就是事件循环；

- 宏任务
  - 在宿主 API 中产生的任务，如 `setTimeout`、`setInterval`；
  - 一个宏任务只存在一个微任务队列，微任务根据入队时间顺序执行；

- 微任务
  - 在 JavaScript 引擎中产生的任务，如 `Promise`；
  - `Promise` 的 `then` 方法以及 `async` 函数里的 `await` 会将一个微任务入队。

> 参考文档：RunJobs（P.104）

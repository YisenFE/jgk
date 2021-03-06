/// <reference path="../../../types/index.d.ts" />
namespace _ {
    console.log(process.argv);
    //# ts-node src/2.node/2.1.node-core/2.process.ts -o 123

    const obj = process.argv.slice(2).reduce((accu: Object1, curr, index, arr) => {
        if (curr.includes('--')) { // --config xxx --port
            accu[curr.slice(2)] = arr[index + 1]; // 如果有 -- 就是key 下一项就是值
        }
        return accu;
    }, {});
    console.log(obj);
    //# ts-node src/2.node/2.1.node-core/2.process.ts --config xxx.config.js --prot 3000
}

namespace _1 {
    process.env.NODE_ENV = 'development';
    console.log(process.env.NODE_ENV)
    //# ts-node src/2.node/2.1.node-core/2.process.ts --config xxx.config.js --prot 3000
}

namespace _2 {
    console.log(process.cwd());
}

// 事件循环，定时器和process.nextTick()
namespace _3 {
    // https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
}

function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 在完成 Promise 之前的其他操作
        console.log("完成了一些事情");
        // promise 的兑现值
        resolve("https://example.com/");
      }, 200);
    });
  }

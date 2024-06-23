//WAF to print hello world by cb, promise, and async

//using call back
const main = (greet) => {
  try {
    const result = (sentence) => {
      console.log(sentence);
    };
    result(greet);
  } catch (err) {
    next(e);
  }
};
main("hello World");

// //using promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const greet = "Hello world";
    resolve(greet);
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

//using async await

const greet = async (name) => {
  console.log("hello World " + name);
};

greet("kusum");

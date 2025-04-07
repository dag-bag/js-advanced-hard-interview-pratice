const getData = async () => {
  return await (
    await fetch("https://dummyjson.com/products?limit=100000")
  ).json();
};
const timeout = (ms) => {
  const hello = new Promise((_, reject) => {
    setTimeOut(
      () =>
        reject(
          new Error("Abort", {
            cause: "TimeOut",
          })
        ),
      ms
    );
  });
  return hello;
};

try {
  const result = await Promise.race([getData(), timeout(0)]);
  console.log("data getted");
} catch (error) {
  console.log(error);
}

import { Component, createSignal } from "solid-js";

export default function test() {
  const [data, set] = createSignal("");
//   setInterval(()=>{
//     // set((a)=>a+1)
//   },100)
  fetch("https://www.baidu.com").then(res=>set(JSON.stringify(res.json)))
  return (
    <>
      <div>lalala</div>
      <p>{data}</p>
    </>
  );
}

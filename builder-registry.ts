"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

// Builder.registerComponent(Counter, {
//   name: "Counter",
//   inputs: [
//     {
//       name: "initialCount",
//       type: "number",
//     },
//   ],
// });

Builder.registerComponent(Header, {
  name: "Header",
});
Builder.registerComponent(Footer, {
  name: "Footer",
});

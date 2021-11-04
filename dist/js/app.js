/* eslint-disable quotes */
// (function () {
//   const categories = document.querySelectorAll("li.category");

//   Array.prototype.forEach.call(categories, (category) => {
//     let btn = category.querySelector("button");
//     let target = category.nextElementSibling;

//     btn.onClick = () => {
//       alert("button was clicked!");
//       console.log("button was clicked!");
//       let expanded = btn.getAttribute("aria-expanded") === "true" || false;

//       btn.setAttribute("aria-expanded", !expanded);
//       target.hidden = expanded;
//     };
//   });
// });

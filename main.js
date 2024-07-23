// const itemlist = document.querySelectorAll("#menu li");
// // console.log(itemlist);
// [...itemlist].forEach(function (item) {
//     item.addEventListener("click", function () {
//         console.log(this);
//     })
// });



// let info = {
//     fullName: "Mai Gia Bảo",
//     age: 18,
//     email: "mbao2k3@gmail.com",
//     getfullName: function () {
//         console.log(info.age);
//         console.log(info.email);
//         console.log(info.fullName);
//     },
//     cccd: {
//         fullName: "Lin Lin",
//         email: "linlin@gmail.com",
//         getcccd: function () {
//             console.log(this.fullName);
//         }
//     }
// };
// info.getfullName();
// info.cccd.getcccd();
import { sum } from "./sum.js";
let a = 10;
let b = 20;
let c = sum(a, b);
console.log(c);
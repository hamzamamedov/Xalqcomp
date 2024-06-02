// let obj;
// obj = {
//   cana: [
//     { first: "Aydin", last: "Memmedov", age: 15 },
//     { first: "Aydin1", last: "Memmedov1", age: 16 },
//     { first: "Aydin2", last: "Memmedov2", age: 17 },
//     { first: "Aydin3", last: "Memmedov3", age: 18 },
//     { first: "Aydin4", last: "Memmedov4", age: 19 },
//   ],
// };
// alert(obj.cana[2].first);

let details = document.querySelector("#details");
let allblur = document.querySelector("#all-blur");
function more1() {
  if (details.style.right == "-640px") {
    details.style.right = "0px";
    allblur.style.filter = "blur(3px)";
    document.getElementById("qaqa").style.overflow="hidden";
  } else {
    details.style.right = "-640px";
    allblur.style.filter = "blur(0px)";
   }
}

function closes() {
  details.style.right = "-640px";
  allblur.style.filter = "blur(0px)";
  document.getElementById("qaqa").style.overflow="auto";
  }

 

 
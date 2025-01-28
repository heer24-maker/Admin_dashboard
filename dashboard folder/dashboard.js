// document.getElementById("nav").innerHTML = `<h1>HELLO heera my age is 24</h1>
// </br>
// <p>that paragraph tell about me</p>`


// // class bycycle {
// //     constructor (brand, location){
// //     this.name =  brand;
// //     this.direction = location;
    
// //     }
// //     present(){
// //        return `my was since old is  ` + this.direction ;
// //     }
   
// // }

// // const myBycycle = new bycycle("atlas", 2012);
// // console.log(myBycycle.present( ));

// // class product {
// //     constructor(name, prize) {
// //       this.brand = name;
// //       this.cost = prize;
// //     }
  
// //     present() {
// //       return 'I have a ' + this.cost;
// //     }
// //   }
  
// //   class company extends product {
// //     constructor(name, mod) {
// //       super(name);
// //       this.company = mod;
// //     }  
// //     show() {
// //       return this.present() + ', it is a ' + this.company
// //     }
// //   }
  
// //   const myproduct = new company( "12 lakh", "Mustang");
// // console.log(myproduct.show());

// hello = function(){
//     return `<!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>JS Documents</title>
//         <script src="pro.jsx"></script>
//     </head>
//     <body>
//         <div id="root"></div>
//          <div class="navbar" id="nav"></div>
//     </body>
//     <script src="pro.js"></script>
// </html>`
// }

// document.getElementById("demo").innerHTML = hello();

// helloS = () =>{
// return `<!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>JS Documents</title>
//         <script src="pro.jsx"></script>
//     </head>
//     <body>
//         <div id="root"></div>
//          <div class="navbar" id="nav"></div>
//     </body>
//     <script src="pro.js"></script>
// </html>`;
// }

// document.getElementById("remo").innerHTML =helloS();
// console.log(helloS());

// class Header{
//     constructor(){
//         this.color = "red";
//     }
//     changeColor = function(){
//         document.getElementById("kemo").innerHTML += this;
//     }
// }

// const myheader = new Header();
// window.addEventListener("load", myheader.changeColor);
// document.getElementById("btn").addEventListener("click", myheader.changeColor);

// class Heading {
//     constructor(){
//         this.name = "sunil";
//     }
//     changeColor1 =( ) => {
//         document.getElementById("gemo").innerHTML = this;
//     }
// }

// const myheading = new Heading();
// window.addEventListener("load", myheading.changeColor1);

// document.getElementById("btnn").addEventListener("click", myheading.changeColor1);




// const home = 
//             {
//                 house: "Radhey House",
//                 noOfMember: 20,
//                 bussiness: "clothes branding", 
//                 location: "khatik colony jagatpura jaipur",

//                 fullInformation: function(){
//                     return this.house + ' ' + this.location;
//                 },
//             };


// const headof = {
//     house: "Radheshyam Tank",
//     noOfMember: 54,
//     bussiness: "oiling company",
//     location: "udaipur rajasthan"
// };

// let fullInformation = home.fullInformation.bind(headof);

// console.log(fullInformation());

const myBtn = document.getElementById("hemo");

myBtn.addEventListener("click", () => {
myBtn.innerHTML = "hello i'm changiing the HTML CONTENT";
});

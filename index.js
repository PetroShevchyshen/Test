// let isShow = false;
// let payLoad = false;

// async function initModal() {
//   let modal = document.querySelector('.modal')
//   modal.style.display = 'block';

//   let buttonSubmit = document.querySelector('#ok');
//   let buttonCancel = document.querySelector('#cancel');

//   // this.isShow = true;
//   return new Promise((resolve) => {
//     const interval = setInterval(() => {
//       buttonSubmit.addEventListener("click", (e)=>{
//         console.log(e);
//         return this.e
//       })
//       console.log(buttonSubmit);
//       clearInterval(interval);
//       resolve(this.e)
//     })
//   })
// }

// function setData(payLoad) {
//   if(payLoad)
//     console.log(payLoad);
// }

let showModalBtn = document.querySelector('.show-modal');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
let yesBtn = document.querySelector('#yes');
let noBtn = document.querySelector('#no');
let main = document.querySelector('main');

showModalBtn.addEventListener("click", () => {
  console.log("click");
  modal.style.display = 'flex';
  showModalBtn.style.display = "none";
})

closeBtn.addEventListener("click", () => {
  modal.style.display = 'none';
  showModalBtn.style.display = "block";
});

yesBtn.addEventListener("click", () => {
  modal.style.display = 'none';
  showModalBtn.style.display = "none";
  let p = document.createElement('p');
  main.append(p);
  p.append("You said YES!!")
})

noBtn.addEventListener("click", () => {
  modal.style.display = 'none';
  showModalBtn.style.display = "block";
})
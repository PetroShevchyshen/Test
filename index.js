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

const showModalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelectorAll('.close-modal');
const yesBtn = document.querySelector('.yesBtn');

showModalBtn.addEventListener("click", () => {
  showModal();
})

closeBtn.forEach(item => {
  item.addEventListener("click", () => {
    hideModal();
  });
});

yesBtn.addEventListener("click", () => {
  hideModal();
})

function showModal() {
  modal.style.display = 'block';
  showModalBtn.style.display = "none";
}

function hideModal() {
  modal.style.display = 'none';
  showModalBtn.style.display = "block";
}
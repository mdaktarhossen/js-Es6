document.getElementById("add-border").addEventListener("click", ()=>{
  const fiiendsContinear=document.getElementById("fiiends-continear")
  fiiendsContinear.style.border="3px solid yellow"
});

function addBackground(){
  const friends=document.getElementsByClassName("friend")
  for(const friend of friends ){
    friend.style.backgroundColor="green"
  };
};

document.getElementById("add-frined").addEventListener("click", ()=>{
  const root=document.getElementById("fiiends-continear");
  const div=document.createElement("div");
  div.classList.add("friend")
  const h1=document.createElement("h1")
  h1.textContent="my name is aktar"
  div.appendChild(h1);
  root.appendChild(div);
})

document.getElementById("add-frined").addEventListener("click", ()=>{
  const fiiendsContinear=document.getElementById("fiiends-continear");
  const div=document.createElement("div");
  div.classList.add("friend");
  div.innerHTML=`
  <h1>new priend</h1>
  <p>My name is new aktars</p>
  `
  fiiendsContinear.appendChild(div)
})
let save = document.getElementById('save-el');
let countEl= document.getElementById('counter-el');
let count= 0;
console.log(save)
function incrEment(){
   count+=1
   countEl.innerText=count
}
function savingYa(){
    let n1 = count + "-"
    save.textContent += n1
    countEl.textContent = 0
    count=0
}

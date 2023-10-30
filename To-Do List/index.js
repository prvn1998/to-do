const inputBox = document.querySelector('#input-data');
const dataList = document.querySelector('#task-list');
const button  = document.querySelector('button');

button.addEventListener('click', function(){
    if(inputBox.value === ''){
        alert('Please Write Something')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        dataList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
})

dataList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("ticked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", dataList.innerHTML);
}

function showTask(){
    dataList.innerHTML = localStorage.getItem("data");
}
showTask();
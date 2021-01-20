
// Variables
group_1 = document.getElementById('group_1');
group_2 = document.getElementById('group_2');
group_3 = document.getElementById('group_3');
btn_update1 = document.getElementById('btn_game')
btn_clear1 = document.getElementById('btn_clear')
bar_one = document.getElementsByClassName('score')[0]
bar_two = document.getElementsByClassName('score')[1]
bar_three = document.getElementsByClassName('score')[2]
div_one  = document.getElementById('group_one')
let num = 0;
let padding = 0;
// console.log(group_1, group_2, group_3, btn_update, btn_clear)

function update(){
    num ++;
    bar_one.innerHTML = `<p>${num}</p>`
    if (num == 1){
        div_one.style.height = `${100}px`
    }else{
        div_one.style.height = `${num+50*num}px`
    }
    

    
}

btn_clear.onclick = function (){
    if (num === 0){
        num = 0;
    }else{
        num --;
    }
    bar_one.innerHTML = `<p>${num}</p>`
}

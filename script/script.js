
// Variables
group_1 = document.getElementById('group_1');
group_2 = document.getElementById('group_2');
group_3 = document.getElementById('group_3');
btn_update = document.getElementById('btn_game')
btn_clear = document.getElementById('btn_clear')
bar_one = document.getElementById('group_one')
bar_two = document.getElementById('group_two')
bar_three = document.getElementById('group_three')
let num = 0;
let padding = 0;
// console.log(group_1, group_2, group_3, btn_update, btn_clear)

function update(){
    num ++;
    bar_two.style = 'padding-top: 5%'
    bar_two.innerHTML = `<p style="${padding}%">${num}</p>`
    
}

btn_clear.onclick = function (){
    if (num === 0){
        num = 0;
    }else{
        num --;
    }
    bar_two.style = 'padding-top: 0%';
    bar_two.innerHTML = `<p style="${padding}%">${num}</p>`
}

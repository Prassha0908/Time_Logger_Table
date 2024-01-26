
// TABLE 

const start = document.getElementById('btn-sel')
const button2 = document.getElementById('btn-resel')
const task = document.getElementById('task')
const discription = document.getElementById('discription')
const duration = document.getElementById('duration')
const table = document.getElementById('table')
const timer = document.getElementById('sec')


let count = 0
let intervalId
let curr;
function select(){

    if(task.value==''||discription.value==''){
        alert("Enter the task and description")
        return false
    }
    
    if(start.textContent === 'STOP')
    {
        start.textContent = 'START'
        clearInterval(intervalId)
        start.style.setProperty('background-color','green')
        start.style.setProperty('border-radius','20px')

        // timer.textContent = '00'

        table.innerHTML+=`
        <tr>
        <td>${task.value}</td>
        <td>${discription.value}</td>
        <td>${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}</td>
        </tr>`
        

    }

    else if(start.textContent === 'START')
    {
        start.textContent = 'STOP'
        min = 0;
        hr = 0;
        sec = 0;
        curr = 0;
        intervalId = setInterval(function() {
            // curr++;
            console.log(sec)
            // document.getElementById('count').innerText = curr%60;
            sec.textContent=(++sec).toString().padStart(2,'0');
            if(sec>59)
            {
                sec=0;
                min.textContent=(++min).toString().padStart(2,'0');
                if(min>59)
                {
                    min=0;
                    hr.textContent=(++hr).toString().padStart(2,'0');
                }
            }
            
            }, 1000)

        start.style.setProperty('background-color','red')
        start.style.setProperty('border-radius','20px')
    }

    return true


}
start.addEventListener('click',select)


function restart(){
    table.innerHTML = '<tr> <th>task</th> <th>discription</th> <th>duration</th> </tr>'  //reset entire table

    task.value = ''     // -->values in input box will be cleared
    discription.value = ''
    duration.value = ''
}
button2.addEventListener('click',restart)
















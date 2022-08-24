let allSeats=document.querySelectorAll('.seats:not(.occupied)')
let spanCount=document.querySelector('.number')
let spanTotal=document.querySelector('.total')
let count=0;
let button=document.querySelector('button');
let ticketPrice=150;
let select=document.querySelector('select')
let screen=document.querySelector('.screen')

allSeats.forEach(function(items) 
{
    items.addEventListener('click',function()
    {
        items.classList.toggle('selected')
        console.log(items.classList)
        if(items.classList[1])
        {
            count++;
            spanCount.textContent=`${count}`;
            let gstVar=count*150;
            spanTotal.textContent=`${count*150+18*gstVar/100}`;
        }
        else
        {
            count--;
            spanCount.textContent=`${count}`;
            let gstVar=count*150;
            spanTotal.textContent=`${count*150+18*gstVar/100}`;
        }
    })
})

allSeats.forEach(function(items)
{
    button.addEventListener('click',function()
    {
        if(items.classList.contains('selected'))
        {
            items.classList.add('coloring')
            items.classList.add('occupied')
        }
    })
})


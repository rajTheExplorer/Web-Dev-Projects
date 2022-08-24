let allLis=document.querySelectorAll('li')
allLis.forEach(function(items)
{
    items.addEventListener('click',function()
    {
        items.classList.add('strike')
    })
})

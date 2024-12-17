const a = document.getElementById('UserName')
const b = document.getElementById('Welcome')
a.addEventListener('submit', function(event){
    event.preventDefault();
    const user = document.getElementById('Name').value
    b.textContent=`Welcome ${user}`

})
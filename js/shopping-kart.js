const nameEmpty=document.querySelector('#cusName').value;
const addEmpty=document.querySelector('#address').value;
const telEmpty=document.querySelector('#cusTel').value;
const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    if((nameEmpty===''&& addEmpty===''&&telEmpty==='')){
        alert('Please enter your name, address, and tel.');
    }else{
        console.log('passed');
    }
})




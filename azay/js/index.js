




const storeData=()=>{
    const name=document.querySelector('.userName').value
    const email=document.querySelector('.userEmail').value
    const number=document.querySelector('.userNumber').value
    const subject=document.querySelector('.userNumber').value
    const message=document.querySelector('.userText').value

    const data = {
        name:name,
        email:email,
        number:number,
        subject:subject,
        message:message
    };
    fetch('http://localhost:8000/formData',{method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

})
        
}

document.querySelector('.onsumi').addEventListener('click', storeData);

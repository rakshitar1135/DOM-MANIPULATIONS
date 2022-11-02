function saveTOlocalstorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.EMAILID.value;
    const phonenumber=event.target.phonenumber.value;
    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    }

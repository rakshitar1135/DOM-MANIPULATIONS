function saveTOlocalstorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.EMAILID.value;
    const phonenumber=event.target.phonenumber;
    localStorage.setItem('name',name)
    localStorage.setItem('email',email);
    localStorage.setItem('phonenumber',phonenumber)
}

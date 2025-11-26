// write cool JS hwere!!

// #region modal stuff
// grab a handle to the modal button
const tilmeldButton = document.getElementById('modalTrigger')
tilmeldButton.addEventListener('click', toggleModal)

// close icon
const closeIcon = document.getElementById('closeIcon')
closeIcon.addEventListener('click', toggleModal)




// hides and show the window
function toggleModal() {
    clearForm()
    const modalElement = document.getElementById('modal')
    modalElement.classList.toggle('hidden')
}




// #endregion modal stuff





// get submit button reference
const submitButton = document.getElementById('formSubmit')

// add eventlistner on click of submit button
submitButton.addEventListener('click', (event) => {
    // prevents form default submit and page reload
    event.preventDefault();

    // calls the validateForm code as expression in the if statement
    if (validateForm()) {
        console.log('form is valid');
        // send data til server here
    } else {
        console.log('form is NOT valid');
    }
})

//---------------------------------------------------------------------

// validates the form inputs with waterfall/cascade tests
function validateForm() {

    // get input values
    const nameValue = document.getElementById('name').value
    const emailValue = document.getElementById('email').value

    // get user feedback element
    const userFeedback = document.getElementById('message')



    // name test
    if (nameValue.length < 2) {

        console.log('Name is too short');
        showMessage('Name is too short')
        return false
    }

    // email test
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/g;

    // Test if the email matches the regex pattern
    let emailValid = emailRegex.test(emailValue);

    if (!emailValid) {

        showMessage('Email is invalid')
        return false
    }

    
    /// all tests passed
    showMessage('thanks for submitting the form!')
    return true
}


// clean ups

// shows a message to the user
function showMessage(message) {
    const userFeedback = document.getElementById('message')
    userFeedback.innerText = message
}



// clears the form inputs and messages
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').innerText = '';
}   
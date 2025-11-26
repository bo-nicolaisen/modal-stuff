// write cool JS hwere!!

// grab a handle to the modal button
const modalTriggerButton=document.getElementById('modalTrigger')


modalTriggerButton.addEventListener('click',toggleModal)

// close icon

const closeIcon=document.getElementById('closeIcon')
closeIcon.addEventListener('click',toggleModal)




// hides and show the window
function toggleModal(){
      const modalElement=document.getElementById('modal')
  modalElement.classList.toggle('hidden')
}
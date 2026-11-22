const noticeButton=document.getElementById('noticeButton');if(noticeButton)noticeButton.addEventListener('click',()=>{const notice=document.getElementById('notice');notice.classList.add('show');setTimeout(()=>notice.classList.remove('show'),5000)})

const enquiryForm=document.getElementById('enquiryForm');if(enquiryForm)enquiryForm.addEventListener('submit',event=>{event.preventDefault();document.getElementById('formMessage').textContent='Form checked in this demo. No details were sent.'})

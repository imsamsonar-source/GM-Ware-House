const noticeButton=document.getElementById('noticeButton');if(noticeButton)noticeButton.addEventListener('click',()=>{const notice=document.getElementById('notice');notice.classList.add('show');setTimeout(()=>notice.classList.remove('show'),5000)})

const noteList=document.querySelector('#noteList');const addNote=document.getElementById('addNote');if(addNote)addNote.addEventListener('click',()=>{const input=document.getElementById('noteInput');if(!input.value.trim())return;const li=document.createElement('li');li.textContent=input.value.trim()+' ';const remove=document.createElement('button');remove.textContent='Remove';remove.setAttribute('aria-label','Remove planning note');remove.addEventListener('click',()=>li.remove());li.appendChild(remove);document.getElementById('noteList').appendChild(li);input.value=''})

const enquiryForm=document.getElementById('enquiryForm');if(enquiryForm)enquiryForm.addEventListener('submit',event=>{event.preventDefault();document.getElementById('formMessage').textContent='Form checked in this demo. No details were sent.'})

const clearNotes=document.getElementById('clearNotes');if(clearNotes)clearNotes.addEventListener('click',()=>{noteList.innerHTML='';});

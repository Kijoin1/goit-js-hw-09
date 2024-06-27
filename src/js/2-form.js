let formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form')

form.addEventListener('input', () => {
const formListData = new FormData(form)
formData.email = (formListData.get('email')).trim()
formData.message = (formListData.get('message')).trim()

saveToLS('feedback-form-state', formData)
})

window.addEventListener('DOMContentLoaded', () => {
const feedbackForm = loadFromLS('feedback-form-state')

form.elements.email.value = feedbackForm?.email || '';
form.elements.message.value = feedbackForm?.message || '';

})


function saveToLS(key, value) {
    const jsonFormData = JSON.stringify(value)
    localStorage.setItem(key, jsonFormData)
} 

function loadFromLS(key) {
    const json = localStorage.getItem(key)
    try {
        const data = JSON.parse(json)
        return data
    } catch (error) {
        return json
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((formData.email.length != 0) && (formData.message.length != 0)) {

    const email = formData.email;
    const messege = formData.message
    const data = {email, messege}
    console.log(data);
    localStorage.removeItem('feedback-form-state')

    form.reset()
} else {
    alert('Fill please all fields');
}
})
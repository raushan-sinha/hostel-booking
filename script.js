//todo: Form Validation Logic -
const form = document.querySelector('#hostelBookingForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
        name: formData.get('firstName') + ' ' + formData.get('lastName'),
        email: formData.get('email'),
        payment: formData.get('payment'),
    }

    //todo: Input validation - 
    if (!data.name || !data.email || !data.payment) {
        alert('Please fill all required fields.');
        return;
    }

    console.log('Form: ', data);
     alert('Form submitted successfully.');
     
     form.reset();
})
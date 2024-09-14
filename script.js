document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    
    if (name && email && description) {
        document.getElementById('message').innerHTML = 
            `<p>Thank you, ${name}. Your complaint has been submitted successfully!</p>`;
        
        // Reset form fields
        document.getElementById('complaintForm').reset();
    } else {
        document.getElementById('message').innerHTML = 
            '<p style="color: red;">Please fill out all required fields.</p>';
    }
});

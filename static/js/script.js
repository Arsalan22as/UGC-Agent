document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file');
    const submitButton = document.querySelector('button[type="submit"]');
    
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const fileExt = file.name.split('.').pop().toLowerCase();
            if (fileExt !== 'csv' && fileExt !== 'json') {
                alert('Please upload only CSV or JSON files.');
                this.value = '';
                submitButton.disabled = true;
            } else {
                submitButton.disabled = false;
            }
        }
    });
    
    // Form validation
    document.querySelector('form').addEventListener('submit', function(event) {
        if (!fileInput.files.length) {
            event.preventDefault();
            alert('Please select a file to upload.');
        }
    });
});


function toggleGuidelines() {
    const guidelinesBody = document.getElementById('formatGuidelinesBody');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (guidelinesBody.style.display === 'none') {
        guidelinesBody.style.display = 'block';
        toggleIcon.textContent = '▲';
    } else {
        guidelinesBody.style.display = 'none';
        toggleIcon.textContent = '▼';
    }
}
import axios from 'axios';

// Get the file input element.
const fileInput = document.getElementById('file-input');

// Add a click event listener to the upload button.
document.querySelector('.AssetsUploadBtn').addEventListener('click', async () => {
  // Get the files that the user has selected.
  const files = fileInput.files;

  // Create a FormData object to store the files.
  const formData = new FormData();

  // Add the files to the FormData object.
  for (const file of files) {
    formData.append('files', file);
  }

  // Upload the files to the server.
  const response = await axios.post('/upload', formData);

  // Handle the response from the server.
});
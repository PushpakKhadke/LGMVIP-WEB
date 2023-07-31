let registrationData = [];

const imageInput = document.getElementById("image");
const imageNameDisplay = document.getElementById("imageName");

imageInput.addEventListener("change", () => {
  const selectedFile = imageInput.files[0];
  if (selectedFile) {
    imageNameDisplay.textContent = `Selected Image Name: ${selectedFile.name}`;
  } else {
    imageNameDisplay.textContent = "";
  }
});

function submitForm() {
  const form = document.getElementById("registrationForm");

  // Get form data
  const name = form.name.value;
  const email = form.email.value;
  const image = form.image.files[0];
  const phone = form.phone.value;
  const skills = form.skills.value;

  // Clear the form
  form.reset();
  imageNameDisplay.textContent = ""; // Clear the image name display

  // Store the data
  registrationData.push({ name, email, image, phone, skills });

  // Display the data
  displayData();
}

function displayData() {
  const displayDataContainer = document.getElementById("displayDataContainer");

  let displayDataHTML = "";

  registrationData.forEach((data, index) => {
    displayDataHTML += `
      <div class="registrationData">
        <h3>Registration Details (${index + 1}):</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email ID:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        ${
          data.image
            ? `<img src="${URL.createObjectURL(data.image)}" alt="User Image" class="user-image">`
            : ""
        }
      </div>
    `;
  });

  displayDataContainer.innerHTML = displayDataHTML;
}

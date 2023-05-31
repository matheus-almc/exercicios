const firstName = prompt("Enter recruit's first name:")
const surname = prompt("Enter the recruit's last name:")
const fieldOfStudy = prompt("Enter the recruit's field of study:")
const dateOfBirth = prompt("Enter the recruit's date of birth:")

alert(
  "Registered successfully\n" +
  "\nFirst Name: " + firstName + " " + surname +
  "\nField Of Study: " + fieldOfStudy +
  "\nDate Of Birth: " + (2023 - dateOfBirth)
  )
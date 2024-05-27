const submitBtn = document.querySelector('.submit');


submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Impede o envio do formulário
  confirmSubmission();
});

function confirmSubmission() {
  const userConfirmed = confirm("Are you sure you want to submit the form?");
  if (userConfirmed) {
    window.location.href = "./index.html";

    form.submit();
  }
}

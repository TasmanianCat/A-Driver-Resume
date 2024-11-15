'use strict';

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();

    // Show the fade area and submitting process immediately when the user clicks the submit button
    fadeArea.classList.add('fade-area-show');
    submittingProcess.classList.add('submitting-process-show');

    // Serialize form data and send it via AJAX
    var userFormData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'form/send.php',
      data: userFormData,
      success: function () {
        // Hide submitting process and show confirmation modal on success
        submittingProcess.classList.remove('submitting-process-show');
        modalWindow.classList.add('modal-window-show');

        // Clear the form fields after successful submission
        $('#uname').val('');
        $('#uemail').val('');
        $('#uphone').val('');
        $('#msubject').val('');
        $('#umessage').val('');
      },
      error: function (xhr, status, error) {
        // Display error message to the user and hide submitting process
        alert('An error occurred: ' + error);
        submittingProcess.classList.remove('submitting-process-show');
        fadeArea.classList.remove('fade-area-show');
      },
    });
  });
});

// JavaScript for managing modal and fade area visibility
const fadeArea = document.getElementById('fadeArea');
const submittingProcess = document.getElementById('submittingProcess');
const modalWindow = document.getElementById('modalWindow');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
  fadeArea.classList.remove('fade-area-show');
  submittingProcess.classList.remove('submitting-process-show');
  modalWindow.classList.remove('modal-window-show');
});

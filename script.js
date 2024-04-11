$(document).ready(function() {
    $('#tax-calculator-form').submit(function(event) {
      event.preventDefault();
  
      let isValid = true;
  
      const income = parseFloat($('#income').val());
      if (isNaN(income) || income < 0) {
        $('#income').addClass('is-invalid');
        $('#income-error-msg').show();
        isValid = false;
      } else {
        $('#income').removeClass('is-invalid');
        $('#income-error-msg').hide();
      }
  
      const extraIncome = parseFloat($('#extra-income').val());
      if (isNaN(extraIncome) || extraIncome < 0) {
        $('#extra-income').addClass('is-invalid');
        $('#extra-income-error-msg').show();
        isValid = false;
      } else {
        $('#extra-income').removeClass('is-invalid');
        $('#extra-income-error-msg').hide();
      }
  
      const ageGroup = $('#age-group').val();
      if (!ageGroup) {
        $('#age-group').addClass('is-invalid');
        $('#age-group-error-msg').show();
        isValid = false;
      } else {
        $('#age-group').removeClass('is-invalid');
        $('#age-group-error-msg').hide();
      }
  
      const deductions = parseFloat($('#deductions').val());
      if (isNaN(deductions) || deductions < 0) {
        $('#deductions').addClass('is-invalid');
        $('#deductions-error-msg').show();
        isValid = false;
      } else {
        $('#deductions').removeClass('is-invalid');
        $('#deductions-error-msg').hide();
      }
  
      if (!isValid) {
        return;
      }
  
      let taxRate = 0;
      let totalIncome = income + extraIncome;
  
      if (ageGroup === '18-40') {
        if (totalIncome > 800000) {
          taxRate = 0.3;
        }
      } else if (ageGroup === '40-60') {
        if (totalIncome > 800000) {
          taxRate = 0.4;
        }
      } else if (ageGroup === '60+') {
        if (totalIncome > 800000) {
          taxRate = 0.1;
        }
      }
  
      const tax = (totalIncome - deductions - 800000) * taxRate;
      const finalIncome = totalIncome - tax;
  
      $('#result').html(`Your overall income will be ${finalIncome.toFixed(2)} 
      after tax deductions.`);
      $('#resultModal').modal('show');
    });
  });
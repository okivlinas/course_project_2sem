function validateForm() {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    let tourInput = document.getElementById("choi");
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Пожалуйста, введите корректный адрес электронной почты");
      emailInput.focus();
      return false;
    }

    alert("Спасибо за отправку формы!");
    return true;
  }
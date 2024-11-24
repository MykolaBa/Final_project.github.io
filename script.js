// Валідація форми на frontend
document.getElementById("price-action").onclick = function (event) {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми

  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");
  const productField = document.getElementById("product");

  if (nameField.value.trim() === "") {
    alert("Заповніть поле 'Name'!");
    nameField.focus();
  } else if (phoneField.value.trim() === "") {
    alert("Заповніть поле 'Phone'!");
    phoneField.focus();
  } else if (productField.value.trim() === "") {
    alert("Заповніть поле 'Product'!");
    productField.focus();
  } else {
    alert(`Дякуємо, ${nameField.value}! Ваша заявка на '${productField.value}' прийнята. Ми зв'яжемося з вами за телефоном ${phoneField.value}.`);
    // Очистити поля після успішної відправки
    nameField.value = "";
    phoneField.value = "";
    productField.value = "";
  }
};

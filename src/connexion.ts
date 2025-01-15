let btnConnexion: HTMLElement | null = document.querySelector(".btnConnexion");

btnConnexion?.addEventListener("click", () => {
  let messageError: HTMLElement | null =
    document.querySelector(".messageError");

  if (messageError) {
    messageError.innerText = "";
  }

  let email: HTMLElement | null = document.querySelector("#email");

  let inputPassword: HTMLElement | null =
    document.querySelector("#inputPassword");

  if (email && email.value == "email@mail.com") {
    if (inputPassword && inputPassword.value == "123456") {
      document.location.href = "/todo";
    } else {
      if (messageError) {
        messageError.innerText = "Email ou mot de passe incorrecte";
      }
      return;
    }
  } else {
    if (messageError) {
      messageError.innerText = "Email ou mot de passe incorrecte";
    }

    return;
  }
});

document.querySelectorAll(".btn-adotar").forEach(botao => {

    botao.addEventListener("click", () => {
  
      let nome = prompt(" Para continuar, digite seu nome:");
     
      if (!nome || nome.trim() === "") {
        alert("Você precisa informar um nome para continuar a adoção.");
        return;
      }
  
      const card = botao.closest(".produto-card");
  
      const nomeCachorro = card.querySelector("h3").textContent;
  
      alert(` Obrigado, ${nome}! Você iniciou a adoção do ${nomeCachorro}. Entraremos em contato em breve!`);
  
      card.classList.add("adotado");
     
      botao.textContent = "Adotado ✔";
      botao.style.backgroundColor = "#4caf50";
      botao.disabled = true;
      botao.style.cursor = "not-allowed";
    });
  
  });
  
function renderWinScreen() {
    const main = document.querySelector(".main");
    main.textContent = "";
    const title = document.createElement("h1");
    title.textContent = "Вы победили";
    const buttonBox = document.createElement('div')
  
    window.application.renderBlock("button", buttonBox, "В Лобби", ()=>{window.application.renderScreen("lobbyScreen")});

   
    main.appendChild(title);
    main.appendChild(buttonBox)

  }
  
  window.application.screens["winScreen"] = renderWinScreen;
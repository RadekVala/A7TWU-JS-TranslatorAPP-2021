const userInputEl = document.getElementById("userInputEl");
const buttonEl = document.querySelector("#buttonEl");
const outputEl = document.querySelector("#outputEl");

buttonEl.onclick = function () {
  console.log("User typed in: ", userInputEl.value);
  const userInputText = userInputEl.value;

  if (userInputText.length > 1) {
    const url = `https://api.mymemory.translated.net/get?q=${userInputText}&langpair=cs|en`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        outputEl.value = data.responseData.translatedText;
      });
  }
};

<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      button {
        padding: 10px 20px;
        margin: 10px;
        border: none;
        border-radius: 5px;
        background-color: lightgray;
        cursor: pointer;
      }
      .correct {
        background-color: green;
      }
      .incorrect {
        background-color: red;
      }
      .message {
        margin-top: 10px;
        font-size: 20px;
        color: white;
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Pergunta #1</h1>
      <p>Qual é a capital do Brasil?</p>
      <button id="optionA">A) Rio de Janeiro</button>
      <button id="optionB">B) São Paulo</button>
      <button id="optionC">C) Salvador</button>
      <button id="optionD">D) Brasília</button>
      <div id="messageCorrect" class="message correct">Resposta Correta!</div>
      <div id="messageIncorrect" class="message incorrect">Resposta Incorreta!</div>
    </div>

    <script>
      const optionA = document.getElementById("optionA");
      const optionB = document.getElementById("optionB");
      const optionC = document.getElementById("optionC");
      const optionD = document.getElementById("optionD");
      const messageCorrect = document.getElementById("messageCorrect");
      const messageIncorrect = document.getElementById("messageIncorrect");

      optionA.addEventListener("click", function () {
        messageCorrect.style.display = "block";
        messageIncorrect.style.display = "none";
      });
      optionB.addEventListener("click", function () {
        messageCorrect.style.display = "none";
        messageIncorrect.style.display = "block";
      });
      optionC.addEventListener("click", function () {
        messageCorrect.style.display = "none";
        messageIncorrect.style.display = "block";
      });
      optionD.addEventListener("click", function () {
        messageCorrect.style.display = "none";
        messageIncorrect.style.display = "block";
      });
    </script>
  </body>
</html>

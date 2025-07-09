<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Color-sound-Word</title>
  <style>
    .color-button {
      width: 100px;
      height: 100px;
      display: inline-block;
      margin: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Color-sound-Word</h1>

  <div id="container">
    <div class="color-button" style="background-color: red;" onclick="playSound('red')"></div>
    <div class="color-button" style="background-color: blue;" onclick="playSound('blue')"></div>
    <div class="color-button" style="background-color: green;" onclick="playSound('green')"></div>
  </div>

  <script>
    function playSound(color) {
      const audio = new Audio(`sounds/${color}.mp3`);
      audio.play();
    }
  </script>
</body>
</html>

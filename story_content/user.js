function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qIOUco8LJ8":
        Script1();
        break;
      case "5r3hvEkz2vj":
        Script2();
        break;
      case "6Xw6y0g4GQh":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('BGSound');
audio.src="kids-cooking-160439.m4a";
audio.load();
audio.play();
audio.volume=1;
}

function Script2()
{
  toggleFullscreen();
}

function Script3()
{
  toggleFullscreen();
}


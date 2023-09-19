function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5njkjQZipFN":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="rule.mp3";

audio.load();
audio.play();
audio.volume=0.3;
}


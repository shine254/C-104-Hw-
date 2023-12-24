  Webcam.set({
    width:350,
    height:300,
    image_format:'png',
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHtml = '<img id="captured_image" src="'+data_url+'"/>';
    });
}

 console.log('ml5 version:', ml5,version);

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/[...]')
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Dude, Dunkin only has 1 donut left! Stop!");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}
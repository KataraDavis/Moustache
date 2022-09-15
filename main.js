noseX=0;
noseY=0;


function preload()
{
clown_nose = loadImage('https://i.postimg.cc/zGCfpLY4/moustache-removebg-preview-1.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function draw()
{
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose, noseX, noseY, 50, 60);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function preload() {
    clownNose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
        
    }
    
    var noseX=0;
    var noseY=0;
    
    function setup() {
        canvas=createCanvas(400,400);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(400,400);
        video.hide();
    
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on("pose",gotPoses);
    }
    
    function gotPoses(results) {
        if (results.length>0) {
            noseX=results[0].pose.nose.x-20;
            noseY=results[0].pose.nose.y-20;
            console.log(results);
            console.log("nose x=",results[0].pose.nose.x-20);
            console.log("nose y=",results[0].pose.nose.y-25);
        }
    }
    
    function modelLoaded() {
        console.log("The PoseNet model has been uploaded!😀");
    }
    
    function draw() {
        image(video,0,0,400,400);
        image(clownNose,noseX,noseY,50,50);
    }
    
    function take_snapshot() {
       save("MyRudolphPicture.png"); 
    }
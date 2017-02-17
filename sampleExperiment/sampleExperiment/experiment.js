/* Global Variables */
/* the developer should define variables and constants here */
/* We define a room with 3 walls, floor and ceiling */
/* We define a ball which bounces in the xy plane */
/* We define modifiable prameters : gravity, ball size, initial velocity */
/* We support draggable ball */
/* Scene Dimensions (in meters: at z = 0) */

object_position_x = 0;
object_position_y = 0;
object_position_z = 5;

var cube;
var teapot;
var eye_glasses;
var bulb;
var ball;
var screen;
var object;
light_position_x = 0;
light_position_y = 0.1;
light_position_z = 8;

/******************* Interaction functions ***********************/

/**
 * This function implements custom dragging of the ball.
 * <p>
 * It ensures that the ball is not dragged beyond the permissible boundaries.
 * In other applications you can move more than one element as well.
 * <p>
 * @param element    Pointer to ball object
 * @param newpos     New 3D position (THREE.Vector3)
 */
function myBallDrag(element, newpos)
{
    myBallX = newpos.x;
    if (newpos.x < (leftB + myBallRadius)) { myBallX = (leftB + myBallRadius) }
    else if (newpos.x > (rightB - myBallRadius)) { myBallX = (rightB - myBallRadius) }
    myBallY = newpos.y;
    if (newpos.y < (bottomB + myBallRadius)) { myBallY = (bottomB + myBallRadius); }
    else if (newpos.y > (topB - myBallRadius)) { myBallY = (topB  - myBallRadius); }
    myBallZ = newpos.z;

    myBall.position.set(myBallX, myBallY, myBallZ);
}

/******************* End of Interaction functions ***********************/

/******************* GUI control objects code ***********************/


/*
 * This function handles the Y acceleration (gravity) slider change
 * <p>
 * Updates the myBall acceleration variable.
 * Effect is felt from the next animation frame.
 * <p>
 * @param newValue       New Value of the slider
 */




/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Bouncing Ball experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shws a bouncing ball constrained by left, right, top and bottom walls.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>X&nbsp;&nbsp;:&nbsp;Controls the X position of the ball.</li>";
    helpContent = helpContent + "<li>Y&nbsp;&nbsp;:&nbsp;Controls the Y position of the ball.</li>";
    helpContent = helpContent + "<li>VX&nbsp;:&nbsp;Controls the X velocity of the ball.</li>";
    helpContent = helpContent + "<li>VY&nbsp;:&nbsp;Controls the Y velocity of the ball.</li>";
    helpContent = helpContent + "<li>AY&nbsp;:&nbsp;Controls the Y acceleration of the ball.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You also have an additional text input to control the coefficient of restitution of the bottom floor.</p>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the ball will bounce around obeyng the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the four experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>X&nbsp;&nbsp;:&nbsp;Shows the X position of the ball.</li>";
    helpContent = helpContent + "<li>Y&nbsp;&nbsp;:&nbsp;Shows the Y position of the ball.</li>";
    helpContent = helpContent + "<li>VX&nbsp;:&nbsp;Shows the X velocity of the ball.</li>";
    helpContent = helpContent + "<li>VY&nbsp;:&nbsp;Shows the Y velocity of the ball.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>In addition you will also see two sliders showing potential and kinetic energy.</p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>You can also position the ball by dragging and dropping it. You can only do this in the setup stage. This has been prevented in the animation stage.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Bouncing Ball experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shws a bouncing ball constrained by left, right, top and bottom walls.</p>";
    infoContent = infoContent + "<h3>Collision</h3>";
    infoContent = infoContent + "<p>When an object collides with a surface, the direction of velocity normal to the surface is reversed.</p>";
    infoContent = infoContent + "<p>At the time of impact, the ball is deformed because of the force of the wall. This deformation can be easily observed with a sponge ball. If you drop a ball of dough on the floor, it does not bounce, it is only deformed.</p>";
    infoContent = infoContent + "<p>The harder balls are also deformed. But because of the hard nature of the meterial, the hard ball tries to regain it's shape. This attempt to reain the shape reverses the velocity by pushing aainst the wall.</p>";
    infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the velocity in the X direction reverses while the velocity in the Y direction reamains the same.</p>";
    infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the velocity in the Y direction reverses while the velocity in the Y direction reamains the same.</p>";
    infoContent = infoContent + "<h3>The coefficient of restitution</h3>";
    infoContent = infoContent + "<p>When the velocity reverses direction, it is not necessary that it's magnitude remains the same.</p>";
    infoContent = infoContent + "<p>The ball may not retain it's original shape and texture. The cricket ball loses it's shine.</p>";
    infoContent = infoContent + "<p>Some of the energy is lost because of the deformation of the ball. The energy loss means that the kinetic energy of the ball will be reduced after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution specifies how much of the velocity will be retained after impact.</p>";
    infoContent = infoContent + "<p>The coefficient of restitution does not affect te velocity in the direction parallel to the impact.</p>";
    infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the magnitude of the velocity in the X direction will reduce as per the coefficient of restitution. The magnitude and sign in Y direction remains the same.</p>";
    infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the magnitude of the velocity in the Y direction will reduce as per the coefficient of restitution. The magnitude and sign in X direction remains the same.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    myBallZ    = -2.0;
}

function initialiseOtherVariables()
{
    // /* Initialise variables */
    myBallRadius = mySceneW/30.0;
    // wallThickness = 0.20;
    //
    // /* Gravity */
    // gravityX = 0.0;
    // gravityY = -9.8;
    //
    // /* Barriers */
    // leftB=mySceneTLX;
    // rightB=mySceneBRX;
    // bottomB=mySceneBRY;
    // topB=mySceneTLY;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create_cube() {
    var geometry_cube = new THREE.BoxGeometry(1, 1, 1);
    var material_cube = new THREE.MeshBasicMaterial({color: 0xA52A2A});
    var cube = new THREE.Mesh(geometry_cube, material_cube);
    cube.castShadow = true;
    cube.receiveShadow = true;
    return cube;
}

function create_ball() {
    var myBall;
    myBall = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    myBall.castShadow = true;
    return myBall
}

function create_screen() {
    geometry = new THREE.BoxGeometry(10, 10, 0.5);
    material = new THREE.MeshLambertMaterial({color: 0xd0d0d0});
    material.opacity = 1;
    myBack = new THREE.Mesh(geometry, material);
    myBack.position.set(0, 0, -2);
    myBack.receiveShadow = true;
    return myBack;
}


/**
 * This function creates the scene of the experiment.
 * It is called by the library during document load. 
 * It is recommended that you do not initialise any variables globally.
 * It is recommended that this function create all the elements first.
 * It should then call a reset function to initialise values.
 * This will allow a reset exepriment functionality to be implemented.
 * <p>
 * It is recommended that the developer first draw a sketch of the experiment on a piece of paper.
 * The sketch should specify the size and initial position of all the elements that comprise the experiment.
 * <p>
 * Once the sketch is ready, the developer should instantiate the elements at the intial location.
 * <p>
 * The (x,y) position of the camera would be set to the center of area of interest.
 * The z position of the camera would be such that the field of vision would cover the height.
 * The aspect ratio of the camera whould cover the width.
 * <p>
 * Two lights would be suitably positioned to light the area of interest.
 * <p>
 * The developer can position the camera and lights if he so chooses.
 * <p>
 * The camera would adjust and cover a wider and taller area depending on the dimensions of the display.
 * hence the background (if any) shoudl extend beyond the area of interest.
 * <p>
 * Finally the developer should call the function PIEsetAreaOfInterest(tlx, tly, brx, bry).
 * The parameters are the top left corner and bottom right corner coordinates.
 * The X axis goes from lef to right of te display and the y axis goes from bottom to up.
 * The area of interst should be wide and tall enough to cover all potential movements.
 * <p>
 * The developer should have a fairly good idea of the controls forthe experiment.
 * Once the scene is setup and is visible, the developer can include the controls and
 * the callback functions needed to update the experiment parameters.
 * The PIE library provides a set of functions to implement common controls.
 * <p>
 * The developer should code and assign proper event handlers to the elements (to control animation).
 */

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var myPrettyCode = function() {
    PIEdragElement(ball);
    PIEdragElement(teapot);
    // PIEdragElement(eye_glasses);
    $('body').append('<div class="lower_panel" style="padding: 0 10px 10px;"><h2 class="title" style="color: #5bc0de;margin-top: 0;">Choose an object to show its shadow</h2><div class="objects_list" style="width: 50%;    float: left;"><button class="btn" id="ball">Ball</button>        <button id="cube" class="btn">Cube</button>        <button class="btn" id="teapot">Teapot</button>        <button class="btn" id="eye_glasses">Spectacles</button>    </div>    <div class="side_buttons" style="margin-right: 30px;    float: right;">    <button class="quiz btn-default btn btn-primary btn-lg ">Play a Quiz</button>        <button class="btn-default btn btn-primary btn-lg " id="home" style="display: none">Home</button>    </div>    <div class="quiz_options" style="display: none;width: 50%;float: left;color: #1ed36f;font-size: large;">Options        <button id="1" class="options btn"><img height="50px"></button>        <button id="2" class="options btn"><img height="50px"></button>        <button id="3" class="options btn"><img height="50px"></button>        <button id="4" class="options btn"><img height="50px"></button>        <div id="text" style="display: inline-flex;margin-left: 20px;"></div>    </div></div>')
    $('#teapot').click(function () {
        // camera.position.z = 10;
        light.position.z = light_position_z;
        bulb.position.z = light_position_z;
        if (object != null) {
            PIEscene.remove(object)
        }
        object = teapot;
        teapot.position.set(object_position_x, object_position_y, object_position_z);
        PIEaddElement(teapot);
    });
    $('#eye_glasses').click(function () {
            // camera.position.z = 10;
            light.position.z = light_position_z;
            bulb.position.z = light_position_z;

            if (object != null) {
                PIEscene.remove(object)
            }
            object = eye_glasses;
            eye_glasses.position.set(object_position_x, object_position_y, object_position_z);
            PIEaddElement(eye_glasses)
        }
    );
    $('#cube').click(function () {
        // camera.position.z = 10;
        light.position.z = light_position_z;
        bulb.position.z = light_position_z;
        if (object != null) {
            PIEscene.remove(object)
        }
        object = cube;
        cube.position.set(object_position_x, object_position_y, object_position_z);
        PIEaddElement(cube)
    });
    $('#ball').click(function () {
        // camera.position.z = 10;
        light.position.z = light_position_z;
        bulb.position.z = light_position_z;
        if (object != null) {
            PIEscene.remove(object)
        }
        object = ball;
        ball.position.set(object_position_x, object_position_y, object_position_z);
        PIEscene.add(ball);
    });
    var option_index;
    function inArray(value, array) {
        for (var i = 0; i < array.length; i++) {
            if (value == array[i])
                return true;
        }
        return false;
    }
    $('.quiz').click(function () {

        // PIEaddElement(object);
        PIEscene.remove(bulb);
        bulb.position.z=30;
        PIEaddElement(bulb);
        light.position.z=30;
        console.log("A");
        // controls.reset();
        // controls.dispose();
        $('#text').text("");
        $('.objects_list').hide();
        $('.quiz').text("Play New Quiz");
        $('.title').text("Choose the correct object whose shadow is displayed on screen");
        $('.quiz_options').show();
        $('#home').show();
        var all_objects = [cube, teapot, eye_glasses, ball];
        var all_objects_image = ['cube.png', 'teapot.png', 'glasses.png', 'ball.png'];
        var index = getRandomInt(0, all_objects.length - 1);
        option_index = getRandomInt(1, 4);
        var image_index_in_options = [];
        $('#' + option_index.toString()).children('img').attr('src', all_objects_image[index]);
        image_index_in_options.push(index);
        for (var i = 1; i <= 4; i++) {
            if (i != option_index) {
                var image_index = getRandomInt(0, all_objects.length - 1);
                while (inArray(image_index, image_index_in_options)) {
                    image_index = getRandomInt(0, all_objects.length - 1);
                }
                image_index_in_options.push(image_index);
                $('#' + i.toString()).children('img').attr('src', all_objects_image[image_index]);
            }
        }
        // camera.position.z = 4.5;
        // light.position.z = 10;
        // bulb.position.z = 10;
        if (object != null) {
            PIEscene.remove(object)
        }
        object = all_objects[index];
        object.position.set(object_position_x, object_position_y, 16);
        PIEaddElement(object)

    });
    $('.options').click(function () {
        var option = $(this).attr('id');
        var option_int = parseInt(option);
        if (option_int == option_index) {
            console.log("right");
            $('#text').text("Your answer is correct")
        } else {
            console.log("wrong");
            $('#text').text("Your answer is wrong")
        }
    });
    $('#home').click(function () {
        window.location.reload();
    });
    $('start').click();

};
function loadExperimentElements()
{
    PIErenderer.setSize(window.innerWidth, 0.8*window.innerHeight);
    loadScript("jquery-3.1.1.min.js", myPrettyCode);
    loader = new THREE.ObjectLoader();
    PIEsetExperimentTitle("Shadows");
    PIEsetDeveloperName("Navneet Nandan");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    ball = create_ball();
    loader.load("rubiks-cube.json",function (obj) {
       cube = obj;
       cube.scale.x = 0.1;
       cube.scale.y = 0.1;
       cube.scale.z = 0.1;
    });
    loader.load("teapot-claraio.json", function (obj) {
        teapot = obj;
    });
    loader.load("lamp.json", function (obj) {
        bulb = obj;
        bulb.position.set(light_position_x, light_position_y - 0.5, light_position_z);
        PIEaddElement(bulb)
    });
    loader.load("glasses1.json", function (obj) {
        eye_glasses = obj;
        eye_glasses.scale.x = 0.04;
        eye_glasses.scale.y = 0.04;
        eye_glasses.scale.z = 0.04;
        eye_glasses.rotation.y = -1.1 * Math.PI / 4;

    });

    /* initialise help and info content */

    /* initialise Scene */
    light = new THREE.PointLight(0xffffff, 1, 0, 0);
    light.position.set(light_position_x, light_position_y, light_position_z);
    light.castShadow = true;
    light.shadowCameraVisible = true;
    PIEscene.add(light);
    // myBall.position.set(object_position_x,object_position_y,object_position_z);

    PIEcamera.position.x = -3;
    PIEcamera.position.y = 0;
    PIEcamera.position.z = 15;

    initialiseScene();

    /* initialise Other Variables */

    initialiseOtherVariables();
    // PIEaddElement(cube);
    // ball = create_ball();
    screen = create_screen();

    PIEaddElement(screen);
    /* Create Ball and add it to scene */
    // myBall = new THREE.Mesh(new THREE.SphereGeometry(myBallRadius, 32, 32), new THREE.MeshLambertMaterial({color:0xededed}));
    // myBall.position.set(object_position_x, object_position_y, object_position_z);
    // myBall.castShadow = true;
    // myBall.receiveShadow = true;
    // PIEaddElement(myBall);
    // /* Allow Dragging of the ball */
    // PIEsetDrag(myBall, myBallDrag);
    // // document.getElementById('teapot').onclick=addcube();
    /* Initialise Wall variables */
    /* All walls extend beynd the room size in both directions */
    // /* Floor */
    // loader = new THREE.TextureLoader();
    // texture = loader.load( '../PIE/images/hardwood2_diffuse.jpg' );
    // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set( 25, 25 );
    // texture.anisotropy = 16;
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, backB * 2 );
    // PIEaddElement(myBack);
    // document.getElementById('Cube').onclick=addcube;
    // $('#Cube').attr('onClick',addcube())
    /* Instantiate experiment controls */
    // initialiseControls();

    /* Reset all positions */
    // resetExperiment();

    // PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/

/**
 * This function resets the position of all experiment elements to their default values.
 * <p>
 * This is called during initial document load.
 * This is also be called by the system provided reset button.
 * <p>
 * Apart from the position, this should also reset all variables which can be controlled by the user.
 * This function will also clear any output variables/graphs
 */

/******************* End of Reset Experiment code ***********************/

/******************* Update (animation changes) code ***********************/

/**
 * This function updates the location of all experiment elements during each animation frame.
 * <p>
 * The function receives both animation time as well as the dt (time difference) from last call.
 * This function is expected to implement the laws of physics to update the position.
 * This function will also update any output variables/graphs
 * <p>
 * Important Note : Boundary Events
 * <p>
 * During any physics simulation you will reach a boundary event.
 * In our case, the boundary even is the ball hitting any of the walls.
 * The boundary event typically changes the sign of velocity/acceleration.
 * The boundary event is most likely to happen in the middle of the two calls.
 * The library allows the experiment to change the simulation time by processing partial time.
 * This function can call a library function with the time remaining to be processed before exiting.
 * <p>
 * @param  t       The time in milliseconds elapsed since the beginning of animation cycle
 * @param  dt      The time in milliseconds elapsed since the last acll to this function
 */
function updateExperimentElements(t, dt)
{
    PIEscene.remove(PIEspotLight);
    // bulb.position.set(light_position_x, light_position_y-1, light_position_z);
}


/******************* Update (animation changes) code ***********************/



/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
/* Global Variables */


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
        PIEscene.remove(bulb);
        bulb.position.z=30;
        PIEaddElement(bulb);
        light.position.z=30;
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

    light = new THREE.PointLight(0xffffff, 1, 0, 0);
    light.position.set(light_position_x, light_position_y, light_position_z);
    light.castShadow = true;
    light.shadowCameraVisible = true;
    PIEscene.add(light);
    PIEcamera.position.x = -3;
    PIEcamera.position.y = 0;
    PIEcamera.position.z = 15;
    // initialiseScene();
    // initialiseOtherVariables();
    screen = create_screen();
    PIEaddElement(screen);
}

function updateExperimentElements(t, dt)
{
    PIEscene.remove(PIEspotLight);
}




/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
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
    helpContent = helpContent + "<h2>Shadows experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows shadows of various objects based on their position with respect to light source and their property.</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p>In the bottom of experiment there are names of 4 different objects. On clicking any of them, that object would be placed in between light source and screen. Do not press STOP button during experiment.</p>";
    helpContent = helpContent + "<h3>Learning Section</h3>";
    helpContent = helpContent + "<p>In the bottom right corner of experiment there is button written \"Play a Quiz\", on clicking that experiment would lead to learning section. In the learning section shadows would be randomly shown to user. User has to identify the shadow from given options. If correct object is identified it would be displayed as correct answer. </p>";
    helpContent = helpContent + "<h3>The drag and drop</h3>";
    helpContent = helpContent + "<p>You can also position some objects during experiment</p>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Description</h2>";
    infoContent = infoContent + "<p>Show various ordinary household objects. Show a glowing light source (bulb) and a screen. Allow student to select and bring object in between light source and screen. Show, the shadow completely based on the object property.</p>";
    infoContent = infoContent + "<h3>Observation</h3>";
    infoContent = infoContent + "<p>List of house hold objects, their property and their shadow (clear, dim, no shadow).</p>";
    infoContent = infoContent + "<h3>Learning</h3>";
    infoContent = infoContent + "<p>Show shadows at random and ask student to specify possible objects. Show experiment and state whether answer is correct or wrong.</p>";

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
    $('body').append('<div class="lower_panel" style="padding: 0 10px 10px;"><h2 class="title" style="color: #5bc0de;margin-top: 0;">Choose an object to show its shadow</h2><div class="objects_list" style="width: 50%;    float: left;"><button class="btn" id="ball">Ball</button>        <button id="cube" class="btn">Cube</button>        <button class="btn" id="teapot">Teapot</button>        <button class="btn" id="eye_glasses">Spectacles</button>    </div>    <div class="side_buttons" style="margin-right: 30px;    float: right;">    <button class="quiz btn-default btn btn-primary btn-lg ">Play a Quiz</button>        <button class="btn-default btn btn-primary btn-lg " id="home" style="display: none">Home</button>    </div>    <div class="quiz_options" style="display: none;width: 50%;float: left;color: #1ed36f;font-size: large;">Options        <button id="1" class="options btn"><img height="50px"></button>        <button id="2" class="options btn"><img height="50px"></button>        <button id="3" class="options btn"><img height="50px"></button>        <button id="4" class="options btn"><img height="50px"></button>        <div id="text" style="display: inline-flex;margin-left: 20px; font-size: x-large;"></div>    </div></div>')
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
            PIEscene.remove(object);
        }
        object = all_objects[index];
        object.position.set(object_position_x, object_position_y, 16);
        PIEaddElement(object)

    });
    $('.options').click(function () {
        PIEscene.remove(bulb);
        bulb.position.z=light_position_z;
        PIEaddElement(bulb);
        light.position.z=light_position_z;
        PIEscene.remove(object);
        object.position.z=object_position_z;
        PIEaddElement(object);
        var option = $(this).attr('id');
        var option_int = parseInt(option);
        if (option_int == option_index) {
            $('#text').text("Your answer is correct")
        } else {
            $('#text').text("Your answer is wrong")
        }
    });
    $('#home').click(function () {
        window.location.reload();
    });
    $('#start').click();

};


function loadExperimentElements()
{
    PIErenderer.setSize(window.innerWidth, 0.8*window.innerHeight);
    loadScript("jquery-3.1.1.min.js", myPrettyCode);
    loader = new THREE.ObjectLoader();
    PIEsetExperimentTitle("6.11.2A Shadows (activity 2)");
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
    screen = create_screen();
    PIEaddElement(screen);
}

function updateExperimentElements(t, dt)
{
    PIEscene.remove(PIEspotLight);
}




/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
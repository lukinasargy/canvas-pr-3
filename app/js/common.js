
  function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(100,100,100,100);
    
    ctx.fillStyle = "rgb(255, 60, 60)";
    ctx.fillRect(0,0,100,100);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.fillRect(150,150,150,150);
    ctx.strokeStyle = "rgb(100,150,0)";
    ctx.strokeRect(150,150,150,150);
    
    ctx.fillStyle = "rgba(0, 254, 0 , 0.5)";
    ctx.clearRect(50,140,150,100);
    
    ctx.beginPath();
    ctx.moveTo(0,0);    
    ctx.lineTo(100,80);
    ctx.lineTo(150,0);
    ctx.lineTo(200,80);
    ctx.lineTo(300, 0);
    ctx.lineTo(250, 150);
    ctx.lineTo(300,300);
    ctx.lineTo(150,230);
    ctx.lineTo(0,300);
    ctx.lineTo(50,150);
    ctx.lineTo(0,0);
    ctx.strokeStyle = "rgb(455,10,0)";
    ctx.stroke();
    ctx.fillStyle = "pink";
    ctx.fill();
   
    
    ctx.beginPath();
    ctx.arc(100,150,5, 0, Math.PI*2, true);
    ctx.arc(200,150,5, 0, Math.PI*2, true);
    ctx.fillStyle = "rgb(455,10,0)";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150,150,20,0, Math.PI, false);
    ctx.strokeStyle = "rgb(455,10,0)";
    ctx.stroke();
    
    //hat
    ctx.beginPath();
    ctx.moveTo(100,80);
    ctx.lineTo(150,0);
    ctx.lineTo(200,80);
    ctx.lineTo(100,80);
    ctx.fillStyle = "rgb(455,10,0)";
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.moveTo(90,80)
    ctx.quadraticCurveTo(100,70,150,70);
    ctx.quadraticCurveTo(210,70,210,80);
    ctx.quadraticCurveTo(200,90,150,90);
    ctx.quadraticCurveTo(90,90,90,80);
    ctx.fillStyle = "#fff";
    ctx.fill();

    
    
    //snow
    for (var i = 1; i<10;i++) {
      for (var j = 1; j<10;j++) {
        ctx.beginPath();
        ctx.arc(i*30,j*30,3, 0, Math.PI*2, true);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
      
    }
    
    
    //path Object box
    var rectangle = new Path2D();
    rectangle.rect(20,240,50,50);
    ctx.fillStyle = "green";
    ctx.fill(rectangle);
    
    var svgp = new Path2D ('M20 260 h 50 v 10 h -50 Z ');
    var svgp2 = new Path2D ('M40 240 h 10 v 50 h -10 Z ');

    ctx.fillStyle = "orange";
    ctx.fill(svgp);
    ctx.fill(svgp2);
    
    


    
    
    }
  };

//WebGL start

//
//function main() {
//  const canvas  = document.querySelector("#glCanvas");
//  
//  const gl = canvas.getContext("webgl");
//  
//  
//  if (gl === null) {
//    alert("Unable to intialize WebGL");
//  };
////  gl.clearColor(0.0,0.0,0.0,1.0);
////  // Clear the color buffer with specified clear color
////  gl.clear(gl.COLOR_BUFFER_BIT);
////  
////  
//   const vsSource = `
//    attribute vec4 aVertexPosition;
//
//    uniform mat4 uModelViewMatrix;
//    uniform mat4 uProjectionMatrix;
//
//    void main() {
//      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
//    }
//  `;
//  //fragment shader
//  const fsSource = `
//    void main() {
//      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
//    }
//  `;
//  
//  // Vertex shader program
//
// const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
//   const programInfo = {
//    program: shaderProgram,
//    attribLocations: {
//      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
//    },
//    uniformLocations: {
//      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
//      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
//    },
//  };
//
//  // Here's where we call the routine that builds all the
//  // objects we'll be drawing.
//  const buffers = initBuffers(gl);
//
//  // Draw the scene
//  drawScene(gl, programInfo, buffers);
//  
//};
//
//
//
//// Initialize a shader program, so WebGL knows how to draw our data
////
//function initShaderProgram(gl, vsSource, fsSource) {
//  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
//  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
//
//  // Create the shader program
//
//  const shaderProgram = gl.createProgram();
//  gl.attachShader(shaderProgram, vertexShader);
//  gl.attachShader(shaderProgram, fragmentShader);
//  gl.linkProgram(shaderProgram);
//
//  // If creating the shader program failed, alert
//
//  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
//    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
//    return null;
//  }
//
//  return shaderProgram;
//}
//
////
//// creates a shader of the given type, uploads the source and
//// compiles it.
////
//function loadShader(gl, type, source) {
//  const shader = gl.createShader(type);
//
//  // Send the source to the shader object
//
//  gl.shaderSource(shader, source);
//
//  // Compile the shader program
//
//  gl.compileShader(shader);
//
//  // See if it compiled successfully
//
//  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//    gl.deleteShader(shader);
//    return null;
//  }
//
//  return shader;
//}
//
//
//function initBuffers(gl) {
//
//  // Create a buffer for the square's positions.
//
//  const positionBuffer = gl.createBuffer();
//
//  // Select the positionBuffer as the one to apply buffer
//  // operations to from here out.
//
//  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//
//  // Now create an array of positions for the square.
//
//  const positions = [
//    -1.0,  1.0,
//     1.0,  1.0,
//    -1.0, -1.0,
//     1.0, -1.0,
//  ];
//
//  // Now pass the list of positions into WebGL to build the
//  // shape. We do this by creating a Float32Array from the
//  // JavaScript array, then use it to fill the current buffer.
//
//  gl.bufferData(gl.ARRAY_BUFFER,
//                new Float32Array(positions),
//                gl.STATIC_DRAW);
//
//  return {
//    position: positionBuffer,
//  };
//}
//
//function drawScene(gl, programInfo, buffers) {
//  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
//  gl.clearDepth(1.0);                 // Clear everything
//  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
//  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
//
//  // Clear the canvas before we start drawing on it.
//
//  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//
//  // Create a perspective matrix, a special matrix that is
//  // used to simulate the distortion of perspective in a camera.
//  // Our field of view is 45 degrees, with a width/height
//  // ratio that matches the display size of the canvas
//  // and we only want to see objects between 0.1 units
//  // and 100 units away from the camera.
//
//  const fieldOfView = 45 * Math.PI / 180;   // in radians
//  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
//  const zNear = 0.1;
//  const zFar = 100.0;
//  const projectionMatrix = mat4.create();
//
//  // note: glmatrix.js always has the first argument
//  // as the destination to receive the result.
//  mat4.perspective(projectionMatrix,
//                   fieldOfView,
//                   aspect,
//                   zNear,
//                   zFar);
//
//  // Set the drawing position to the "identity" point, which is
//  // the center of the scene.
//  const modelViewMatrix = mat4.create();
//
//  // Now move the drawing position a bit to where we want to
//  // start drawing the square.
//
//  mat4.translate(modelViewMatrix,     // destination matrix
//                 modelViewMatrix,     // matrix to translate
//                 [-0.0, 0.0, -6.0]);  // amount to translate
//
//  // Tell WebGL how to pull out the positions from the position
//  // buffer into the vertexPosition attribute.
//  {
//    const numComponents = 2;  // pull out 2 values per iteration
//    const type = gl.FLOAT;    // the data in the buffer is 32bit floats
//    const normalize = false;  // don't normalize
//    const stride = 0;         // how many bytes to get from one set of values to the next
//                              // 0 = use type and numComponents above
//    const offset = 0;         // how many bytes inside the buffer to start from
//    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
//    gl.vertexAttribPointer(
//        programInfo.attribLocations.vertexPosition,
//        numComponents,
//        type,
//        normalize,
//        stride,
//        offset);
//    gl.enableVertexAttribArray(
//        programInfo.attribLocations.vertexPosition);
//  }
//
//  // Tell WebGL to use our program when drawing
//
//  gl.useProgram(programInfo.program);
//
//  // Set the shader uniforms
//
//  gl.uniformMatrix4fv(
//      programInfo.uniformLocations.projectionMatrix,
//      false,
//      projectionMatrix);
//  gl.uniformMatrix4fv(
//      programInfo.uniformLocations.modelViewMatrix,
//      false,
//      modelViewMatrix);
//
//  {
//    const offset = 0;
//    const vertexCount = 4;
//    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
//  }
//}





















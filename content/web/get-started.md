---
title: "Web WorldWind Get Started"
date: 2017-07-27T11:21:56-05:00
draft: false
---

### Getting started is easy. No download necessary.

Simply include a short script in an HTML page, like this:

---

```html
<!DOCTYPE html>
<!-- This is a very simple example of using Web WorldWind. -->
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>WorldWind Example</title>
    <!-- Include the Web WorldWind library. -->
    <script src="http://worldwindserver.net/webworldwind/worldwindlib.js" type="text/javascript"></script>
</head>
<body>
<div style="position: absolute; top: 50px; left: 50px;">
    <!-- Create a canvas for Web WorldWind. -->
    <canvas id="canvasOne" width="1024" height="768">
        Your browser does not support HTML5 Canvas.
    </canvas>
</div>
<script>
    // Register an event listener to be called when the page is loaded.
    window.addEventListener("load", eventWindowLoaded, false);

    // Define the event listener to initialize Web WorldWind.
    function eventWindowLoaded() {
        // Create a WorldWindow for the canvas.
        var wwd = new WorldWind.WorldWindow("canvasOne");

        // Add some image layers to the WorldWindow's globe.
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());

        // Add a compass, a coordinates display and some view controls to the WorldWindow.
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
    }
</script>
</body>
</html>
```
---

This example creates an interactive 3D virtual globe. It first includes the Web WorldWind library, ***worldwindlib.js***.
Then it creates an HTML5 canvas and defines a script that generates the WorldWindow. Finally, it populates the WorldWindow
with two image layers and three control layers.

Click [this link](http://worldwindserver.net/webworldwind/examples/SimplestExample.html) to see the web page it creates
in a new window. Drag the mouse or your finger to pan around the globe. Zoom in using your mouse wheel or a pinch gesture.
Drag the right mouse button or your two fingers upward to tilt the globe.

**Want to learn more?**
Check out the [Examples](/web/examples) to see some simple demonstrations, or go to [Tutorials](/web/tutorials) to try it
yourself!

<br></br>
<br></br>
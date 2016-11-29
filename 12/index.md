# Class 12 – 2016-11-29: ThreeJS & final project work.

## No new problem sets!
## snowflake-a-thon default final project.

## Review problem set 11:  5:45 – 7:00
* Review [ps-011](../11/ps-11.html)

### Questions about final projects.

### ThreeJS: Some Demos.
* Basic Scene setup
    * Coordinates
    * Cameras
    * Lights
* Rendering basic objects like a cube
* Building our own using vertices and faces:

        var geometry = new THREE.Geometry();

        geometry.vertices.push(
          new THREE.Vector3( -10,  10, 0 ),
          new THREE.Vector3( -10, -10, 0 ),
          new THREE.Vector3(  10, -10, 0 )
        );

        geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

        geometry.computeBoundingSphere();

* Loading Geometry
     * Quick plug for blender
     * Quick plug for MagicaVoxel


### Work on final projects.

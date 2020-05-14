

/**
 * Adds a polygon to the map
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addPolygonToMap(map) {
 const lineString = new H.geo.LineString();
			lineString.pushPoint({ lng: 73.16798692463395, lat: 19.21660437855929 });
			lineString.pushPoint({ lng: 73.16821639531541, lat: 19.21684225729611 });
			lineString.pushPoint({ lng: 73.16972526480964, lat: 19.21695607004114 });
			lineString.pushPoint({ lng: 73.16976696556523, lat: 19.21853019837081 });
			lineString.pushPoint({ lng: 73.16963502991563, lat: 19.22008644225114 });
			lineString.pushPoint({ lng: 73.17059064545873, lat: 19.22159224866095 });
			lineString.pushPoint({ lng: 73.16847278690111, lat: 19.22317585583827 });
			lineString.pushPoint({ lng: 73.16685734339711, lat: 19.22160589076611 });
			lineString.pushPoint({ lng: 73.16677528922686, lat: 19.21922464600556 });
			lineString.pushPoint({ lng: 73.16748303776984, lat: 19.21800556870718 });
			lineString.pushPoint({ lng: 73.16655976321042, lat: 19.21737278684815 });
			lineString.pushPoint({ lng: 73.16669887750146, lat: 19.21724012785025 });
			lineString.pushPoint({ lng: 73.16798692463395, lat: 19.21660437855929 });
  map.addObject(
    new H.map.Polygon(lineString, {
      style: {
        fillColor: 'rgba(255, 255, 255, 0.0)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
  );
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'tnuknwCYqGNr2GDKvH8Pjg_GrLZkztoRqgLVJsZdRjA'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lng:73.16798692463395, lat: 19.21660437855929},
  zoom: 16,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);


// Now use the map as required...
addPolygonToMap(map);
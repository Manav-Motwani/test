

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
	const lineString = new H.geo.LineString();
			lineString.pushPoint({ lng: 73.17008888612014, lat : 19.19117165466513});
			lineString.pushPoint({ lng: 73.17372248700617, lat : 19.19466986256505});
			lineString.pushPoint({ lng: 73.1773813158182,  lat : 19.19696787054239});
			lineString.pushPoint({ lng: 73.17644067933634, lat : 19.20107873535372});
			lineString.pushPoint({ lng: 73.17368412968537, lat : 19.21084992271893});
			lineString.pushPoint({ lng: 73.17411261837742, lat : 19.21756177648583});
			lineString.pushPoint({ lng: 73.17638521334246, lat : 19.22590070439105});
			lineString.pushPoint({ lng: 73.18384623807655, lat : 19.23053520968023});
			lineString.pushPoint({ lng: 73.18845865507669, lat : 19.23810065815481});
			lineString.pushPoint({ lng: 73.1882834596837,  lat : 19.24598502757109});
			lineString.pushPoint({ lng: 73.18759331544624, lat : 19.25271680463764});
			lineString.pushPoint({ lng: 73.18188568854302, lat : 19.25649720603959});
			lineString.pushPoint({ lng: 73.17001443265488, lat : 19.25004786318296});
			lineString.pushPoint({ lng: 73.15705036633581, lat : 19.25830445921833});
			lineString.pushPoint({ lng: 73.15061485289306, lat : 19.24031494213543});
			lineString.pushPoint({ lng: 73.1516089711307,  lat : 19.23695982019543});
			lineString.pushPoint({ lng: 73.14690166257378, lat : 19.23617926845481});
			lineString.pushPoint({ lng: 73.14529220875778, lat : 19.23201906169606});
			lineString.pushPoint({ lng: 73.15113997227003, lat : 19.21780822467171});
			lineString.pushPoint({ lng: 73.14761789976508, lat : 19.21551065792998});
			lineString.pushPoint({ lng: 73.14756865388853, lat : 19.20307572142334});
			lineString.pushPoint({ lng: 73.16150654227033, lat : 19.1886757506543});
			lineString.pushPoint({ lng: 73.17008888612014, lat : 19.19117165466513});

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

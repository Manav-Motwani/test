

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
	
	const lineStringu = new H.geo.LineString();
			lineStringu.pushPoint({ lng: 73.17008888612014, lat : 19.19117165466513});
			lineStringu.pushPoint({ lng: 73.17372248700617, lat : 19.19466986256505});
			lineStringu.pushPoint({ lng: 73.1773813158182,  lat : 19.19696787054239});
			lineStringu.pushPoint({ lng: 73.17644067933634, lat : 19.20107873535372});
			lineStringu.pushPoint({ lng: 73.17368412968537, lat : 19.21084992271893});
			lineStringu.pushPoint({ lng: 73.17411261837742, lat : 19.21756177648583});
			lineStringu.pushPoint({ lng: 73.17638521334246, lat : 19.22590070439105});
			lineStringu.pushPoint({ lng: 73.18384623807655, lat : 19.23053520968023});
			lineStringu.pushPoint({ lng: 73.18845865507669, lat : 19.23810065815481});
			lineStringu.pushPoint({ lng: 73.1882834596837,  lat : 19.24598502757109});
			lineStringu.pushPoint({ lng: 73.18759331544624, lat : 19.25271680463764});
			lineStringu.pushPoint({ lng: 73.18188568854302, lat : 19.25649720603959});
			lineStringu.pushPoint({ lng: 73.17001443265488, lat : 19.25004786318296});
			lineStringu.pushPoint({ lng: 73.15705036633581, lat : 19.25830445921833});
			lineStringu.pushPoint({ lng: 73.15061485289306, lat : 19.24031494213543});
			lineStringu.pushPoint({ lng: 73.1516089711307,  lat : 19.23695982019543});
			lineStringu.pushPoint({ lng: 73.14690166257378, lat : 19.23617926845481});
			lineStringu.pushPoint({ lng: 73.14529220875778, lat : 19.23201906169606});
			lineStringu.pushPoint({ lng: 73.15113997227003, lat : 19.21780822467171});
			lineStringu.pushPoint({ lng: 73.14761789976508, lat : 19.21551065792998});
			lineStringu.pushPoint({ lng: 73.14756865388853, lat : 19.20307572142334});
			lineStringu.pushPoint({ lng: 73.16150654227033, lat : 19.1886757506543});
			lineStringu.pushPoint({ lng: 73.17008888612014, lat : 19.19117165466513});
	
	const lineString2 = new H.geo.LineString();
			lineString2.pushPoint({ lng: 73.15202730276384, lat : 19.22858220035955});
			lineString2.pushPoint({ lng: 73.15335771346349, lat : 19.22947700934117});
			lineString2.pushPoint({ lng: 73.15359873674225, lat : 19.22949841242217});
			lineString2.pushPoint({ lng: 73.15368270767917, lat : 19.23064425334803});
			lineString2.pushPoint({ lng: 73.14803762481465, lat : 19.23450011419495});
			lineString2.pushPoint({ lng: 73.1477952693922,  lat : 19.23343605797839});
			lineString2.pushPoint({ lng: 73.1479276148663,  lat : 19.23300593931001});
			lineString2.pushPoint({ lng: 73.14833420978745, lat : 19.23218871645907});
			lineString2.pushPoint({ lng: 73.14831254754871, lat : 19.23171752441295});
			lineString2.pushPoint({ lng: 73.15025055444204, lat : 19.22892292518506});
			lineString2.pushPoint({ lng: 73.15202730276384, lat : 19.22858220035955});
	
	const lineString3 = new H.geo.LineString();
	
			lineString3.pushPoint({ lng: 73.15813265938277, lat : 19.21212866945763});
			lineString3.pushPoint({ lng: 73.15958690990362, lat : 19.21224546482939});
			lineString3.pushPoint({ lng: 73.16005011501218, lat : 19.21280167851558});
			lineString3.pushPoint({ lng: 73.1597159445148,  lat : 19.2134053554291});
			lineString3.pushPoint({ lng: 73.1593454793931,  lat : 19.21394061801702});
			lineString3.pushPoint({ lng: 73.15845804451345, lat : 19.21384935328623});
			lineString3.pushPoint({ lng: 73.15764066909591, lat : 19.21368312743326});
			lineString3.pushPoint({ lng: 73.15708985194208, lat : 19.21289497702861});
			lineString3.pushPoint({ lng: 73.15813265938277, lat : 19.21212866945763});
			
	const lineString4 = new H.geo.LineString();
			
			lineString4.pushPoint({ lng: 73.16448710864351, lat : 19.22325274632739});
			lineString4.pushPoint({ lng: 73.16498911771684, lat : 19.22334653345207});
			lineString4.pushPoint({ lng: 73.16517576524991, lat : 19.22363468489058});
			lineString4.pushPoint({ lng: 73.16567713839495, lat : 19.2238415018918});
			lineString4.pushPoint({ lng: 73.16611104039771, lat : 19.22449341060473});
			lineString4.pushPoint({ lng: 73.16420416260536, lat : 19.22540432553486});
			lineString4.pushPoint({ lng: 73.16416737247631, lat : 19.22386494272756});
			lineString4.pushPoint({ lng: 73.16427345117759, lat : 19.22316761740996});
			lineString4.pushPoint({ lng: 73.16448710864351, lat : 19.22325274632739});
			
	const lineString5 = new H.geo.LineString();
			
			lineString5.pushPoint({ lng: 73.16447441892494, lat : 19.20948579030402});
			lineString5.pushPoint({ lng: 73.16532279838249, lat : 19.20826779287464});
			lineString5.pushPoint({ lng: 73.16606448786136, lat : 19.20885831250565});
			lineString5.pushPoint({ lng: 73.16647596920258, lat : 19.20980207400065});
			lineString5.pushPoint({ lng: 73.16573092770726, lat : 19.21070377192785});
			lineString5.pushPoint({ lng: 73.16474506041909, lat : 19.21106888648927});
			lineString5.pushPoint({ lng: 73.16421886289402, lat : 19.20984312463582});
			lineString5.pushPoint({ lng: 73.16447441892494, lat : 19.20948579030402});

	const lineString6 = new H.geo.LineString();
		
			lineString6.pushPoint({ lng: 73.16493313649559, lat : 19.21499163911191});
			lineString6.pushPoint({ lng: 73.16560284672789, lat : 19.2134636696445});
			lineString6.pushPoint({ lng: 73.16957062277621, lat : 19.21273722372376});
			lineString6.pushPoint({ lng: 73.16970870671165, lat : 19.21427693813431});
			lineString6.pushPoint({ lng: 73.16937581428846, lat : 19.21586301662384});
			lineString6.pushPoint({ lng: 73.16634831555263, lat : 19.21597236330131});
			lineString6.pushPoint({ lng: 73.16493313649559, lat : 19.21499163911191});
	

  map.addObject(
    
	new H.map.Polygon(lineStringu, {
      style: {
        fillColor: 'rgba(255, 255, 255, 0.0)',
        strokeColor: 'rgba(72, 92, 207,1)',
        lineWidth: 5,
		
      }
    })
  );
  
  map.addObject(
  new H.map.Polygon(lineString, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
	);
	
map.addObject(
  new H.map.Polygon(lineString2, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
	);

map.addObject(
  new H.map.Polygon(lineString3, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
	);

map.addObject(
  new H.map.Polygon(lineString4, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
	);

map.addObject(
  new H.map.Polygon(lineString5, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
        strokeColor: 'red',
        lineWidth: 5,
		
      }
    })
	);
	
map.addObject(
  new H.map.Polygon(lineString6, {
      style: {
        fillColor: 'rgba(255, 0, 0, 0.1)',
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
  center: {lng:73.16450146, lat: 19.22150131},
  zoom: 13.5,
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

# Geospatial Data Visualizations

Alex Lende (@ajlende)


## Intro (1 min)

- Alex Lende, SE on UX, Labs
- We tell stories with data: Cerner, Client, Healthcare
- Many stories featured on Systems of Life Media Wall
- Challenge to create rich, meaningful, polished, data visualization for global data on a budget before the building opens in 3 months
- That was last last November—now I've come to understand data visualizations pretty well
- Part of work has been with global visualizations part has been with other 3d visualizations


## Definitions (1 min)

### GIS: Geographical Information Systems
- Formally: Database for image layers containing spacial data maps
- Extended: Any system for showing data on a map

### Cesium
- Cesium is a Javascript library for drawing 3D globes and data
- Cesium isn't, by the strictest definition, a GIS, but it does data presentation
- Cesium can interface with other, more traditional, GISs (more later)


## Types of Map Visualizations (15 min total)

### Paths (2 min)
- Examples: Google Maps, Eclipse, Oregon Gray Wolf, 3D Hang Glider
- Story: Interoperability Ticker
- Use: for showing routes and directions

### Aside: Time in visualizations (1 min)
- Slider along the bottom to show position at a given time
- Extra dimension to data

### Points (2 min)
- Examples: Landmarks, Foursquare
- Story: Client Collaborations, FirstHand
- Use: for labelling things or marking locations

### Aside: Dense Points (1 min)
- PubMed is dense points to make more of a heat map

### Heatmap (2 min)
- Examples: Weather radar
- Story: Biking, Strava
- Use: for showing concentrations, continuous data

### Aside: Be careful (1 min)
- (xkcd) of heat maps turning into population maps

### Choropleth (2 min)
- Examples: Election, Foliage, NCAA College Football
- Use: for showing collective majorities or minorities in an area
- Re-iterate be careful by using percentages and points per capita
- Notice we don't have a SoL visualization of this. I see this one misrepresent data most.

### Bubble (2 min)
- Example: Hans Rosling (Health and Wealth of Nations)
- Story: LightsOn Transactions, CernerDotCom Sessions
- Use: for similar things to choropleth maps

### Aside: Not all data goes on a map choropleth maps, but uses size rather than color (2 min)
- Sometimes, like in Hans Rosling's case colors and other types of charts can be sufficient to convey the data in a meaningful way
- With Longitude and Latitude data, almost always makes sense to plot it
- ZIP code, County, State groups sometimes work
- Country groups less so


## Getting Started with Cesium (12 min)

### Intro (1 min)
- Now you know the types of plots how to actually make the thing
- Cesium is a Javascript library for drawing 3D globes
- Cesium Sandcastle

### Imagery Layers (2 min)
- Interface to traditional GIS: ArcGIS, OpenMaps, GEE
- Football Example

### Data Sources (4 min)
- GeoJSON/TopoJSON
  - JSON based
  - Most popular
  - TopoJson is more concise
  - geojson.io
- KML
  - Keyhole Markup Language
  - XML based
  - Google Maps
- CZML
  - Custom Cesium Markup Language
  - JSON Based
  - Most powerful in Cesium
  - Time dynamic
  - Python and Java tool to build it
- Imagery Layers
  - mapbox/tippecanoe for converting larger sets into tiles
  - Python based tools

### Clock & Camera (2 min)
- Fine-tuned representation of data
- Speed
- Look Direction
- Position via Cartesian (x,y,z) or Cartographic (lon,lat)

### Extras (3 min)
- Deals with leap seconds
- Info Panel
- 3D Tiles
- Entities/3D Models
- Particles
- Atmosphere
- Celestial bodies
- Terrain
- Shadows
- WebVR
- Desktop apps with Electron
- Mobile apps with Cordova
- I'm working on a React Cesium Library


## Conclusion (1 min)

- Maps help better represent data
- Creating them is easy

- @ajlende
- alex.lende@cerner.com
- Feedback is appreciated
- Follow me to the next exciting talk about Systems of Life
- Thank you
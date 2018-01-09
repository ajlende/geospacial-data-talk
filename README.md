# Geospatial Data Visualizations

Alex Lende (@ajlende)


## Intro
- Alex Lende, SE on UX, Labs
- We tell stories with data: Cerner, Client, Healthcare
- Then share them on Systems of Life Media Wall
- When I joined we had the challenge to create rich, meaningful, polished, data visualization for global data on a budget before the building opens in 3 months
- Most of my work is done in 3D (with libraries like Three.js and Cesium.js)
- That was a year and a half ago—now I've come to understand data visualizations pretty well


## Overview

### Map Types
- All can be created with Cesium.js
- Benefits/When to use
- Pitfalls/When not to use
- Examples
  - in the world
  - in Systems of Life

### Making Maps
- How to get started with Cesium.js
- Code examples
- Other tools


## Types of Map Visualizations

### Paths
- Use: for showing routes and directions
- Examples:
  - Google Maps Directions
  - Eclipse
  - Oregon Gray Wolf (Highlighting Oregon's WildLands 2012)
  - 3D Hang Glider
- Systems of Life:
 - Interoperability Ticker
 - Abstract path over time
- Aside: Time in visualizations
  - Slider along the bottom to show position at a given time
  - Extra dimension to data

### Points
- Use: for labeling things or marking locations
- Examples:
  - Google Maps Explore
  - Foursquare
  - Global Science Facilities
- Systems of Life:
  - Client Collaborations
  - FirstHand
- Extra:
  - Dense Points
  - PubMed is dense points to make more of a heat map

### Heatmap
- Use: for showing concentrations, continuous data
- Examples:
  - Weather radar
  - Strava
- Extra:
  - Be careful
  - (xkcd) of heat maps turning into population maps

### Choropleth
- Use: for showing collective majorities or minorities in an area
- Examples:
  - Foliage
  - NCAA College Football
- Extra:
  - Be careful
  - Misleading when data is tied to population—really large areas (Wyoming) might have a smaller population that a much smaller area (Washington, D.C.)
  - (xkcd) Election map example

### Bubble
- Use: for similar things to choropleth maps without the area part
- Examples:
  - Hans Rosling - Health and Wealth of Nations (width = population, height = health|wealth)
  - He was comparing health to wealth, but if you wanted to focus more on the geography, maps are better
- Systems of Life:
  - Cerner.com Sessions
  - LightsOn Transactions
- Extra:
  - Sometimes, like in Hans Rosling's case colors and other types of charts can be sufficient to convey the data in a meaningful way
  - With Longitude and Latitude data, almost always makes sense to plot it
  - ZIP code, County, State groups sometimes work
  - Country groups less so

--------------------------------------------------------------------------------

**Break for questions**

--------------------------------------------------------------------------------

## Getting Started with Cesium (12 min)

### Getting Started
- Cesium is a Javascript library for drawing 3D globes and data
- Cesium Sandcastle

### Imagery Layers
- Interface to traditional Geographical Information System
  - Database for image layers containing spacial data maps
  - Popular GISs: ArcGIS, OpenMap, GEE
- Example NCAA College Football

### Data Sources
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
  - Most powerful in Cesium
  - JSON Based
  - Time dynamic
  - .NET, Java, Python, JavaScript libraries for editing it
- Imagery Layers
  - mapbox/tippecanoe for converting larger sets into tiles
  - Python based tools

### Clock & Camera
- Fine-tuned representation of data
- Speed
- Look Direction
- Position via Cartesian (x,y,z) or Cartographic (lon,lat,alt)

### Extras
- Leap Seconds
- Info Panel
- 3D Tiles
- Entities/3D Models
- Particles
- Atmosphere
- Celestial bodies
- Terrain
- Other planets (not using the WSG84 ellipsoid)
- Shadows
- WebVR
- Desktop apps with Electron
- Mobile apps with Cordova

### React Cesium
- We didn't end up using many of the built-in data types
- We started using React
- In combination with react-router we can change data on the globe via a route
- Will increase performance when switching between globes when we release an interactive website
- Simple example

## Conclusion
- Maps are a powerful tool for representing data
- [Cesium.js] and react-cesium make it easy to build interactive maps
- Contribute stories to [Systems of Life](https://github.cerner.com/ux/systems-of-life)
- Contribute to [React Cesium](https://github.cerner.com/al048401/react-cesium)

--------------------------------------------------------------------------------

**More time for questions**

--------------------------------------------------------------------------------

- Contribute stories to [Systems of Life](https://github.cerner.com/ux/systems-of-life)
- Contribute to [React Cesium](https://github.cerner.com/al048401/react-cesium)
- All links are found in my GitHub repo [al048401/geospacial-slides](https://github.cerner.com/al048401/geospacial-slides)
- Talk to me: Alex Lende <alex.lende@cerner.com> ([@ajlende](https://ajlende.com))
- Thank you!


## Credits
- Created with [WebSlides](webslides.tv) by [@jlantunez](https://twitter.com/jlantunez).
- [Cesium.js Demos](https://cesiumjs.org/demos/)
  - [Cesium Sandcastle](https://cesiumjs.org/Cesium/Build/Apps/Sandcastle/index.html?src=Hello%20World.html&label=Showcases)
  - [EclipseTracks.org](https://cesium.com/blog/2015/03/19/eclipsetracks-interactive-solar-eclipses-with-cesium/)
  - [HOWL](https://cesiumjs.org/demos/HOWL/)
  - [Global Precipitation](https://pps.gsfc.nasa.gov/THORonline/cesium/index.html)
  - [Choreopleth](https://cesiumjs.org/demos/4DChoroplethMap/)
  - [Health and Wealth of Nations](https://cesiumjs.org/demos/d3/)
  - [Global Science Facilities](https://cesiumjs.org/Cesium/Build/Apps/Sandcastle/?src=KML.html)
- Other Examples
  - [Strava Heatmap](https://labs.strava.com/heatmap/)
  - [NCAA Football Map](https://www.nytimes.com/interactive/2014/10/03/upshot/ncaa-football-map.html)
  - [Hans Rosling](https://www.ted.com/speakers/hans_rosling)
  - [Fall Foliage Map](https://smokymountains.com/fall-foliage-map/)
- Tileset tools/GIS
  - [mapbox/tippecanoe](https://github.com/mapbox/tippecanoe)
  - [google/earthenterprise](https://github.com/google/earthenterprise)
  - [ArcGIS](https://www.arcgis.com)
  - [OpenMap](http://openmap-java.org/)
- GeoJSON/TopoJSON Tools
  - [geojson.io](http://geojson.io/)
  - [Awesome GeoJSON](https://github.com/tmcw/awesome-geojson)
- CZML Tools
  - [AnalyticalGraphicsInc/czml-writer](https://github.com/AnalyticalGraphicsInc/czml-writer)
  - [cleder/czml](https://github.com/cleder/czml)
- [Systems of Life](https://github.cerner.com/ux/systems-of-life)
- [React Cesium](https://github.cerner.com/al048401/react-cesium)

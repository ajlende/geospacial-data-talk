/* global Cesium, viewer, ReactCesium, React, ReactDOM */
/* eslint-env browser */
/* eslint-disable no-unused-vars, no-plusplus, no-alert */

/*
 * Imagery Layers
 */

const footballProvider = {
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url: 'http://int.nyt.com/newsgraphics/ncaa-3/tiles/base/{z}/{x}/{y}.png',
    credit: '',
  }),
  baseLayerPicker: false,
};


/*
 * KML
 */

viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/facilities/facilities.kml', {
  camera: viewer.scene.camera,
  canvas: viewer.scene.canvas,
}));


viewer.dataSources.add(Cesium.KmlDataSource.load('../../SampleData/kml/gdpPerCapita2008.kmz', {
  camera: viewer.scene.camera,
  canvas: viewer.scene.canvas,
}));


/*
 * TopoJSON
 */

viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../SampleData/ne_10m_us_states.topojson', {
  stroke: Cesium.Color.HOTPINK,
  fill: Cesium.Color.PINK.withAlpha(0.5),
  strokeWidth: 3,
}));


const promise = Cesium.GeoJsonDataSource.load('../../SampleData/ne_10m_us_states.topojson');
promise.then((dataSource) => {
  viewer.dataSources.add(dataSource);

  // Get the array of entities
  const entities = dataSource.entities.values;

  const colorHash = {};
  for (let i = 0; i < entities.length; i++) {
    // For each entity, create a random color based on the state name.
    // Some states have multiple entities, so we store the color in a
    // hash so that we use the same color for the entire state.
    const entity = entities[i];
    const name = entity.name;
    let color = colorHash[name];
    if (!color) {
      color = Cesium.Color.fromRandom({
        alpha: 1.0,
      });
      colorHash[name] = color;
    }

    // Set the polygon material to our random color.
    entity.polygon.material = color;
    // Remove the outlines.
    entity.polygon.outline = false;

    // Extrude the polygon based on the state's population.  Each entity
    // stores the properties for the GeoJSON feature it was created from
    // Since the population is a huge number, we divide by 50.
    entity.polygon.extrudedHeight = entity.properties.Population / 50.0;
  }
}).otherwise((error) => {
  // Display any errrors encountered while loading.
  window.alert(error);
});

/*
 * react-cesium
 */

const {
  Cesium: CesiumViewer,
  Scene,
  Camera,
  Globe,
  DataSourceCollection,
  CustomDataSource,
  Entity,
} = ReactCesium;

const { Cartesian3 } = Cesium;

const entityProps = [
  { point: { pixelSize: 10 }, position: Cartesian3.fromDegrees(0, 0, 0) },
  { point: { pixelSize: 10 }, position: Cartesian3.fromDegrees(0, 10, 0) },
  { point: { pixelSize: 10 }, position: Cartesian3.fromDegrees(10, 0, 0) },
  { point: { pixelSize: 10 }, position: Cartesian3.fromDegrees(10, 10, 0) },
];

const destination = Cartesian3.fromDegrees(5, 5, 10000000);

class MyCesiumViz extends React.Component {
  componentDidMount() {
    this.camera.flyTo({ destination });
  }
  render() {
    return (
      <CesiumViewer>
        <Scene>
          <Camera val={camera => (this.camera = camera)} />
        </Scene>
        <DataSourceCollection>
          <CustomDataSource name="myData">
            {entityProps.map(props => <Entity {...props} />)}
          </CustomDataSource>
        </DataSourceCollection>
      </CesiumViewer>
    );
  }
}

ReactDOM.render(React.createElement(MyCesiumViz), document.getElementById('root'));

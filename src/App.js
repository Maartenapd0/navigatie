import {
  interaction,
  layer,
  custom,
  control, //name spaces
  Interactions,
  Overlays,
  Controls, //group
  Map,
  Layers,
  Overlay,
  Util, //objects
} from "react-openlayers";
function App() {
  return (
    <div className="App">
      <Map view={{ center: [0, 0], zoom: 2 }}>
        <Layers>
          <layer.Tile />
        </Layers>
      </Map>
    </div>
  );
}

export default App;

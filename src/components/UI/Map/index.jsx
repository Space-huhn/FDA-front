import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import {MapStyled} from "@/components/UI/Map/styled";

const MapComponent = ({center, zoom, setZoom}) => {

  return (
    <MapStyled>
      <APIProvider apiKey={'AIzaSyCudRp6jnJrRD0XCkzYFmSNPYcgKHYdbyY'}
                   onLoad={() => console.log('Maps API has loaded.')}>
        <Map
          zoom={zoom}
          center={{lat: center.latitude, lng: center.longitude}}
          onCameraChanged={(event) => setZoom(event.map.getZoom())}
          // onCameraChanged={ (ev) =>
          //   console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          // }
          className='mapContainer'
        >
          <Marker position={{lat: center.latitude, lng: center.longitude}}/>
        </Map>
      </APIProvider>
    </MapStyled>
  );
};

export default MapComponent;
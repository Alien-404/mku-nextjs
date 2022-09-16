import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  FeatureGroup,
} from 'react-leaflet';
import Indicators from './partials/Indicators';
import PopupLabel from './partials/PopupLabel';
import { styleColor } from '../helpers/mapFunc';
import LayoutFooterNone from './LayoutFooterNone';

export default function Maps({ geoData }) {
  const position = [-6.2295931, 106.6291792];

  return (
    <LayoutFooterNone title={'Map | AirVision'}>
      <div className='relative'>
        <MapContainer
          center={position}
          zoom={18}
          scrollWheelZoom={false}
          className='w-full h-[calc(100vh-4rem)] z-0'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Pradita University'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {geoData[0].features.map((feature, index) => {
            const styleOptions = {
              fillColor: styleColor(feature),
            };
            return (
              <FeatureGroup key={index}>
                <CircleMarker
                  center={[
                    feature.geometry.coordinates[1],
                    feature.geometry.coordinates[0],
                  ]}
                  color='#000'
                  radius={15}
                  weight={0.9}
                  opacity={1}
                  fillOpacity={1}
                  pathOptions={styleOptions}
                >
                  <Popup>
                    <PopupLabel dataDevice={feature} />
                  </Popup>
                </CircleMarker>
              </FeatureGroup>
            );
          })}
        </MapContainer>
        <Indicators />
      </div>
    </LayoutFooterNone>
  );
}

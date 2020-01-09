# 🌯 `useGeolocation`

Gets and watches for the geolocation of the user

## Arguments

- `watch?: Bool`: set it to true to follow the location. Default is `false`
- `settings: Object`: position options
  - settings.enableHighAccuracy: indicates the application would like to receive the most accurate results (default false),
  - settings.timeout: maximum length of time (in milliseconds) the device is allowed to take in order to return a position (default Infinity),
  - settings.maximumAge: the maximum age in milliseconds of a possible cached position that is acceptable to return (default 0).

## Returns

- `position: Object`:
  - latitude
  - longitude
  - timestamp: the time when their location was given
  - accuracy: how accuate the geolocation is
  - error: Any error with getting the geolocation

## Usage

```js
import { useGeolocation } from "react-recipes";

function App() {
  const { latitude, longitude, timestamp, accuracy, error } = useGeolocation(
    true
  );

  return (
    <code>
      latitude: {latitude}
      longitude: {longitude}
      timestamp: {timestamp}
      accuracy: {accuracy && `${accuracy}m`}
      error: {error}
    </code>
  );
}
```
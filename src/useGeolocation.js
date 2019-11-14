// referenced from https://github.com/trekhleb/use-position
import { useState, useEffect } from 'react';

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

const useGeolocation = (watch = false, settings = defaultSettings) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings]);

  return { ...position, error };
};

export default useGeolocation;

// Usage

// function App() {
//   const { latitude, longitude, timestamp, accuracy, error } = useGeolocation(true);

// return (
//     <code>
//       latitude: {latitude}<br/>
//       longitude: {longitude}<br/>
//       timestamp: {timestamp}<br/>
//       accuracy: {accuracy && `${accuracy}m`}<br/>
//       error: {error}
//     </code>
//   );
// }

// watch: boolean - set it to true to follow the location.
// settings: object - position options
//   * settings.enableHighAccuracy - indicates the application would like to...
// ...receive the most accurate results (default false),
//   * settings.timeout - maximum length of time (in milliseconds) the device...
// ...is allowed to take in order to return a position (default Infinity),
//   * settings.maximumAge - the maximum age in milliseconds of a possible ...
// ... cached position that is acceptable to return (default 0).

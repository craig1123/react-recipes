/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import useGeolocation from '../src/useGeolocation';

const Demo = ({ watch, settings }) => {
  const { latitude, longitude, timestamp, accuracy, error } = useGeolocation(watch, settings);

  return (
    <>
      {!latitude && !error && (
        <>
          <div>Trying to fetch location...</div>
          <br />
        </>
      )}
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
        timestamp: {timestamp}
        <br />
        accuracy: {accuracy && `${accuracy}m`}
        <br />
        error: {error}
      </code>
    </>
  );
};

const mockPosition = {
  coords: {
    latitude: 52.3172414,
    longitude: 4.8717809,
    accuracy: 24,
  },
  timestamp: 1561815013194,
};

const mockWatcherId = 1;

const mockGeolocation = {
  watchPosition: onChange => {
    onChange(mockPosition);
    return mockWatcherId;
  },
  getCurrentPosition: onChange => onChange(mockPosition),
  clearWatch: jest.fn(),
};

const mockGeolocationError = {
  watchPosition: (onChange, onError) => onError(new Error('User denied Geolocation')),
  getCurrentPosition: (onChange, onError) => onError(new Error('User denied Geolocation')),
  clearWatch: jest.fn(),
};

describe('useGeolocation', () => {
  it('should return empty values by default', () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return empty values by default in watching mode', () => {
    const tree = renderer.create(<Demo watch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return latitude and longitude while watching', () => {
    global.navigator.geolocation = mockGeolocation;
    let test;
    act(() => {
      test = renderer.create(<Demo watch />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return latitude and longitude while fetching', () => {
    global.navigator.geolocation = mockGeolocation;
    let test;
    act(() => {
      test = renderer.create(<Demo />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while watching', () => {
    global.navigator.geolocation = mockGeolocationError;
    let test;
    act(() => {
      test = renderer.create(<Demo watch />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error while fetching', () => {
    global.navigator.geolocation = mockGeolocationError;
    let test;
    act(() => {
      test = renderer.create(<Demo />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return error if navigator is not supported', () => {
    global.navigator.geolocation = null;
    let test;
    act(() => {
      test = renderer.create(<Demo />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should clear watcher on component unmount', () => {
    global.navigator.geolocation = mockGeolocation;
    let test;
    act(() => {
      test = renderer.create(<Demo watch />);
    });
    act(() => {
      test.unmount();
    });
    expect(global.navigator.geolocation.clearWatch).toHaveBeenCalledWith(mockWatcherId);
  });

  it('should return latitude and longitude even if watch is undefined', () => {
    global.navigator.geolocation = mockGeolocation;
    let test;
    act(() => {
      test = renderer.create(<Demo watch={undefined} />);
    });
    const tree = test.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

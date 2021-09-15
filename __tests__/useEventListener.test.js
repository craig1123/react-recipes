// original source - https://github.com/donavon/use-event-listener/blob/develop/__tests__/index.test.js

import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/dom';

import useEventListener from '../src/useEventListener';

const mouseMoveEvent = { clientX: 100, clientY: 200 };
let hackHandler = null;

const mockElement = {
  addEventListener: (eventName, handler) => {
    hackHandler = handler;
  },
  removeEventListener: () => {
    hackHandler = null;
  },
  dispatchEvent: (event) => {
    hackHandler(event);
  },
};

afterEach(cleanup);

describe('useEventListener', () => {
  test('import useEventListener', () => {
    expect(typeof useEventListener).toBe('function');
  });

  test('you pass an `eventName`, `handler`, and an `element`', () => {
    const handler = jest.fn();
    const addEventListenerSpy = jest.spyOn(mockElement, 'addEventListener');
    renderHook(() => useEventListener('foo', handler, mockElement));

    expect(addEventListenerSpy).toBeCalled();

    mockElement.dispatchEvent(mouseMoveEvent);
    expect(handler).toBeCalledWith(mouseMoveEvent);

    addEventListenerSpy.mockRestore();
  });

  test('`element` is optional (defaults to `window`/`global`)', () => {
    const handler = jest.fn();
    const addEventListenerSpy = jest.spyOn(global, 'addEventListener');
    renderHook(() => useEventListener('foo', handler));

    expect(addEventListenerSpy).toBeCalled();

    addEventListenerSpy.mockRestore();
  });

  test('fails safe with SSR (i.e. no window)', () => {
    const handler = jest.fn();
    renderHook(() => useEventListener('foo', handler));
  });
});

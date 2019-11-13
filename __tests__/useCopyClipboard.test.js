  
import React from "react";
import { cleanup, fireEvent, render, act } from "@testing-library/react";
import useClipboard from "../src/useCopyClipboard";

afterEach(cleanup);

// mock copying to clipboard
jest.mock('../utils/copyToClipboard.js', () => jest.fn((text) => !!text));


describe("useClipboard", () => {
  test("`isCopied` becomes false after `successDuration` time ellapses", () => {
    jest.useFakeTimers();

    const Component = () => {
      const [isCopied, setCopied] = useClipboard();

      const copy = () => {
        setCopied("Text to copy")
      }

      return (
        <button onClick={copy} data-testid="btn-example">
          {isCopied ? "Yes" : "Nope"}
        </button>
      );
    };

    const { getByTestId } = render(<Component />);
    const button = getByTestId("btn-example");

    expect(button.textContent).toBe("Nope");

    fireEvent.click(button);

    expect(button.textContent).toBe("Yes");

    // Fast-forward half-way
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(button.textContent).toBe("Yes");

    act(() => {
      // Go to the end
      jest.advanceTimersByTime(1000);
    });

    expect(button.textContent).toBe("Nope");
  });

  test("`isCopied` is always true if `successDuration` 0", () => {
    jest.useFakeTimers();

    const Component = () => {
      const [isCopied, setCopied] = useClipboard(0);

      const copy = () => {
        setCopied("Text to copy")
      }

      return (
        <button onClick={copy} data-testid="btn-example">
          {isCopied ? "Yes" : "Nope"}
        </button>
      );
    };

    const { getByTestId } = render(<Component />);
    const button = getByTestId("btn-example");

    expect(button.textContent).toBe("Nope");

    fireEvent.click(button);

    expect(button.textContent).toBe("Yes");

    act(() => {
      // Fast-forward half-way
      jest.runAllTimers();
    })

    expect(button.textContent).toBe("Nope");
  });
});

# OutsideClickComponent

This React component demonstrates how to detect clicks outside of a specific element using a custom hook `useOutsideClick`. When a click occurs outside the designated box, a toast notification is displayed.

## Features

- Uses a custom `useOutsideClick` hook to handle outside click detection.
- Integrates `react-toastify` for displaying informative toast notifications.
- Simple and clear UI to test the outside click functionality.

## Prerequisites

- Node.js and npm (or yarn) installed on your development machine.
- A React project set up.

## Installation

1.  Install the necessary dependencies:

    ```bash
    npm install react react-dom react-toastify
    # or
    yarn add react react-dom react-toastify
    ```

2.  Ensure you have the custom hook `useOutsideClick` in your project (likely in a `hook` directory as indicated by the import path `../hook/useCustomHook.js`). The content of this hook would typically look like this:

    ```javascript
    import { useEffect, useRef } from 'react';

    function useOutsideClick(callback) {
      const ref = useRef(null);

      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            callback();
          }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref, callback]);

      return ref;
    }

    export default useOutsideClick;
    ```

## Usage

1.  Import the `OutsideClickComponent` into your desired React application file:

    ```javascript
    import OutsideClickComponent from './path/to/OutsideClickComponent';
    ```

2.  Render the component within your application's JSX:

    ```jsx
    function App() {
      return (
        <div>
          <OutsideClickComponent />
        </div>
      );
    }

    export default App;
    ```

3.  Run your React application. You should see a centered box with the text "Click Outside Test".

4.  Clicking inside the box will do nothing. Clicking anywhere outside the box will trigger a toast notification at the top right of the screen saying "You clicked outside the box!".

## Explanation

- The `useOutsideClick` hook takes a callback function as an argument. This callback is executed when a click event occurs outside the element that the hook is attached to.
- A `ref` is created using `useRef` and attached to the target `div` element.
- An event listener for the `'mousedown'` event is added to the `document`.
- Inside the event listener, it's checked if the clicked target is outside the element referenced by `ref`. If it is, the provided `callback` function (`handleOutsideClick` in this case) is executed.
- The `handleOutsideClick` function uses `react-toastify`'s `toast.info()` to display a notification.
- The `ToastContainer` component is responsible for rendering the toast notifications.

## Customization

- You can customize the appearance and position of the `ToastContainer` by modifying its props (e.g., `position`, `autoClose`). Refer to the `react-toastify` documentation for more options.
- The styling of the box can be adjusted by modifying the `className` prop of the `div` element.


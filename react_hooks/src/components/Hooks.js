// ✅ React Hooks – Overview
// React Hooks are special functions that let you "hook into" React features like state, lifecycle, and context in function components (without writing class components).

// They were introduced in React 16.8 to manage component behavior in a cleaner, reusable way.

// | Hook                  | Purpose                                                          |
// | --------------------- | ---------------------------------------------------------------- |
// | `useState`            | Add state to function components                                 |
// | `useEffect`           | Run side effects (like API calls, subscriptions, etc.)           |
// | `useContext`          | Access React Context API                                         |
// | `useRef`              | Access DOM elements directly or persist mutable values across renders  |
// | `useMemo`             | Optimize performance by memoizing expensive computations         |
// | `useCallback`         | Memoize functions to prevent unnecessary re-renders              |
// | `useReducer`          | An alternative to `useState` for complex state logic             |
// | `useLayoutEffect`     | Like `useEffect` but runs **synchronously after DOM mutations**  |
// | `useImperativeHandle` | Customize the instance value that is exposed to parent via `ref` |
// | `useDebugValue`       | Used for custom hooks debugging                                  |

// 🆚 Differences: React Hooks vs Class Components
// | Feature/Aspect        | React with Hooks (Function Component)                   | Class Component                      |
// | --------------------- | ------------------------------------------------------- | ------------------------------------ |
// | **State Management**  | `useState`, `useReducer`                                | `this.state`, `this.setState()`      |
// | **Lifecycle Methods** | `useEffect`                                             | `componentDidMount`, etc.            |
// | **Code Reuse**        | Custom Hooks                                            | HOCs or Render Props                 |
// | **Boilerplate**       | Less, simpler                                           | More boilerplate (constructor, bind) |
// | **Readability**       | High (if used well)                                     | Can become cluttered                 |
// | **Performance**       | Hooks encourage optimization (`useMemo`, `useCallback`) | Optimization often manual            |
// | **Context Usage**     | `useContext(MyContext)`                                 | `<MyContext.Consumer>`               |

// Hooks are only for function components.
// They replace the need for class components.
// Hooks must be called at the top level of the function.
// You can build custom hooks to reuse logic.
// | Feature / Aspect               | Component            | Custom Hook                                     | Regular Function                |
// | ------------------------------ | -------------------- | ----------------------------------------------- | ------------------------------- |
// | **Purpose**                    | Render UI            | Reusable stateful logic                         | Reusable pure logic             |
// | **Returns**                    | JSX (UI)             | Data, state, functions (no JSX)                 | Any value or computation        |
// | **Can use React hooks?**       | ✅ Yes                | ✅ Yes                                           | ❌ No                            |
// | **Reusability of logic**       | Limited (renders UI) | High (logic can be used in multiple components) | Moderate (logic only, no hooks) |
// | **Usage in JSX**               | `<MyComponent />`    | Must be called inside a component               | Called like a normal function   |
// | **Stateful logic**             | ✅ Yes                | ✅ Yes                                           | ❌ No                            |
// | **Side effects (`useEffect`)** | ✅ Yes                | ✅ Yes                                           | ❌ No                            |
// | **Rendering UI**               | ✅ Yes                | ❌ No                                            | ❌ No                            |

// 💡 Quick Tip:
// If you need UI, use a component.
// If you need reusable logic with state/effects, use a custom hook.
// If you need pure calculations or helpers, use a regular function.
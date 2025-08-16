// 1. Render (React’s point of view)
// In React, "render" means:
// Running your component function to figure out what the UI should look like.
// React calls your component function → you return JSX → React builds a virtual DOM description.
// No pixels are drawn yet — it’s just a calculation.

// In code terms:
// function MyComponent() {
//   console.log("Rendering...");
//   return <div>Hello</div>;
// }
// Every time React runs this function, that’s a render.

// 2. Paint (Browser’s point of view)
// "Paint" means:
// The browser drawing pixels to the screen based on the DOM & CSS.
// Steps in the browser after React gives it the updated DOM:
// Layout → Calculate where things go and how big they are.
// Paint → Fill in colors, text, images (pixels).
// Composite → Put layers together for the final screen image.

// 3. How they fit together
// Think of it like:
// React render → “Here’s the blueprint for the UI” (virtual DOM).
// React commit → “Browser, here’s the updated DOM to use.”
// Browser paint → “Okay, I’ll actually draw it on the screen.”

// 4. Why this matters for hooks
// useMemo runs during render (before paint).
// useEffect runs after paint.
// useLayoutEffect runs after DOM changes but before paint — so you can measure things before the user sees them.

// 📌 Quick analogy:
// Render = writing the recipe for the cake.
// Paint = actually baking and decorating the cake so people can see/eat it.
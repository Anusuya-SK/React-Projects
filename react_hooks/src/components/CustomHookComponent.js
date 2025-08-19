import React from "react";
import useCustomHook from "./useCustomHook";

function CustomHookComponent() {
  const isOnline = useCustomHook(); // ✅ hook used inside component

  return (
    <div>
      <h2>CustomHook Component</h2>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}

export default CustomHookComponent;

import { useState, useEffect, useDebugValue } from "react";

function useCustomHook() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Add debug label in DevTools
  useDebugValue(isOnline ? "✅ Online" : "❌ Offline");

  return isOnline;
}

export default useCustomHook;
import { useReducer, useEffect } from "react";
function useLocalStorageReducer(key, reducer, defaultVal) {
  //third argument is used to initialized state (return state)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}
export { useLocalStorageReducer };

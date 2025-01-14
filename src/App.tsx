import React from "react";
import { Provider as MyProvider } from "react-redux";
import { useStore } from "./store/useStore.ts";
import ReduxExample from "./ReduxExample.tsx";

function App() {
  const store = useStore();

  return (
    <MyProvider store={store}>
      <ReduxExample />
    </MyProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";
import GlobalStyle from "./style/GlobalStyle";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/config/ConfigStore";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";
import GlobalStyle from "./style/GlobalStyle";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;

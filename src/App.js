import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Router from './shared/Router';
import GlobalStyle from './style/GlobalStyle'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <Router/>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

  );
}

export default App;

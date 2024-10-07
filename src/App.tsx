import { QueryClient, QueryClientProvider } from "react-query";
import { List } from "./components/List/List";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
}

export default App;

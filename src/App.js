import { QueryClient, QueryClientProvider } from "react-query";

import BasicForm from "./components/BasicForm";
import ContactList from "./components/ContactList";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <BasicForm />
        <ContactList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

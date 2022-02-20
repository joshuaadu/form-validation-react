import { useEffect, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import BasicForm from "./components/BasicForm";
import ContactList from "./components/ContactList";
import useSendRequest from "./components/hooks/use-sendRequest";
import SimpleInput from "./components/SimpleInput";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {/* <SimpleInput /> */}
        <BasicForm />
        <ContactList />
      </div>
    </QueryClientProvider>
  );
}

export default App;

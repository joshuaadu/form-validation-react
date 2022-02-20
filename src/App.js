import { QueryClient, QueryClientProvider } from "react-query";

import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        {/* <SimpleInput /> */}
        <BasicForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;

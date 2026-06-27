import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => (
  <ThemeProvider>
    <AnimatePresence mode="wait">
      <AppRoutes />
    </AnimatePresence>
  </ThemeProvider>
);

export default App;

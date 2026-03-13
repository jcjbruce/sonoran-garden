import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PasswordGate from "./components/PasswordGate";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AlmanacOriginal from "./pages/AlmanacOriginal";
import Almanac2022 from "./pages/Almanac2022";
import Almanac2023 from "./pages/Almanac2023";
import Almanac2024 from "./pages/Almanac2024";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/almanac/original" component={AlmanacOriginal} />
      <Route path="/almanac/2022" component={Almanac2022} />
      <Route path="/almanac/2023-24" component={Almanac2023} />
      <Route path="/almanac/2024-25" component={Almanac2024} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <PasswordGate>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </PasswordGate>
    </ErrorBoundary>
  );
}

export default App;

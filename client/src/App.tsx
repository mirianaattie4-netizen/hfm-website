import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MobileApp from "./pages/MobileApp";

// Detect if running as installed PWA (standalone mode) or on mobile
function isMobileOrPWA(): boolean {
  // Check if running as installed PWA
  if (window.matchMedia("(display-mode: standalone)").matches) return true;
  // Check if on mobile device
  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
  // Check if screen width is mobile
  if (window.innerWidth <= 768) return true;
  return false;
}

function Router() {
  const mobile = isMobileOrPWA();
  return (
    <Switch>
      <Route path={"/"} component={mobile ? MobileApp : Home} />
      <Route path={"/app"} component={MobileApp} />
      <Route path={"/web"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

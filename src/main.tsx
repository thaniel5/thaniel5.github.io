import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App.tsx";

const convex = new ConvexReactClient(process.env.CONVEX_URL as string);

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>
);

(import.meta.hot.data.root ??= createRoot(elem)).render(app);

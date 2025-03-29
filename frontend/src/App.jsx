import RouteRenderer from "./core/RouteRenderer";
import RouteServiceProvider from "./core/RouteServiceProvider";

export default function App() {
  return (
    <RouteServiceProvider>
      <RouteRenderer />
    </RouteServiceProvider>
  )
}
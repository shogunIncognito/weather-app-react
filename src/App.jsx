import TopBar from "./components/TopBar"
import WeatherForm from "./components/WeatherForm"

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <header className="app-header">
        <WeatherForm />
      </header>
    </div>
  )
}

 

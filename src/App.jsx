import TopBar from "./components/TopBar"
import WeatherForm from "./components/WeatherForm"

export default function App() {
  return (
    <>
      <TopBar />
      <div className="app">        
        <header className="app-header">
          <WeatherForm />
        </header>
      </div>
    </>
  )
}



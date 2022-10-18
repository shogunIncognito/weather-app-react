import { useState } from "react"
import Response from "./Response"
import Spinner from "./Spinner"

export default function WeatherForm() {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(false)

    const checkInput = (e) => {
        e.preventDefault()
        setLoading(true)
        
        const apiKey = '9c7854ef1790034497d28fff023b846a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`

        if (value.length == 0) {
            alert('Campo vacio')
            setLoading(false);
            return;
        }

        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(() => setLoading(false))
            .finally(() => setLoading(false))
    }

    return (
        <>
            <div>
            <form>
                <h1 className="title">Ingrese la ciudad</h1>
                <input placeholder="Paris..." type="text" onChange={(e) => setValue(e.target.value)}/><br/>
                <button onClick={checkInput}>Consultar</button>
            </form>
            </div>
            {loading ? <Spinner /> : data && <Response data={data}/> }
        </>
    )
}
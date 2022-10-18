import ShowError from "./ShowError"

export default function Response({ data }) {
    if (data.cod == 404) {
        return <ShowError msg="Ciudad no encontrada" />
    }

    const { name, main: { temp, temp_max, temp_min }, sys: { country } } = data
    return (
        <>
            <h1>{name}</h1>
            <span>{country}</span>
            <p className="">Temperatura {temp}°</p>
            <span className="tempP">Temperatura maxima {temp_max}°</span>
            <span className="tempP">Temperatura minima {temp_min}°</span>
            <img className="searchPhoto" src={`https://source.unsplash.com/800x600/?${name}`}></img>
        </>
    )
}
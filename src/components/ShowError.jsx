export default function ShowError({ msg }) {
    return (
        <div className="error">
            <span className="errorTitle">Error</span>
            <span>{msg}</span>
        </div>
    )
}
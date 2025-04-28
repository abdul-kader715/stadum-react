

const ProcessItem = ({Icon,hovericon,title,description }) => {

    return (
        <div className="process_item">
            <div className="icon">
                <img className="icon-1" src={Icon}alt="" />
                <img className="icon-2" src={hovericon} alt="" />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProcessItem
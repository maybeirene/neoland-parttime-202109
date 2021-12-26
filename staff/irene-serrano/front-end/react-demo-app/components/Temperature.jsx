class Temperature extends React.Component{
    constructor(){
        super()

    }

    render(){
        return <div className="temperature-container vertical-cont">
            <h4>Today</h4>
            <div className="temperature-container horizontal-cont">
                <h2 className="temperature-min">4º</h2>
                <h2 className="temperature-max">14º</h2>
            </div>
            
        </div>
    }
}
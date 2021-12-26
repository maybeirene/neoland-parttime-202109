
class Forecast extends React.Component{
    constructor(){
        super()

        this.state = {
            values:null,            
        }
        this.apiKey = 'D9GQMSPXZ48742LH6XJ362P5B';

    }

    componentDidMount(){

        logger.debug('FORECAST => componentDidMount')
    }
    render(){
        return <div className="forecast-container panel_mini">
            <h3>El tiempo en {this.props.city}</h3>
            <Temperature />
            <Temperature />
            <Temperature />
        </div>
    }
}
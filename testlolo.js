class Boxes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style1 = {
            "backgroundColor": this.props.point1
        };
        var style2 = {
            "backgroundColor": this.props.point2
        };
        var style3 = {
            "backgroundColor": this.props.point3
        }
        return (
            <div className="box">
                <div className="circle">
                    <img src={this.props.src}></img>
                </div>
                <h5>{this.props.title}</h5>
                <p>{this.props.text}</p>
                <div className="container">
                    <div className="point" style={style1}></div>
                    <div className="point" style={style2}></div>
                    <div className="point" style={style3}></div>
                </div>
            </div>
        );
    }
}
class App extends React.Component {

    render() {
        return (
            <div>
                <Boxes src="https://image.flaticon.com/icons/svg/516/516698.svg" title="Ready to Travel" text="Choose, your destination, plan your trip.Pick the best place for your holiday" point1="darkgrey" />
                <Boxes src="https://image.flaticon.com/icons/svg/1245/1245001.svg" title="Select the Date" text="Select the day, pick your ticket. We give you the best price. We guaranted." point2="darkgrey" />
                <Boxes src="https://image.flaticon.com/icons/svg/1040/1040993.svg" title="Feels Like Home" text="Enjoy your holiday! Don't forget to drink a beer and take a photo" point3="darkgrey" />
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();

import {Jumbotron} from "react-bootstrap";
import '../App.css'
import Vid from './files/Fall - 23881.mp4'

const Frontpage = () => {
    return (
        <div>
            <Jumbotron>
                <video autoPlay loop muted className={"bg-video"}>
                    <source src={Vid}/>
                </video>
                <h1>HolidayVR</h1>
            </Jumbotron>
        </div>
    );
}

export default Frontpage;
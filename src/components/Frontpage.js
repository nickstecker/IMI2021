import {Container, Jumbotron} from "react-bootstrap";
import Vid from './files/Fall - 23881.mp4'

const Frontpage = () => {
    return (
        <Container className={"container"}>
            <video autoPlay loop muted className={"bg-video"}>
                <source src={Vid}/>
            </video>
            <Container>
                <h1 className={"heading"}>HolidayVR</h1>
            </Container>
        </Container>
    );
}

export default Frontpage;
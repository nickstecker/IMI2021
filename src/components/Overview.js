import React from 'react';
import {Jumbotron} from "react-bootstrap";
import '../App.css'

const Overview = () => {
    return (
       <Jumbotron fluid className={"jumbo"}>
           <h2 className={"sec-head"} id={"info"}>Projektidee</h2>
           <p>HolidayVR ist eine virtuelle Anwendung, die dem Nutzer neue und noch nie dagewesene Sinneseindrücke vermittelt. Der Nutzer hat die Möglichkeit mit unserer Webapp bekannte oder fremde Orte zu besuchen. Die Orte werden virtuell zu einem gewissen Grad abstrahiert. Dadurch wird dem Nutzer eine ihm bekannte jedoch befremdlich wirkende Welt präsentiert. Der Nutzer bekommt somit einen neuen Eindruck bzw. eine neue Perspektive. Die Wahrnehmung des Nutzers auf reelle Dinge wird verändert. Bekannte Sinneseindrücke werden durch die VR Anwendung neu interpretiert.</p>
       </Jumbotron>
    );
}

export default Overview;

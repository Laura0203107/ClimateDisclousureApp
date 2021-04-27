import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faFlipboard} from "@fortawesome/free-brands-svg-icons";
import {faChartBar} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
    return (
        <aside className="grid-layout__sidebar">
        <ul className="flex-layout menu-content">
            <li className="menu-content__item"><a href="#"><FontAwesomeIcon icon={faArrowLeft}/></a></li>
            <li className="menu-content__item"><a href="#"><FontAwesomeIcon icon={faHome}/></a></li>
            <li className="menu-content__item"><a href="#"><FontAwesomeIcon icon={faFlipboard}/></a></li>
            <li className="menu-content__item"><a href="#"><FontAwesomeIcon icon={faChartBar}/></a></li>
            <li className="menu-content__item"><a href="#"><FontAwesomeIcon icon={faInfoCircle}/></a></li>
        </ul>
    </aside>
    )
}

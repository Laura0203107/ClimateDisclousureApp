import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="grid-layout__header">
        <nav className="flex-layout">
            <div className="flex-layout flex-layout__logo">
                <a href="#" ><FontAwesomeIcon icon={faCloud}/>Climate Disclosure</a>

            </div>
            <ul className="flex-layout flex-layout--end menu">
                <li className="flex-layout flex-layout__item flex-layout--content-center">
                    <span className="flex-layout flex-layout--content-center menu__item menu__item--active">
                        <a href="#"><FontAwesomeIcon icon={faPlusCircle}/>Ingreso de datos</a>
                        
                    </span>
                </li>
                
                <li className="flex-layout flex-layout__item flex-layout--content-center">
                    <span className="flex-layout flex-layout--content-center menu__item">
                        <a href="#"><FontAwesomeIcon icon={faDatabase}/>Consulta</a>
                    </span>
                </li>
            </ul>
        </nav>
    </header>
    )
}

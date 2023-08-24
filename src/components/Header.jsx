import "../styles/Header.css"
import { BurgerMenu } from "./BurgerMenu"
import { Link } from "react-router-dom"

export function Header(){
    return(
       <header>

        <div className="header-container-title">
            <Link 
            to=''
            className="header-principal-title">DEMO streaming</Link>
            <ul className="header-principal-title-accesories">
               <li className="header-title-login">Log in</li>
                <li className="header-title-start">Start your free trial</li>
            </ul>
            <BurgerMenu />    
        </div>
        <div>
            <h2 className="header-secondary-title"> 
                Popular Titles
            </h2>
        </div>
       </header>
    )
}


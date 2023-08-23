import "../styles/Header.css"
import { BurgerMenu } from "./BurgerMenu"

export function Header(){
    return(
       <header>

        <div className="header-container-title">
            <h1 className="header-principal-title">DEMO streaming</h1>
            <ul className="header-principal-title-accesories">
               <li className="header-title-login">Log in</li>
                <li className="header-title-start">Start your free trial</li>
            </ul>
            <BurgerMenu />    
        </div>
        <div>
            <ul className="header-secondary-title"> 
                <li>Popular Titles</li>
            </ul>
        </div>
       </header>
    )
}


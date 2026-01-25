import {NavLink} from 'react-router'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">home</NavLink></li>
                    {/* <li><NavLink to="/countries">countries</NavLink></li> */}
                </ul>
            </nav>
        </header>
    )
}
import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"
import Quotes from './Quotes'

function NavigationMenu(props){
    return (
        <div>
            <div className="py-4 mx-3 text-center" onClick={(e) => {Quotes()}}>
                <Quotes />
            </div>
            <ul className='m-auto w-[90%] text-center'>
                <li>
                    <Link 
                        to="/" 
                        className="text-orange py-3 border-t border-b border-black block"
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/notebooks" 
                        className="text-orange py-3 border-b border-black block"
                        onClick={() => setShowMenu(false)}
                    >
                        Notebooks
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/skills" 
                        className="text-orange py-3 border-b border-black block"
                        onClick={() => setShowMenu(false)}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/projects" 
                        className="text-orange py-3 border-b border-black block"
                        onClick={() => setShowMenu(false)}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="text-orange py-3 border-b border-black block"
                        onClick={() => setShowMenu(false)}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
import React, {Component} from 'react'


class Header extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{this.props.titulo}</a>
                </nav>
                
            </div>
         );
    }
}
 
export default Header;
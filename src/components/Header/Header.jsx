import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const style = {
  color: 'red',
  backgroundColor: 'black'
}

const Header = (props) => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to= '/'> 
            <img src= 'G:\_Dev\react-course/src/images/img_book.jpg'  alt= 'Logo'/>
            </Link>
          </li>
          <li>
          <NavLink to= '/books' activeStyle={style}>
            Books
          </NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  )
}

export default Header
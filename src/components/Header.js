import React from 'react';
import { Link } from 'react-router';
import styles from './Header.css'

const MenuItem = ({active, children, to}) => (
  <Link to={to} className={`menu-item ${active ? 'active': ''}`}>{children}</Link>
)

const Header = (props, context) => {
  const { router } = context;
  return (
    <div>
      <div className="logo">GeekWims</div>
      <div className="menu">
        <MenuItem to={'/'} active={router.isActive('/', true)}>Home</MenuItem>
        <MenuItem to={'/about'} active={router.isActive('/about', true)}>About</MenuItem>
        <MenuItem to={'/post'} active={router.isActive('/post', true)}>Post</MenuItem>
      </div>
    </div>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object
}

//
// class Header extends React.Component {
//   render() {
//     return (
//       <h1>{this.props.title}</h1>
//     );
//   }
// }

export default Header;

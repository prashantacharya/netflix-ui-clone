import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../Logo';

const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <nav>
      <div className="logo-and-nav-links">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a title..."
          />
        </form>
      </div>
      <div className="avatar">
        <div>Prashant Acharya</div>
        <div className="image">
          <img
            src="https://avatars.githubusercontent.com/u/23692097?v=4"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

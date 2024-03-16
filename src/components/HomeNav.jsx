import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { Navigate } from "react-router";


const HomeNav = () => {
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);
  const [showNavBlack, setShowNavBlack] = useState(false);
  const [logOut, setLogout] = useState(false);
  const avatarRef = useRef(null); // Ref for the avatar menu

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLogout(true);
  }

  const transitionNavbar = () => {
    if(window.scrollY > 100) {
      setShowNavBlack(true)
    } else {
      setShowNavBlack(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar); 
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  const handleOutsideClick = (event) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target)) {
      setProfile(false); 
    }
  }

  if (logOut) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`nav-bar-home ${showNavBlack && 'nav-black'}`}>
      <div className="flex justify-between">
        <div className="left-nav-part">
          {/* left part of nav */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
              className="nav-bar-home-logo"
              alt="Netflix Logo"
            />
          </div>
          <div className="flex gap-5 nav-menu">
            <div>
              <h3 className="cursor-pointer">My List</h3>
            </div>
            <div>
              <h3 className="cursor-pointer">Movies</h3>
            </div>
            <div>
              <h3 className="cursor-pointer">Tv Shows</h3>
            </div>
          </div>
        </div>
        <div className="right-nav-part">
          {/* right part of nav */}
          {search && <div>
            <input type="text" className="search-box"/>
          </div>}
          <div >
            <CiSearch className="search-icon-nav " onClick={() => {setSearch(!search)}}/>
          </div>
          <div className="w-12" ref={avatarRef}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" className="avatar-nav rounded-md" onClick={() => {setProfile(!profile)}}></img>
            {profile && <div className='mt-5 avatar-menu'>
              <ul>
                <li className="account-option">Account</li>
                <li className="logout-option" onClick={handleLogOut}>Logout</li>
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;

const Header = () => {
    return (
      <header>
        {/* <div className="header"> */}
          <div>
            <img src="/wordle-clone/images/help.svg" alt="help" />
          </div>
          <div className="header-title">
            WORDLE
          </div>
          <div>
            <img
              src="/wordle-clone/images/settings.svg"
              alt="settings"
              width="24px"
            />
          </div>
        {/* </div> */}
      </header>
    );
};

export default Header;
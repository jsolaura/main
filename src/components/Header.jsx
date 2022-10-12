import React from 'react';
import styles from "styles/Header.module.css";
import logo from 'assets/qpicker-logo.svg';
import ticketKor from 'assets/ticketKor.svg';
// import Tooltip from "../display/Tooltip";

// import { useMediaQuery } from "react-responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { commonActions } from "reducers/common";
// import { changeLanguage } from "utils/useChangeLanguage";
// import ClickAwayListener from '@mui/material/ClickAwayListener';

const Header = () => {
    // const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
    // const [showLang, setShowLang] = useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [placement, setPlacement] = useState();

    // const onClickShowTooltip = (newPlacement, myPage) => (e) => {
    //     setShowLang(prev => !prev);
    //     setAnchorEl(e.currentTarget);
    //     setPlacement(newPlacement)
    // };
    // const handleTooltipClose = (myPage) => {
    //     setShowLang(false);
    // };
    return (
        <div className={`${styles.headerWrap}`}>
            <header>
                <h1 className={styles.logo}>
                    <img src={logo} alt={"logo"} className={styles.logoImg}/>
                    <img src={ticketKor} alt={"티켓"} className={styles.logoTicket}/>
                </h1>
                <nav>
                    <ul className={`gnb ${styles.gnb}`}>
                        <li className={styles.myPageIcon}>
                            {/*<NavLink to={isLoggedIn ? "/myPage" : "/login"} />*/}
                        </li>
                        {/*<li>*/}
                        {/*    <ClickAwayListener onClickAway={() => handleTooltipClose()}>*/}
                        {/*        <div style={{ width: "100%", height: "100%" }}>*/}
                        {/*            <button type="button" onClick={onClickShowTooltip("bottom", false)}*/}
                        {/*                    className={`${styles.lngBtn} ${showLang ? styles.active : ''}`}>*/}
                        {/*                {!isMobile && (*/}
                        {/*                    currentLang === "KOR" ? "한국어" : "English"*/}
                        {/*                )} <span />*/}
                        {/*            </button>*/}
                        {/*            <Tooltip*/}
                        {/*                open={showLang}*/}
                        {/*                anchorEl={anchorEl}*/}
                        {/*                placement={placement}*/}
                        {/*                className={styles.toolTipContainer}*/}
                        {/*            >*/}
                        {/*                <button onClick={() => changeLanguage('ko-KR', dispatch)} type={"button"}*/}
                        {/*                        style={{color: currentLang === "KOR" ? '#222' : null}}>*/}
                        {/*                    한국어*/}
                        {/*                </button>*/}
                        {/*                <button onClick={() => changeLanguage('en-US', dispatch)} type={"button"}*/}
                        {/*                        style={{color: currentLang === "ENG" ? '#222' : null}}>*/}
                        {/*                    English*/}
                        {/*                </button>*/}
                        {/*            </Tooltip>*/}
                        {/*        </div>*/}
                        {/*    </ClickAwayListener>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </header>
            {/*{!error && <SubNav isTablet={isTablet} isPc={isPc} isMobile={isMobile} t={t}/>}*/}
        </div>
    );
};

export default Header;
import React, {useRef, useState} from 'react';
import styles from 'styles/Main.module.css';
import mainLeftPc from "assets/mainL.svg";
import pMainLeftPc from "assets/mainL.png";
import mainRightPc from "assets/mainR.svg";
import pMainRightPc from "assets/mainR.png";
import mainMobile from "assets/mainM.svg";
import pMainMobile from "assets/mainM.png";
import Footer from "components/Footer";
import Cursor from "components/cursor/Cursor";
import {useMediaQuery} from "react-responsive";

const TicketMain = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mainRef = useRef(null);
    const [cursor, setCursor] = useState(false);
    const isPc = useMediaQuery({ query: "(min-width: 1080px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" })

    const onMouseEnter = () => setCursor(true);
    const onMouseLeave = () => setCursor(false);

    return (
        <>
        {isPc && cursor && <Cursor />}
        <div ref={mainRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${styles.mainWrap}`}>
            <div className={styles.mainLeft}>
                {isMobile ? <img src={mainMobile} alt={"main image"} loading="lazy"/>
                    : <img src={mainLeftPc} alt={"main image left side"} loading="lazy"/>
                }
                <div className={styles.btnContainer}>
                    <div className={`arrow ${styles.arrow}`}>
                        {isMobile ? (
                            arr.map(i => (
                                <span key={i} className={`a${i}`} />
                            ))
                        ) : (
                            arr.slice(0, 5).map(i => (
                                <span key={i} className={`a${i}`} />
                            ))
                        )}
                    </div>
                    {isMobile ? <button className={styles.mainTicketBtnM} />
                        : (
                            <em>
                                <button className={styles.mainTicketBtn} />
                            </em>
                        )
                    }
                </div>
            </div>
            {!isMobile &&
                <div className={`${styles.mainRight} ${styles.noLine}`}>
                    <img src={mainRightPc} alt={"main image right side"} loading="lazy"/>
                    <em className={styles.welcome} />
                </div>
            }
        </div>
        </>
)   ;
};

export default TicketMain;
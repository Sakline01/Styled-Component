import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContextProvider';
import style from './navbar.module.css';

const Navbar = () => {
    const { handleDark, isDark, isChecked, setIsChecked } = useContext(ThemeContext);
    const LeftSide = styled.div`
    height: auto;
    min-width: 13%;
    font-size: 1.9rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    `;
    const RightSide = styled.div`
    height: 100%;
    min-width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;
    const MenuItem = styled.button`
    font-size: 1.4rem;
    font-weight: 400;
    height: 100%;
    width:15% ;
    color: ${isDark === "light" ? "black" : "white"};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    background-color: #3f51b5;
    border-style: none;
    &:hover{
        background-color: #0c1e83;
        transition-duration: 2s;
    }
    `;
    return (
        <>
            <LeftSide>
                Site Name
            </LeftSide>
            <RightSide>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Prices</MenuItem>
                <MenuItem>Start Page</MenuItem>
                <MenuItem>Contact</MenuItem>
                <label className={style.switch}>
                    <input checked={isChecked} onChange={(e) => { setIsChecked(t => e.target.checked ? true : false); handleDark() }} type="checkbox" />
                    <div className={`${style.slider} ${style.round}`}>
                    </div>
                </label>
            </RightSide>
        </>
    );
}

export default Navbar;

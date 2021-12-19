import React from 'react';
import style from './WrapperItem.module.css';
const Wrapperitem = ({ source, title }) => {
    return (
        <div className={style.menus}>
            <div>

                <img src={source} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default Wrapperitem;

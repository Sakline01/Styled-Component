import React, { useContext } from 'react';
import styled from "styled-components"
import Wrapperitem from './WrapperItem';
import Navbar from './Navbar';
import { ThemeContext } from '../../ThemeContextProvider';


const Sidebar = () => {
    const { isDark } = useContext(ThemeContext);
    const dark = { back: "black", col: "white", border: `blue solid 3px` };
    const light = { back: "white", col: "black", border: `black solid 1px` }
    const proparty = isDark === "dark" ? dark : light;
    console.log(proparty, isDark);
    const Drawer = styled.div`
    height:60vw;
    min-height: 950px;
    width:20%;
    min-width: 220px;
    background-color:${proparty.back} ;
    color: ${proparty.col};
    border: ${proparty.border};
    border-top: none;
    `;
    const Wrapper = styled.div`
    height: 45%;
    width: 100%;
    border-top: black solid 1px;
    `;
    const SmallWrapper = styled.div`
    height: 8%;
    width: 99vw;
    display: flex;
    align-items: center;
    justify-content:space-between;
    background-color: #3f51b5;
    position: sticky;
    top: 0;
    /* overflow: hidden; */
    `;
    return (
        <div className={isDark === "dark" ? "App darkApp" : "App lightApp"}>
            <Drawer>
                <SmallWrapper>
                    <Navbar />
                </SmallWrapper>
                <Wrapper>
                    <Wrapperitem source="https://cdn1.iconfinder.com/data/icons/hawcons/32/698925-icon-92-inbox-download-512.png" title="Inbox" />
                    <Wrapperitem source="https://cdn3.iconfinder.com/data/icons/indian-republic-day-26/512/1080_Chat_favorite_message_star-512.png" title="Starred" />
                    <Wrapperitem source="https://bit.ly/3FbrZoJ" title="Send Email" />
                    <Wrapperitem source="https://cdn4.iconfinder.com/data/icons/buno-email/32/__email_draft_edit-512.png" title="Drafts" />
                    <Wrapperitem source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBgXNoDBrhPT7hWYFiqMmd2ao8Ii8YeBozA&usqp=CAU" title="Snoozed" />
                </Wrapper>
                <Wrapper>
                    <Wrapperitem source="https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-9.png" title="All mail" />
                    <Wrapperitem source="https://cdn0.iconfinder.com/data/icons/buno-chat-message/32/__delete_trash_message-512.png" title="Trash" />
                    <Wrapperitem source="https://cdn.imgbin.com/1/25/19/computer-email-spam-s7NxXFu2.jpg" title="Spam" />
                    <Wrapperitem source="https://cdn1.iconfinder.com/data/icons/hawcons/32/698925-icon-92-inbox-download-512.png" title="All mail" />
                    <Wrapperitem source="https://cdn1.iconfinder.com/data/icons/hawcons/32/698925-icon-92-inbox-download-512.png" title="Inbox" />
                </Wrapper>
            </Drawer>
        </div>
    );
}

export default Sidebar;

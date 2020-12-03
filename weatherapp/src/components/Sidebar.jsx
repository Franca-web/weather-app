import React, {useState} from 'react';
import "../styles/sidebar.css"
import profileIcon from '../images/background-Image.jpg';

function Sidebar () {
    const [opened, setOpened] = useState(false);
return (
    <div className={`sidebar ${opened ? "sidebar-opened" : ""}`}>
<i onClick={()=> setOpened(!opened)} className="sidebar-toggler fa fa-bars fa-2x fa-2x"></i>
<div className={"profile-info"}>
<img className={"profileImg"} src={profileIcon} alt=""/>
<p className="name">Francisca Abbey Blay </p>
<p className="email"> fablay002@st.ug.edu.gh</p>
</div>
<div className={"menu-actions"}>
</div>
</div>
)
}
export default Sidebar;
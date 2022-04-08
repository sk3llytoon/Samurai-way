import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div className={s.item}>
            <img src='https://img.resized.co/southernstar/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5zb3V0aGVybnN0YXIuaWVcXFwvdXBsb2Fkc1xcXC8yMDIxXFxcLzExXFxcLzE5MTQzNDU0XFxcL0MxLTIuanBnXCIsXCJ3aWR0aFwiOlwiXCIsXCJoZWlnaHRcIjo1MzAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5zb3V0aGVybnN0YXIuaWVcXFwvaW1hZ2VzXFxcL3BsYWNlaG9sZGVyLnBuZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiJmZTVmODIwN2UwZGQzYWU0NThjNDA3MTBmN2FlZTUxOTY2NzFiNDRjIn0=/reader-s-picture-of-the-week.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile
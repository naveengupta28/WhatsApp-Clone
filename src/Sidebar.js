import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import DonutLarge   from "@material-ui/icons/DonutLarge";
import { MoreVert, SearchOutlined} from '@material-ui/icons';
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from '@material-ui/core/IconButton'
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {

const[rooms, setRooms]=useState([])

const[{user},dispatch]=useStateValue();

useEffect(()=>{

 const unsubscribe=   db.collection('rooms').onSnapshot((snapshot)=>
        setRooms(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
          )
    );
    return ()=>{
        unsubscribe();
    }

}, []);

console.log("rooms")
console.log(rooms)

    return (
        <div  className="sidebar">
        <div className="sidebar__header">
            <Avatar src={user?.photoURL}/>
            
            <div className="sidebar__headerRight">
                <IconButton>
                <DonutLarge/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVert/>
                </IconButton>

            </div>
        

        </div>  

        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
            <SearchOutlined/>
            <input placeholder="Search or start new chat" type="text"></input>
            </div>
            
         </div> 

         <div className="sidebar__chats">


         <SidebarChat addNewChat/>
        {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} 
            name={room.data.name}
            />
        ))}
             

         </div>

        </div>
    )
}

export default Sidebar

import { Logout, Settings } from '@mui/icons-material'
import { ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useValue } from '../context/ContextProvider'

const UserMenu = ({anchorUserMenu, setAnchorUser}) => {
 const{dispatch} = useValue()
 const handlecloserUserMenu=()=>{
    setAnchorUser(null)
 }
 
 
 return (
<Menu
anchorEl={anchorUserMenu}
open={Boolean(anchorUserMenu)}
onClose={handlecloserUserMenu}
onClick={handlecloserUserMenu}
>
<MenuItem>
<ListItemIcon>
     <Settings fontSize='small'/>

</ListItemIcon>
Perfil 
</MenuItem>
<MenuItem onClick={()=>dispatch({type:'UPDATE_USER', payload:null})}>
<ListItemIcon>
     <Logout fontSize='small'/>

</ListItemIcon>
Sair 
</MenuItem>
</Menu>

    )
}

export default UserMenu
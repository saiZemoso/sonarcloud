import { IconButton } from "@mui/material"

export const Iconbuttons=({...props})=>{
  
  return(
    <IconButton>
      <img src={props.cname} alt={props.value}/>
    </IconButton>
  )
}
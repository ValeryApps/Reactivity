import React, { FC } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProp{
    onpenForm:()=>void
}

export const NavBar:FC<IProp> = ({onpenForm}) => {
    return (
        <Menu inverted fixed='top'>
           <Container>
           <Menu.Item header>
           <img src="assets/logo.png" alt="log" style={{marginRight:'10px'}}/>
           Reactivity
           </Menu.Item>
           <Menu.Item  name='Activities'/>
           <Menu.Item>
           <Button onClick = {onpenForm}  positive content='Create Activity'/>
           </Menu.Item>
           </Container>
        </Menu>
    )
}
 
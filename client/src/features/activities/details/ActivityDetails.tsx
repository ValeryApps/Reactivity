import React, { FC } from 'react'
import { IActivity } from '../../../app/models/activity'
import { Card, Image, Button } from 'semantic-ui-react'

interface IProp{
    activity:IActivity|null;
    setEditMode: (editMode:boolean)=>void;
    setSelectedActivity:(activity:IActivity| null)=>void;
}
export const ActivityDetails:FC<IProp> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>


        <Image src={`assets/categoryImages/${activity?.category}.jpg`}/>
        <Card.Content>
        <Card.Header>
            {activity?.title}
        <Card.Meta>{activity?.date}</Card.Meta>
        <Card.Description>{activity?.description}</Card.Description>
        </Card.Header>
        </Card.Content>

        <Card.Content extra>
        <Button.Group widths={2}>
        <Button onClick = {()=>setEditMode(true)} basic content='Edit' color='blue'/>
        <Button onClick = {()=> setSelectedActivity(null)} basic content='Cancel' color='grey'/>
        </Button.Group>
        </Card.Content>

        </Card>
    )
}

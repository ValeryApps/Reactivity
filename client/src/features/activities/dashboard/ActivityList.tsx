import React, { FC } from "react";
import {
  Item,
  Button,
  Label,
  Segment,
} from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProp {
  activities: IActivity[];
  selectActivity:(id:string)=>void;
  deleteActivity:(id:string)=>void;
 }
export const ActivityList: FC<IProp> = ({ activities, selectActivity, deleteActivity }) => {
  return (
    <div>
      <Segment clearing>
        <Item.Group divided>
          {activities.map((activity) => (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as="a">{activity.title} </Item.Header>
                <Item.Meta> {activity.date} </Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.city}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button onClick={()=>selectActivity(activity.id)} floated="right" content="View" color="blue" />
                  <Button onClick={()=>deleteActivity(activity.id)} floated="right" content="delete" color="red" />
                  <Label basic content={activity.category}/>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </div>
  );
};
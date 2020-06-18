import React, { FC, useState, FormEvent } from "react";
import { Form, Segment, Header, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid';

interface IProp {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity:(activity:IActivity) =>void;
  editActivity:(activity:IActivity)=>void;
  submitting:boolean;
  
}
export const ActivityForm: FC<IProp> = ({
  setEditMode,
  activity: initialState,
  createActivity,
  editActivity,
  submitting,
 
}) => {
  const initializeForm = () => {
    if (initialState) {
      return initialState;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };
  const [activity, setActity] = useState<IActivity>(initializeForm);

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActity({ ...activity, [name]: value });
  };
  const submiForm = () => {
   
    if(activity.id.length === 0){
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity(newActivity)
    }
    else{
      editActivity(activity)
    }
  };
  return (
    <Segment clearing>
      <Header textAlign="center">Edit form</Header>
      <Form onSubmit={submiForm}>
        <Form.Input
          placeholder="Title"
          value={activity?.title}
          onChange={handleInputChange}
          name="title"
        />
        <Form.TextArea
          rows={4}
          placeholder="Description"
          value={activity?.description}
          onChange={handleInputChange}
          name="description"
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          value={activity?.date}
          onChange={handleInputChange}
          name="date"
        />
        <Form.Input
          placeholder="Category"
          value={activity?.category}
          onChange={handleInputChange}
          name="category"
        />
        <Form.Input
          placeholder="City"
          value={activity?.city}
          onChange={handleInputChange}
          name="city"
        />
        <Form.Input
          placeholder="Venue"
          value={activity?.venue}
          onChange={handleInputChange}
          name="venue"
        />
        <Button loading ={submitting} content="Submit" type="submit" positive floated="right" />
        <Button
          onClick={() => setEditMode(false)}
          content="Cancel"
          type="submit"
          floated="right"
        />
      </Form>
    </Segment>
  );
};

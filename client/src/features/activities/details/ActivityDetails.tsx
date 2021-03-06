import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetaiedInfo from "./ActivityDetaiedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";

interface DetailsParams {
  id: string;
}
const ActivityDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match,
  history
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    activity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id).catch(()=>{
      history.push('/notfound')
    });
  }, [loadActivity, match.params.id, history]);
  
  if (loadingInitial)
    return <LoadingComponent content="Loading activity..." />;
    if(!activity){
      return <h1>Not Found</h1>
    }
  return (
    <Grid>
    <Grid.Column width ={10}>
    <ActivityDetailedHeader activity = {activity}/>
    <ActivityDetaiedInfo activity = {activity}/>
    <ActivityDetailedChat/>
    </Grid.Column>
    <Grid.Column width ={6}>
    <ActivityDetailedSideBar/>
    </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);

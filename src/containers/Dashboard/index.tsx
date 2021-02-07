import React from 'react';
import ProjectMap from 'src/components/page/ProjectMap';
import { Route, Switch } from 'react-router-dom';
import Project from './Project';
import Property from './Property';
import Tower from './Tower';

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectMap} />
      <Route exact path="/:projectId" component={Project} />
      <Route exact path="/:projectId/:towerId" component={Tower} />
      <Route exact path="/:projectId/:towerId/:property" component={Property} />
    </Switch>
  );
};

export default Dashboard;

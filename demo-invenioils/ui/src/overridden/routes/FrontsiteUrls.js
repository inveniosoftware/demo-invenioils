import React from 'react';
import { Route } from 'react-router-dom';
import { Features } from '../frontsite/pages/Features';

export const DemoFrontSiteRoutes = {
  features: `/features`,
};

export const FeaturesRoute = () => {
  return (
    <Route exact path={DemoFrontSiteRoutes.features} component={Features} />
  );
};

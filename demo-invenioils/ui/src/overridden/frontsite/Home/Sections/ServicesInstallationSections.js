import {
  SectionServices,
  SectionInstallation,
} from '@inveniosoftware/react-invenio-app-ils';
import React from 'react';

export const ServicesInstallationSections = () => {
  return (
    <>
      <SectionInstallation />
      <SectionServices />
    </>
  );
};

import { Media } from '@inveniosoftware/react-invenio-app-ils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { DemoFrontSiteRoutes } from '../routes/FrontsiteUrls';

export const RightMenuItem = () => {
  return (
    <>
      <Menu.Item>
        <Link to={DemoFrontSiteRoutes.features}>Features</Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to={{ pathname: 'https://invenioils.docs.cern.ch' }}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </Link>
      </Menu.Item>
    </>
  );
};

export const RightMenuItemMobile = () => {
  return (
    <Media lessThan="computer">
      <Dropdown item icon="help">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={DemoFrontSiteRoutes.features}>
            Features
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            as={Link}
            to={{ pathname: 'https://invenioils.docs.cern.ch' }}
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Media>
  );
};

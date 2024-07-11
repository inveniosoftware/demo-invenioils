import React from 'react';
import { List, Header, Container } from 'semantic-ui-react';
import { SectionServices } from '@inveniosoftware/react-invenio-app-ils';

export const Features = () => {
  return (
    <Container className="spaced pt-4" textAlign="center">
      <SectionServices />
      <Container>
        <Header>
          Checkout the following links to know more about the features and
          customizations in InvenioILS!
        </Header>
        <List relaxed bulleted size="big">
          <List.Item>
            InvenioILS{' '}
            <a href="https://invenioils.docs.cern.ch/">documentation</a>.
          </List.Item>
          <List.Item>
            Demo InvenioILS{' '}
            <a href="https://github.com/inveniosoftware/demo-invenioils">
              source code
            </a>
            .
          </List.Item>
          <List.Item>
            InvenioILS{' '}
            <a href="https://github.com/inveniosoftware/invenio-app-ils">
              backend source code
            </a>
            .
          </List.Item>
          <List.Item>
            InvenioILS{' '}
            <a href="https://github.com/inveniosoftware/react-invenio-app-ils">
              frontend source code
            </a>
            .
          </List.Item>
        </List>
      </Container>
    </Container>
  );
};

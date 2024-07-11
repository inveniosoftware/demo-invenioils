import React from 'react';
import { Header, Label, List, Grid, Card, Divider } from 'semantic-ui-react';

export const LoginDocs = () => {
  return (
    <>
      <Divider />
      <Header size="medium" textAlign="center">
        <Label circular size="huge" color="orange">
          ?
        </Label>
        {'   '}
        Test ILS demo instance
      </Header>
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Card fluid color="orange" className="install-card">
              <Card.Content>
                <Card.Header>As a Patron by logging in with</Card.Header>
                <List>
                  <List.Item>
                    <List.Header>email: patron1@test.ch</List.Header>
                  </List.Item>
                  <List.Item>
                    <List.Header>password: 123456</List.Header>
                  </List.Item>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Card fluid color="orange" className="install-card">
              <Card.Content>
                <Card.Header>As a Librarian by logging in with</Card.Header>
                <List>
                  <List.Item>
                    <List.Header>email: librarian@test.ch</List.Header>
                  </List.Item>
                  <List.Item>
                    <List.Header>password: 123456</List.Header>
                  </List.Item>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <List>
            <List.Header>Note:</List.Header>
            <List.Item>
              Email sending functionality is disabled for the demo instance.
            </List.Item>
            <List.Item>The demo data will be recreated periodically.</List.Item>
          </List>
        </Grid.Row>
      </Grid>
    </>
  );
};

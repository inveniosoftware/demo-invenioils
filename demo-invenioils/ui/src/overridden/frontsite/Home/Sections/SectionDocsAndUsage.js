import React from 'react';
import {
  Card,
  Container,
  Header,
  Label,
  List,
  Grid,
  Divider,
} from 'semantic-ui-react';

export const SectionDocsAndUsage = () => {
  return (
    <Container fluid className="dot-background-container">
      <Container fluid className="dot-background">
        <Container className="fs-landing-page-section">
          <Header
            as="h1"
            className="section-header highlight"
            textAlign="center"
          >
            Documentation and usage
          </Header>
          <Grid centered stackable>
            <Grid.Row>
              <Grid.Column width={12}>
                <Card.Group itemsPerRow={2} stackable className="install-cards">
                  <Card color="orange" className="install-card">
                    <Card.Content>
                      <Header size="medium">
                        <Label circular size="huge" color="orange">
                          1
                        </Label>{' '}
                        Test ILS demo instance
                      </Header>
                      <Card.Description textAlign="left">
                        <List>
                          <List.Item className="install-item">
                            <List relaxed>
                              <List.Item className="install-item">
                                As a patron by logging in with
                                <List>
                                  <List.Item>
                                    <List.Header>
                                      email: patron1@test.ch
                                    </List.Header>
                                  </List.Item>
                                  <List.Item>
                                    <List.Header>password: 123456</List.Header>
                                  </List.Item>
                                </List>
                              </List.Item>
                              <List.Item className="install-item">
                                As a librarian by logging in with
                                <List>
                                  <List.Item>
                                    <List.Header>
                                      email: librarian@test.ch
                                    </List.Header>
                                  </List.Item>
                                  <List.Item>
                                    <List.Header>password: 123456</List.Header>
                                  </List.Item>
                                </List>
                              </List.Item>
                              <List.Item className="install-item">
                                <List.Header>Note:</List.Header>
                                <List>
                                  <List.Item>
                                    Email sending functionality is disabled for
                                    the demo instance.
                                  </List.Item>
                                  <List.Item>
                                    The demo data will be recreated
                                    periodically.
                                  </List.Item>
                                </List>
                              </List.Item>
                            </List>
                          </List.Item>
                        </List>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card color="orange" className="install-card">
                    <Card.Content>
                      <Header size="medium">
                        <Label circular size="huge" color="orange">
                          2
                        </Label>{' '}
                        Checkout docs and code
                      </Header>
                      <Card.Description textAlign="left">
                        <List>
                          <List.Item className="install-item">
                            InvenioILS{' '}
                            <a href="https://invenioils.docs.cern.ch/">
                              documentation
                            </a>
                            .
                          </List.Item>
                          <Divider />
                          <List.Item className="install-item">
                            Demo InvenioILS{' '}
                            <a href="https://github.com/inveniosoftware/demo-invenioils">
                              source code
                            </a>
                            .
                          </List.Item>
                          <Divider />
                          <List.Item className="install-item">
                            InvenioILS{' '}
                            <a href="https://github.com/inveniosoftware/invenio-app-ils">
                              backend source code
                            </a>
                            .
                          </List.Item>
                          <List.Item className="install-item">
                            InvenioILS{' '}
                            <a href="https://github.com/inveniosoftware/react-invenio-app-ils">
                              frontend source code
                            </a>
                            .
                          </List.Item>
                        </List>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
};

import React from 'react';
import { Message } from 'semantic-ui-react';

export const CustomBanner = () => {
  return (
    <Message className="center no-margin warning">
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<i class="exclamation triangle icon"></i> This is the Invenio ILS <b>demo instance</b>: data might be periodically deleted and recreated.',
        }}
      />
    </Message>
  );
};

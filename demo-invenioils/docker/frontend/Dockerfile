ARG BACKEND_BUILT_IMAGE_URL

# Import invenio built image
FROM $BACKEND_BUILT_IMAGE_URL as invenio-build

FROM node:14 as react-build

ENV WORKING_DIR=/code
RUN mkdir -p ${WORKING_DIR}
COPY ./ ${WORKING_DIR}
WORKDIR ${WORKING_DIR}

ARG ENV_NAME
ARG INVENIO_UI_URL
ARG INVENIO_REST_ENDPOINTS_BASE_URL
ENV REACT_APP_INVENIO_UI_URL=$INVENIO_UI_URL
ENV REACT_APP_INVENIO_REST_ENDPOINTS_BASE_URL=$INVENIO_REST_ENDPOINTS_BASE_URL
ENV REACT_APP_ENV_NAME=$ENV_NAME

# build ui react application
RUN cd ui && npm install && \
 REACT_APP_INVENIO_UI_URL=$INVENIO_UI_URL \
 REACT_APP_INVENIO_REST_ENDPOINTS_BASE_URL=$INVENIO_REST_ENDPOINTS_BASE_URL \
 REACT_APP_ENV_NAME=$ENV_NAME \
 npm run build

FROM nginx:1.22

ENV INVENIO_ASSETS=/usr/share/nginx/html/invenio-assets
ENV REACT_ASSETS=/usr/share/nginx/html/react-assets

RUN mkdir -p ${INVENIO_ASSETS}
RUN mkdir -p ${REACT_ASSETS}

COPY --from=react-build /code/ui/build ${REACT_ASSETS}
COPY --from=invenio-build /opt/invenio/var/instance/invenio-assets ${INVENIO_ASSETS}
CMD ["nginx", "-g", "daemon off;"]

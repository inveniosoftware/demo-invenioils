FROM inveniosoftware/centos7-python:3.9

ENV BACKEND_WORKING_DIR=${WORKING_DIR}/src/backend

RUN mkdir -p ${BACKEND_WORKING_DIR}
COPY ./ ${BACKEND_WORKING_DIR}
WORKDIR ${BACKEND_WORKING_DIR}

ENV INVENIO_STATIC_URL_PATH='/invenio-assets'
ENV INVENIO_INSTANCE_PATH=${WORKING_DIR}/var/instance
ENV INVENIO_STATIC_FOLDER=${INVENIO_INSTANCE_PATH}/invenio-assets

COPY Pipfile Pipfile.lock ./
RUN pipenv install --deploy --system

RUN invenio collect -v && \
    invenio webpack create && \
    invenio webpack install --unsafe && \
    invenio webpack build

ENV INVENIO_USER_ID=1000
USER ${INVENIO_USER_ID}

CMD [ "bash", "-c", "uwsgi --module invenio_app.wsgi:application --socket 0.0.0.0:5000 --master --processes 2 --threads 2 --stats /tmp/stats.socket"]
FROM inveniosoftware/centos7-python:3.9

COPY ./docker/backend/uwsgi.ini ${INVENIO_INSTANCE_PATH}
COPY ./invenio.cfg ${INVENIO_INSTANCE_PATH}
COPY ./templates/ ${INVENIO_INSTANCE_PATH}/templates/

COPY Pipfile Pipfile.lock ./
RUN pipenv install --deploy --system

# define where assets will be built by webpack (by `INVENIO_STATIC_FOLDER`)
ENV INVENIO_STATIC_URL_PATH='/invenio-assets'
ENV INVENIO_STATIC_FOLDER=${INVENIO_INSTANCE_PATH}/invenio-assets

RUN invenio collect -v && \
    invenio webpack create && \
    invenio webpack install --unsafe && \
    invenio webpack build

# change permissions: give read and traverse permissions to everyone
RUN chown -R invenio:root ${INVENIO_INSTANCE_PATH} && \
    chmod -R a=rx ${INVENIO_INSTANCE_PATH}

USER ${INVENIO_USER_ID}

CMD [ "bash", "-c", "uwsgi --module invenio_app.wsgi:application --socket 0.0.0.0:5000 --master --processes 2 --threads 2 --stats /tmp/stats.socket"]

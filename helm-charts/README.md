# [Beta] Invenio Helm Chart

This repository contains the helm chart to deploy an Invenio instance.

:warning: Please note that this configuration is not meant to be used in production.
This configuration should be adapted and hardened depending on your infrastructure and
constraints.

1. [Pre-requisites](#pre-requisites)
2. [Configuration](#configuration)
3. [Secret management](#secret-management)
4. [Deploy your instance](#deploy-your-instance)

## Pre-requisites

- [Helm, version 3.x](https://helm.sh/docs/intro/install/)

Depending on the underlying technology, pre-requisites and configuration might
change.

- [OpenShift](README-OpenShift.md)

## Configuration

:warning: Before installing you need to configure two things in your
`values.yaml` file.

- Host
- The web/worker docker images.

``` yaml
host: yourhost.localhost

worker:
  image: your/invenio-image
```

The following table lists the configurable parameters of the `invenio` chart and their default values, and can be overwritten via the helm `--set` option.

### General

Parameter | Description | Default
----------|-------------|--------
`host` | Your hostname | `yourhost.localhost`

### Invenio
Parameter | Description                                           | Default
----------|-------------------------------------------------------|--------
`invenioils.secret_name` | The invenio secret name                               | `invenio-secrets`
`invenioils.secret_key` | The invenio secret key; **set it**!                   | `secret-key`
`invenioils.csrf_enabled` | Whether CSRF enabled or not                           | `true`
`invenioils.csrf_secret` | The CSRF secret salt                                  | `csrf-secret-salt`
`invenioils.login_salt` | The invenio login salt                                | `login_salt`
`invenioils.existing_secret` | Whether to use an existing secret or create a new one | `false`
`logging.sentry.enabled` | Enable Sentry logging                                 | `false`
`logging.sentry.existing_secret` | Whether to use an existing secret or create a new one | `false`
`logging.sentry.secret_name` | Name of the secret to use or create                   | `sentry-secrets`
`logging.sentry.dsn` | DSN for sentry                                        | `""`
`logging.sentry.celery` | Configure Celery to send logging to Sentry            | `true`
`logging.sentry.environment` | Sentry environment                                    | `qa`
`search.index_prefix` | Search index prefix                                   | `""`
`invenioils.debug` | Whether the debug enabled or not                      | `false`
`invenioils.collect_storage` | The collect storage                                   | `flask_collect.storage.file`
`invenioils.mail_suppress_send` | Whether to suppress emails sending or not             | `true`
`invenioils.spa_host` | The SPA host of demo-invenioils website               | `https://invenioils.web.cern.ch`
`invenioils.uwsgi.processes` | Number of uwsgi process for the web pods              | `2`
`invenioils.uwsgi.threads` | Number of uwsgi threads for the web pods              | `2`

### Worker nodes
Parameter | Description                                    | Default
----------|------------------------------------------------|--------
`worker.image` | Image to use for the invenio worker pods       | `your/invenio-backend-image`
`worker.imagePullSecret` | Secrets to use to pull the invenio worker pods | `""`
`worker.app` | App used by the celery command                 | `invenio_app.celery`
`worker.concurrency` | Number of concurrent celery workers per pod    | `2`
`worker.log_level` | Logging level in the invenio worker            | `INFO`
`worker.replicas` | Number of replicas for the invenio worker pods | `1`
`worker.celery_pidfile` | Celery beat PID file                           | `/var/run/celerybeat.pid`
`worker.celery_schedule` | Celery schedule folder                         | `/var/run/celery-schedule`
`worker.celery_pool_limit` | Celery pool limit                              | `50`

### HAProxy
Parameter | Description                                | Default
----------|--------------------------------------------|--------
`haproxy.image` | Image to use for the HAProxy               | `haproxy:2.1`

### Nginx
Parameter | Description                | Default
----------|----------------------------|--------
`nginx.image` | Image to use for the nginx | `your/invenio-frontend-image`

### Redis
Parameter | Description                                | Default
----------|--------------------------------------------|--------
`redis.enabled` | Whether to enable redis within the cluster | `true`
`redis.host` | Name of Redis host if `enabled` is `false` | `""`
`redis.image` | Image to use for the Redis                 | `redis:7`

### RabbitMQ
Parameter | Description | Default
----------|-------------|--------
`rabbitmq.enabled` | Whether to enable rabbitmq within the cluster | `true`
`rabbitmq.image` | Image to use for the rabbitmq                 | `rabbitmq:3-management`
`rabbitmq.existing_secret` | Whether to use an existing secret or create a new one | `false`
`rabbitmq.secret_name` | Name of the secret to use or create | `mq-secrets`
`rabbitmq.default_password` | The rabbitmq password | `mq_password`
`rabbitmq.celery_broker_uri` | The celery broker URL | `amqp://guest:mq_password@mq:5672/`

### PostgreSQL
Parameter | Description | Default
----------|-------------|--------
`postgresql.enabled` | Whether to enable postgresql within the cluster | `false`
`postgresql.existing_secret` |Whether to use an existing secret or create a new one | `false`
`postgresql.secret_name` | Name of the secret to use or create | `db-secrets`
`postgresql.user` | The postgresql user | `invenioils`
`postgresql.password` | The postgresql password | `db_password`
`postgresql.host` | The postgresql host name | `db`
`postgresql.port` | The postgresql port | `5432`
`postgresql.database` | The postgresql database name | `invenioils`
`postgresql.sqlalchemy_db_uri` | The postgresql DB URI | `postgresql+psycopg2://invenio:db_password@db:5432/invenio`

### Search
Parameter | Description                                           | Default
----------|-------------------------------------------------------|--------
`search.enabled` | Whether to enable the search cluster                  | `false`
`search.existing_secret` | Whether to use an existing secret or create a new one | `false`
`search.secret_name` | Name of the secret to use or create                   | `search-secrets`
`search.host` | The search host as used by invenio                    | `es-invenioils.cern.ch`
`search.port` | The search port                                       | `443`
`search.user` | The search username                                   | `username`
`search.password` | The search password                                   | `password`
`search.url_prefix` | The URL prefix                                        | `443`
`search.use_ssl` | Whether to use SSL or not                             | `true`
`search.verify_certs` | Whether to verify certificates or not                 | `false`

### Persistence
Parameter | Description                                | Default
----------|--------------------------------------------|--------
`persistence.enabled` | Whether to enable persistence or not       | `true`
`persistence.name` | Name of the persistent volume claim        | `shared-volume`
`persistence.access_mode` | Access mode of the persistent volume claim | `ReadWriteMany`
`persistence.size` | Size of the persistent volume claim        | `10G`
`persistence.storage_class` | The storage class                          | `""`


### Ingress
Parameter | Description                      | Default
----------|----------------------------------|--------
`ingress.enabled` | Whether to enable ingress or not | `false`
`ingress.class` | Ingress class                    | `nginx.yaml-internal`
`ingress.sslSecretName` | SSL secret name                  | `""`

## Secret management

It is recommended to configure the following variables. It can be done in the
`values.cern.yaml` file.

```yaml

invenio:
  init: true  # initiates db, index, and admin roles
  demo_data: true  # for a demo set of records
  default_users:  # for creating users on install
    "user@example.com": "password"
  secret-key: "my-very-safe-secret"

rabbitmq:
  default_password: "mq_password"
  # Edit the following URI with the values from just above
  celery_broker_uri: "amqp://guest:mq_password@mq:5672/"

postgresql:
  user: "invenio"
  password: "db_password"
  host: "db"
  port: "5432"
  database: "invenio"
  # Edit the following URI with the values from just above
  sqlalchemy_db_uri: "postgresql+psycopg2://invenio:db_password@db:5432/invenio"
```

It's however **strongly advised** to override them either through a value file
or through the `--set` flag, especially if running anything else than a
private test environment. If using OpenShift, you can use
[Secrets](README-OpenShift.md/#secret-management).

You can see an example of the `--set` option. Multiple values and/or `--set`
flags can be used in the same command.

```bash
DB_PASSWORD=$(openssl rand -hex 8)
helm install -f safe-values.yaml \
  --set search.password=$SEARCH_PASSWORD \
  --set postgresql.password=$DB_PASSWORD \
  invenio ./invenio-k8s --namespace invenio
```

## Deploy your instance

To deploy your instance you have to options, directly from GitHub or from your local clone.

Install the demo-invenioils helm-charts

```bash
cd helm-invenio/
$ helm install [-f values.cern.yaml] invenio .
# NAME: invenio
# LAST DEPLOYED: Mon Mar  9 16:25:15 2020
# NAMESPACE: default
# STATUS: deployed
# REVISION: 1
# TEST SUITE: None
# NOTES:Invenio is ready to rock :rocket:
```

If for some reason you need to update parameters you can simply edit them in
the `values.cern.yaml` file and use the `upgrade` command:

```bash
$ helm upgrade --atomic -f values.cern.yaml invenio .
# Release "invenio" has been upgraded. Happy Helming!
# NAME: invenio
# LAST DEPLOYED: Tue Dec  7 15:29:08 2021
# NAMESPACE: default
# STATUS: deployed
# REVISION: 2
# TEST SUITE: None
# NOTES:
# Invenio is ready to rock 🚀
```
If for some reason you need to delete the last release, simply :

```bash
$  helm delete invenio
# release "invenio" uninstalled
```
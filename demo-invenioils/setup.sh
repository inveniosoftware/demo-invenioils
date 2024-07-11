#!/usr/bin/env bash

# -*- coding: utf-8 -*-
#
# This file is part of Invenio.
#
# Copyright (C) 2022 CERN.
#
# Invenio is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.

docker-compose up -d
invenio-cli install
invenio-cli services setup

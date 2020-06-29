#!/usr/bin/env python
# coding=utf-8
"""
===========
JSON Config
===========

A convenience utility for working with JSON config files.

>>> import json_config, os
>>> config = json_config.connect('config.json')
>>> config['root'] = '/var/www/html'
>>> print(config['root'])
/var/www/html
>>> config
Connect({'root': '/var/www/html'})

>>> os.remove('config.json')

"""
from __future__ import absolute_import

__author__ = 'Manu Phatak'
__email__ = 'bionikspoon@gmail.com'
__version__ = '2.0.1'

import logging
from ._compat import NullHandler

logging.getLogger(__name__).addHandler(NullHandler())

from .main import connect

__all__ = ['connect']

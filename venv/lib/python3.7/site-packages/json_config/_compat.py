# coding=utf-8
"""Python 2to3 compatibility handling."""

import logging

from future.utils import PY26, PY3, PYPY

__all__ = ['NullHandler', 'FileNotFoundError']

if not PY26 or PYPY:
    from logging import NullHandler
else:
    # Python < 2.7
    class NullHandler(logging.Handler):  # pragma: no cover
        def emit(self, record):
            pass

if PY3:
    # noinspection PyUnresolvedReferences,PyCompatibility
    from builtins import FileNotFoundError  # pragma: no cover
else:
    FileNotFoundError = IOError  # pragma: no cover

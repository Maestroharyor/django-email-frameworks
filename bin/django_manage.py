#!/usr/bin/env python3

import sys
import os

# Determine the project root directory
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

from django.core.management import execute_from_command_line

# Add project directories to Python path
sys.path.insert(0, os.path.join(PROJECT_ROOT, 'src'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, 'src', 'emails_app'))

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "emails_app.settings")
    execute_from_command_line(sys.argv)

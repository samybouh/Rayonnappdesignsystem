from __future__ import annotations
from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
import sys
from pathlib import Path

# --- Assure l'import du package app/ ---
BASE_DIR = Path(__file__).resolve().parents[1]  # dossier projet
if str(BASE_DIR) not in sys.path:
    sys.path.append(str(BASE_DIR))

# Alembic config + logging
config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Import des metadata
from app.db.base import Base  # noqa
import app.db.models  # noqa
target_metadata = Base.metadata

def get_url() -> str:
    from app.core.config import settings
    return settings.SQLALCHEMY_DATABASE_URI

def run_migrations_offline() -> None:
    context.configure(
        url=get_url(), target_metadata=target_metadata,
        literal_binds=True, compare_type=True
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
        url=get_url(),
    )
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata, compare_type=True)
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()

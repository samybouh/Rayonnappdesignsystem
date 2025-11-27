"""onboarding_questions

Revision ID: e4b1f7d09f98
Revises: 9040f3556fd3
Create Date: 2025-11-17 17:59:15.748030

"""
from typing import Sequence, Union
from sqlalchemy.dialects.mysql import JSON

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e4b1f7d09f98'
down_revision: Union[str, Sequence[str], None] = '9040f3556fd3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade():
    op.create_table(
        'onboarding_questions',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('key', sa.String(50), unique=True, index=True, nullable=False),
        sa.Column('label', sa.String(255), nullable=False),
        sa.Column('help', sa.String(500)),
        sa.Column('type', sa.String(30), nullable=False),
        sa.Column('required', sa.Boolean, nullable=False, server_default=sa.text('1')),
        sa.Column('order', sa.Integer, nullable=False, server_default=sa.text('1')),
        sa.Column('options', sa.JSON()),  # SQLAlchemy sérialise le dict -> JSON proprement
        sa.Column('min', sa.Integer),
        sa.Column('max', sa.Integer),
        sa.Column('step', sa.Integer),
        sa.Column('map_to', sa.String(50)),
        sa.Column('enabled', sa.Boolean, nullable=False, server_default=sa.text('1')),
    )

    onboarding_questions = sa.table(
        'onboarding_questions',
        sa.column('key', sa.String(50)),
        sa.column('label', sa.String(255)),
        sa.column('help', sa.String(500)),
        sa.column('type', sa.String(30)),
        sa.column('required', sa.Boolean),
        sa.column('order', sa.Integer),
        sa.column('options', sa.JSON),
        sa.column('min', sa.Integer),
        sa.column('max', sa.Integer),
        sa.column('step', sa.Integer),
        sa.column('map_to', sa.String(50)),
        sa.column('enabled', sa.Boolean),
    )

    op.bulk_insert(onboarding_questions, [
        {
            "key": "main_goal",
            "label": "Quel est ton objectif principal ?",
            "help": "Choisis l’option la plus proche",
            "type": "single_choice",
            "required": True,
            "order": 1,
            "options": [
                {"value":"improve","label":"Améliorer mes résultats"},
                {"value":"organize","label":"Mieux m'organiser"},
                {"value":"motivated","label":"Rester motivé"},
                {"value":"efficient","label":"Être plus efficace"},
            ],
            "map_to": "main_goal",
            "enabled": True,
        },
        {
            "key": "class_level",
            "label": "Ton niveau scolaire",
            "help": None,
            "type": "single_choice",
            "required": True,
            "order": 2,
            "options": [
                {"value":"6eme","label":"6ème"},
                {"value":"5eme","label":"5ème"},
                {"value":"4eme","label":"4ème"},
                {"value":"3eme","label":"3ème"},
                {"value":"seconde","label":"Seconde"},
                {"value":"premiere","label":"Première"},
                {"value":"terminale","label":"Terminale"},
                {"value":"superieur","label":"Supérieur"},
            ],
            "map_to": "class_level",
            "enabled": True,
        },
        {
            "key": "subjects",
            "label": "Quelles matières veux-tu travailler ?",
            "help": None,
            "type": "multi_choice",
            "required": False,
            "order": 3,
            "options": [
                {"value":"maths","label":"Maths"},
                {"value":"physique","label":"Physique"},
                {"value":"SVT","label":"SVT"},
                {"value":"anglais","label":"Anglais"},
                {"value":"histoire","label":"Histoire"},
                {"value":"philo","label":"Philo"},
                {"value":"informatique","label":"Informatique"},
                {"value":"eco","label":"Éco"},
            ],
            "map_to": "subjects",
            "enabled": True,
        },
        {
            "key": "weekly_target_min",
            "label": "Combien de minutes par semaine ?",
            "help": None,
            "type": "slider",
            "required": True,
            "order": 4,
            "min": 60, "max": 900, "step": 15,
            "map_to": "weekly_target_min",
            "enabled": True,
        },
        {
            "key": "work_min",
            "label": "Durée de travail par cycle (min)",
            "help": None,
            "type": "number",
            "required": True,
            "order": 5,
            "min": 15, "max": 90, "step": 5,
            "map_to": "work_min",
            "enabled": True,
        },
        {
            "key": "break_min",
            "label": "Durée de pause par cycle (min)",
            "help": None,
            "type": "number",
            "required": True,
            "order": 6,
            "min": 5, "max": 30, "step": 5,
            "map_to": "break_min",
            "enabled": True,
        },
        {
            "key": "rounds",
            "label": "Nombre de cycles",
            "help": None,
            "type": "number",
            "required": True,
            "order": 7,
            "min": 1, "max": 8, "step": 1,
            "map_to": "rounds",
            "enabled": True,
        },
    ])

def downgrade():
    op.drop_table('onboarding_questions')

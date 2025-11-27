# alembic/versions/a85589bcbe2b_users_0003_onboarding_cols_and_answers.py
from alembic import op
import sqlalchemy as sa

# revision identifiers
revision = "a85589bcbe2b"
down_revision = "e4b1f7d09f98"
branch_labels = None
depends_on = None

def _has_table(table: str) -> bool:
    bind = op.get_bind()
    insp = sa.inspect(bind)
    return insp.has_table(table)

def _has_col(table: str, col: str) -> bool:
    bind = op.get_bind()
    insp = sa.inspect(bind)
    try:
        return any(c["name"] == col for c in insp.get_columns(table))
    except Exception:
        return False

def upgrade():
    # users: add missing cols only
    if not _has_col("users", "main_goal"):
        op.add_column("users", sa.Column("main_goal", sa.String(50), nullable=True))

    if not _has_col("users", "onboarding_done"):
        # BOOL default for MySQL
        op.add_column(
            "users",
            sa.Column("onboarding_done", sa.Boolean(), server_default=sa.text("0"), nullable=False),
        )

    # answers table (id, user_id, key, value)
    if not _has_table("user_onboarding_answers"):
        op.create_table(
            "user_onboarding_answers",
            sa.Column("id", sa.Integer, primary_key=True),
            sa.Column("user_id", sa.Integer, sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True),
            sa.Column("key", sa.String(50), nullable=False),
            sa.Column("value", sa.Text(), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.text("CURRENT_TIMESTAMP")),
            sa.Column("updated_at", sa.DateTime(timezone=True),
                      server_default=sa.text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")),
            sa.UniqueConstraint("user_id", "key", name="uq_user_answer_key"),
        )

def downgrade():
    if _has_table("user_onboarding_answers"):
        op.drop_table("user_onboarding_answers")
    if _has_col("users", "onboarding_done"):
        op.drop_column("users", "onboarding_done")
    if _has_col("users", "main_goal"):
        op.drop_column("users", "main_goal")

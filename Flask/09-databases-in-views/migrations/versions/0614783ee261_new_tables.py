"""new tables

Revision ID: 0614783ee261
Revises: 
Create Date: 2024-09-22 15:39:22.806947

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0614783ee261'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('puppies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('puppies')
    # ### end Alembic commands ###

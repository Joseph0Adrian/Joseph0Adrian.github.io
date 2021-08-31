from flask import Blueprint

# base = Blueprint('base', __name__, template_folder='templates', static_folder='static')
base = Blueprint('base', __name__, template_folder='templates')
from . import routes
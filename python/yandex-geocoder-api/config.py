import os

class Config:
	SECRET_KEY = os.environ.get('823764c6-f937-43cb-a80d-1d8118746554')

class Development(Config):
	DEBUG = True
	SECRET_KEY = os.environ.get('823764c6-f937-43cb-a80d-1d8118746554') or 'clave'
class Testing(Config):
	TESTING = True

class Production(Config):
	pass	

config = {
	'development': Development,
	'testing': Testing,
	'production': Production,

	'default': Development
}
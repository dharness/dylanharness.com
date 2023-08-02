.PHONY: deploy

deploy:
	npx push-dir --dir=dist --branch=gh-pages --verbose
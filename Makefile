.PHONY: deploy

deploy:
	npx push-dir --dir=software-website/public --branch=gh-pages --verbose
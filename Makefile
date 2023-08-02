.PHONY: build deploy

build:
	cd software-website && npm run build

deploy:
	npx push-dir --dir=software-website/public --branch=gh-pages --verbose
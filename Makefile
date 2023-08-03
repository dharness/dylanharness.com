.PHONY: build deploy

build:
	cd motion-website && npm run build; \
	cp -R ./dist/* ./../software-website/static/motion; \
	cd ../software-website && npm run build; \

deploy:
	npx push-dir --dir=software-website/public --branch=gh-pages --verbose
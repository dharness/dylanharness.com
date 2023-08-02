.PHONY: build deploy

build:
	cd software-website && npm run build; \
	cd ../mobile-website && npm run build; \
	cp ./dist ./../public/motion

deploy:
	npx push-dir --dir=software-website/public --branch=gh-pages --verbose
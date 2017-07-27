docker:
	docker build -t patrickrainier/node-docker .

publish: docker
	docker push patrickrainier/node-docker

docker-alpine:
	docker build -t patrickrainier/node-docker:alpine -f Dockerfile-alpine .

publish-alpine: docker-alpine
	docker push patrickrainier/node-docker:alpine
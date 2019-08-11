image_name := my-hello

register-image:
	eval $(shell minikube docker-env)
	docker build -t $(image_name) .

deploy: register-image
	cat pod*.yaml | kubectl apply -f -

make-request:
	$(eval pod_name := $(shell kubectl get po $(app_from) -o name | cut -d/ -f2))
	$(eval pod_ip := $(shell kubectl get po $(app_to) -o jsonpath='{.status.podIP}'))
	kubectl exec -it $(pod_name) -- node -p 'const fetch = require("node-fetch"); fetch("http://$(pod_ip)").then(res => console.log(res.status))'

clean:
	cat pod*.yaml | kubectl delete -f -

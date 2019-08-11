pod_name := my-app

cat-sa-dir:
	@kubectl exec -it $(pod_name) -- find "$(shell $(MAKE) get-mount-path)" -type f -exec bash -c 'echo {} ; cat {}; echo -e "\n"' \;

ls-sa-dir:
	@kubectl exec -it $(pod_name) -- ls $(shell $(MAKE) get-mount-path)

get-mount-path:
	@kubectl get po my-app -o 'jsonpath={.spec.containers[0].volumeMounts[0].mountPath}'

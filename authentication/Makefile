service_account_name := default
tmp_cacert_file := __cacert.pem

check-api:
	$(MAKE) get-ca-cert > $(tmp_cacert_file)
	bash -c 'curl $(shell $(MAKE) get-cluster-address)/api \
		--header "Authorization: Bearer $(shell $(MAKE) get-api-token)" \
		--cacert $(tmp_cacert_file)'

get-cluster-address:
	@kubectl config view -o jsonpath='{.clusters[?(@.name == "$(shell kubectl config current-context)")].cluster.server}'

get-api-token:
	@kubectl get secrets $(shell $(MAKE) get-secret-name) -o 'jsonpath={.data.token}' | base64 --decode

get-secret-name:
	@kubectl get serviceaccounts $(service_account_name) -o jsonpath='{.secrets[0].name}'

get-ca-cert:
	@kubectl get secrets $(shell $(MAKE) get-secret-name) -o "jsonpath={.data.ca\.crt}" | base64 --decode

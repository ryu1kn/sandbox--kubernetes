# Creating resources in a namespace specified at run time

build_dir ?= build
kustomize_dir ?= base
kustomize_work ?= $(build_dir)/$(kustomize_dir)
output_path ?= $(build_dir)/result.yaml
namespace ?= app

define NAMESPACE_DEF
apiVersion: v1
kind: Namespace
metadata:
  name: $(namespace)
endef

.PHONEY: all
all: $(output_path)

$(output_path): $(kustomize_work)/namespace.yaml
	(cd $(kustomize_work) && kustomize edit set namespace $(namespace)) \
	&& kustomize build $(kustomize_work) -o $@

export NAMESPACE_DEF
$(kustomize_work)/namespace.yaml: $(kustomize_work)
	echo "$$NAMESPACE_DEF" > $@

$(kustomize_work): $(build_dir)
	cp -r $(kustomize_dir) $@

$(build_dir):
	mkdir -p $@

clean:
	rm -rf $(build_dir)

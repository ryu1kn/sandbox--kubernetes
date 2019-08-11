
# Pod credentials

Every pod has a service account associated with it and a pod starts with the secrets of the service account mounted on a file sytem.

```sh
$ make cat-sa-dir
```

This gets the same information what you can get in [authentication](../authentication/README.md) directory.

## Refs

* [Kubernetesのユーザー管理と認証・権限確認機構を理解しよう](https://knowledge.sakura.ad.jp/21129/)
* [Kubernetes の認証とアクセス制御](https://naokirin.hatenablog.com/entry/2018/05/03/213023)

# Review an import configuration

Use Job Manager to review the configuration before importing a file.

1. Open `MDM` > `Manual uploads`.
2. Find the intended configuration and select `Start Import` on its card.
3. Review its configuration ID, import service, description, execution settings, and read-only service parameter metadata.
4. Confirm the file structure with the configuration owner before submitting data.

Do not enable multi-threading or change execution mode or priority without the configuration owner's approval. These settings affect processing capacity and ordering. Imports under different configurations can run concurrently.

Use [Import a file manually](manual-import.md) to prepare and submit the file, then [monitor it in File History](../job-manager/mdm/file-history.md).

Creating backend configurations, changing import services, and maintaining legacy OMS configuration fields are technical administration tasks. Those procedures are in [Everything: Configuration options](https://github.com/hotwax/oms-documentation/blob/everything-bagel-pub/everything/operations/oms-administration/data-manager/configuration-options.md).

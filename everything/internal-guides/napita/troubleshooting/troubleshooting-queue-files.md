# Troubleshooting queue files

In Napita a queue acts as a temporary storage buffer that facilitates the seamless transfer of data between processors within a data flow. As data moves from one processor to another, it is temporarily stored in these queues, allowing for efficient management of data flow and ensuring smooth processing.
While queues offer several advantages, they may occasionally require maintenance to ensure the integrity and efficiency of the data flow. One common scenario that necessitates attention is when a processor fails due to a corrupted file present in the queue.
For example, consider a data flow scenario where files are retrieved from an SFTP location from one processor and further processed by subsequent processors. If a file retrieved from the SFTP location have invalid file format, it can prevent the subsequent processor from executing successfully. In such instances, simply changing the invalid file on the SFTP location may not suffice, as the processor will still attempt to process the previous file, resulting in repeated failures.
To address this issue effectively, it becomes essential to empty the queue containing the invalid file and replace it with a valid file from the data source. By doing so, the data flow can resume its operation with the latest and valid data, ensuring accurate processing and preventing further disruptions.

## Resolution Steps:

**Identify the Queue:** 
Determine which queue in your data flow is holding the invalid file. This queue is typically located between the processor that retrieved the file and the subsequent processor that failed to execute.

**Empty the Queue:**
1. Right-click on the queue located before the failing processor.
2. Select the "Empty Queue" option to remove the corrupted file from the queue.

**Re-run the Processor:**
1. Right-click on the processor located prior to the emptied queue.
2. Choose the "Run Once" option to execute the processor again and list a new file from the source (e.g., SFTP location).
3. This action ensures that the latest file is listed in the queue for processing.

**Verify Queue Contents:**
1. To verify that the queue is now holding the correct file, right-click on the queue.
2. Select the "List Queues" option. This will display all files currently listed in the queue.
3. Click on the eye icon next to the file name to view and verify the data of the latest file.

**Process the File:**
1. After confirming that the correct file is in the queue, right-click on the subsequent processor that processes the file and click on Run Once button. 
2. Ensure that the file is successfully processed by monitoring the processor's status and logs.

**Schedule Processors:**
1. Once the file is successfully processed, you can schedule the processors in your Napita flow as needed.
2. Verify that the data flow is functioning as expected by monitoring subsequent data processing steps.

By following these troubleshooting steps, you can effectively manage queues in Napita and ensure smooth data processing within your workflows, addressing issues such as Invalid files promptly and efficiently.

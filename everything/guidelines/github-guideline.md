# GitHub Guideline

Proper documentation is essential for any GitHub repository as it provides clear instructions, context, and information about the project.

## Overview

This guide outlines three methods for adding documentation to a GitHub repository: using the GitHub UI, GitHub Desktop, and Git Bash/Terminal. Each method caters to different levels of familiarity with Git and GitHub, ensuring that users can choose the approach that best suits their needs.

### Using GitHub UI

The GitHub UI is a highly accessible and straightforward method for adding documentation. It requires no additional software and allows users to perform tasks from any web browser. This method is ideal for users unfamiliar with Git commands, offering a simple, streamlined process for managing repositories.

#### Steps:

1. **Fork the Repository (if needed):**
   * Go to the repository page on GitHub.
   * Click `Fork` at the top right to create a copy in your account.
2.  **Create a Branch:**

    * Go to your repository.
    * Click the branch selector dropdown (it shows the current branch, e.g. `main`).
    * Type a new branch name and click `Create branch: <branch_name> from 'main'`.

    <figure><img src="../.gitbook/assets/git9.png" alt=""><figcaption></figcaption></figure>

    <figure><img src="../.gitbook/assets/git7.png" alt=""><figcaption></figcaption></figure>
3. **Add Your Documentation:**
   * Navigate to the directory where you want to add the file.
   * Click `Add file` > `Create a new file`.
   * Name your file with the `.md` extension and add your content in [markdown format](https://www.markdownguide.org/extended-syntax/).
4.  **Commit Changes:**

    * When you finish editing the file, click the green `Commit changes...` button at the top right of the editor.

    <figure><img src="../.gitbook/assets/git6.png" alt=""><figcaption></figcaption></figure>

    * In the dialog, add a commit message and choose the option to commit directly to your new branch.

    <figure><img src="../.gitbook/assets/git5.png" alt=""><figcaption></figcaption></figure>

    * Click `Commit changes`.

    <figure><img src="../.gitbook/assets/git13 (1).png" alt=""><figcaption></figcaption></figure>
5. **Open a Pull Request:**

* Go to the `Pull Requests` tab.
* Click `New pull request`.
* Select your new branch as the source (compare) branch and `main` as the destination (base) branch. If you are working from a fork, set the base repository to the original (upstream) repository.
* Click `Create pull request`, enter a title and description, and submit the pull request.

<figure><img src="../.gitbook/assets/git8 (2).png" alt=""><figcaption></figcaption></figure>

### Using GitHub Desktop

GitHub Desktop offers a user-friendly graphical interface that simplifies Git operations, making it particularly accessible for beginners. Its visual representation of changes (diffs) and built-in tools for merging conflicts provide a clear and intuitive workflow, reducing the learning curve associated with Git commands.

#### Steps:

1. **Install GitHub Desktop:**
   * Download and install GitHub Desktop from the [GitHub Desktop website](https://desktop.github.com/).
   * Follow the installation instructions and sign in with your GitHub credentials.
2.  **Clone the Repository:**

    * Open GitHub Desktop.
    * Go to `File` > `Clone Repository`.
    * Select the repository you want to clone and click `Clone`. You can also open a repository in GitHub Desktop directly from GitHub using `Code` > `Open with GitHub Desktop`.

    <figure><img src="../.gitbook/assets/git4.png" alt=""><figcaption></figcaption></figure>

    <figure><img src="../.gitbook/assets/git10.png" alt=""><figcaption></figcaption></figure>
3.  **Create a Branch:**

    * Go to the `Current Branch` dropdown at the top.
    * Click on `New Branch`.
    * Enter a name for your new branch and click `Create Branch`.&#x20;

    <figure><img src="../.gitbook/assets/git2.png" alt=""><figcaption></figcaption></figure>
4.  **Add Your Documentation:**

    * Navigate to the repository directory on your local machine.
    * Create a new Markdown file (.md) and add your content.&#x20;

    <figure><img src="../.gitbook/assets/git11.png" alt=""><figcaption></figcaption></figure>
5.  **Stage and Commit Changes:**

    * Go back to GitHub Desktop.
    * You should see your new file listed under `Changes`.
    * Write a commit message in the `Summary` field.
    * Click `Commit to <branch_name>`.&#x20;

    <figure><img src="../.gitbook/assets/git12.png" alt=""><figcaption></figcaption></figure>
6. **Push Changes:**
   * Click `Publish branch` (for a new branch) or `Push origin` (for an existing branch) to push your committed changes to the remote repository.
   * Click `Create Pull Request` in GitHub Desktop, or create the pull request through the GitHub web interface.

### Using Git Bash/Terminal

Using Git Bash/Terminal provides precise control over all Git operations, making it ideal for advanced users who need flexibility and efficiency in their workflows. This method is also highly efficient, as it allows experienced users to perform actions quickly without the need to switch contexts or use additional tools.

#### Steps:

1. **Clone the Repository:**
   * You have two methods to get your repository on your local system:
   * **Direct Cloning:**
   * HTTPS: `git clone https://github.com/username/repository.git`
   * Replace `username` with the repository owner's GitHub username (or your own username if you are cloning your fork) and `repository` with the repository name.
   * Note: You can push to a directly cloned repository only if you have write access to it. Otherwise, fork it first.
   * **Forking the Repository:**
   * Fork the repository to your personal GitHub account.
   * Clone your fork using the method above.
2. **Create a Branch:**
   * Open your Integrated Development Environment (IDE) or terminal.
   * Navigate to your project directory.
   * Create a new branch and switch to it: `git checkout -b <branch_name>` (or `git switch -c <branch_name>`)
3. **Add Your Documentation:**
   * Create a new file with a `.md` extension, for example, `README.md` or `documentation.md`.
   * Add your content to the file.
4. **Stage and Commit Changes:**
   * Add your file to the staging area: `git add <file_name>.md` (or use `git add .` to stage all changes, after checking `git status` for unintended files)
   * Commit your changes with a message: `git commit -m "Add documentation"`
5. **Push Changes:**
   * Push your committed changes to the branch on the remote repository: `git push origin <branch_name>`
   * Create a pull request through the GitHub web interface.

For more detailed instructions on using Git Bash/Terminal, refer to [GitHub's official guides](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

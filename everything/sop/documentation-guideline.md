  ```description: >-
  The HotWax Commerce Documentation Guidelines provide a comprehensive
  framework for creating clear, consistent, and accessible documentation.
  ```

# Documentation Guidelines

## 1. Document Structure

### A. Title and Headers

- All titles and headers should be written in “Title Case”
- **Title**: Use a clear, concise title that accurately reflects the content.
- **Headers**: Use hierarchical headers (H1, H2, H3) to organize content. Ensure headers are descriptive and help users navigate the document.

### B. Table of Contents

- The TOC should list all major sections and subsections.
- Use headings to create a clear structure. This helps users with screen readers navigate the document.
- When documenting on Gitbook, TOC is indexed on the right side. Make sure to use the correct heading levels. Use H1 for title, H2 for main sections, and H3 for subsections.

For example:
<img width="1134" alt="headings" src="https://github.com/adayush17/oms-documentation/assets/72956835/133b1841-6c5d-4623-a83b-7726a9b8af6a">

Learn more about [Gitbook Headings](https://docs.gitbook.com/content-editor/blocks/heading)

### C. Sections and Subsections
- **Meta-Description**: Add meta description with the following format on the top of the page:
``/`
\description: >- \
HotWax Commerce's BOPIS fulfillment app enables retailers to efficiently manage Buy Online Pick-up In Store (BOPIS) functionality and handover store pick-up orders to customers.
``\`

- **Introduction**: Brief overview of the document's purpose.
- **Main Content**: Detailed information, instructions, and guidelines.
- **Conclusion**: Summary of key points and any additional resources.


## 2. Formatting

### A. Text Formatting
- **Bold**: Use bold to highlight important terms or phrases.
- **Code**: Use monospace font for code snippets, commands, and file names.

### B. Lists
- **Bulleted Lists**: Use for unordered lists.
- **Numbered Lists**: Use for ordered lists or steps in a process.

### C. Links
- **Internal Links**: Use relative URLs for links within the same documentation.
- **External Links**: Open external links in a new tab.

### D. Tables
- Use tables to present data clearly.
- Ensure tables are responsive and accessible.

### E. Images and Media
- **Images**: Add images directly from the bottom of the GitHub markdown. Use high-quality images. Provide alternative text for accessibility.
- **Videos**: Embed videos where necessary. Ensure they are properly captioned. Use the following format to embed YouTube videos:
 
 ``\`{% embed url="(Youtube URL)" %} Caption {% \endembed %}\'\'\'\

### F. Quotations
- **Double Quotes**: Use “double quotations” when setting apart a word, quoting something, or using any title such as when documenting order status: “Created”, or “Approved”.
- **Backticks**: Use `backticks` for highlighting actions. Such as when documenting a job name, application, or button.

## 3. Writing Style

### A. Clarity and Conciseness
- Use clear and concise language.
- Avoid jargon and technical terms where possible. Provide definitions and examples where necessary.
- Abbreviations
  - Write abbreviations in full the first time they appear, followed by the abbreviation in parentheses. Use only the abbreviation thereafter.
  - Example: Buy Online Return In Store (BORIS).

### B. Active Voice
- Use active voice instead of passive voice.
- Example: “Install the app” instead of “The app should be installed.”

### C. Consistency
- Use markdown formatting. Learn more about [Markdown](https://www.markdownguide.org/extended-syntax/) here.
- Maintain consistency in terminology, tone, and style throughout the document. You can refer to [ChatGPT Prompts](https://docs.google.com/document/d/1z2M_wKWS4N3_XkwD5HxwDOzm2xhFKjgHNGObZVKtGH4/edit) for consistency in the documents when using ChatGPT.
- Use different types of hints to draw your reader’s attention to specific pieces of important information. Here’s markdown for different types of hints:

<img width="1301" alt="hints" src="https://github.com/adayush17/oms-documentation/assets/72956835/12002fb7-b3f3-4075-a30f-8f62e7199a24">


  {\% hint style="info" %}
  **Add your content here**
  {% endhint\%\}

  {\% hint style="success" %}
  **Add your content here**
  {% endhint\%\}

  {\% hint style="warning" %}
  **Add your content here**
  {% endhint\%}

  {\%hint style="danger" \%}
  **Add your content here**
  {% endhint\%}


- **Use Annotations**: With annotations, you can add extra context to your words without breaking the reader’s train of thought. You can use them to explain the meaning of a word, insert extra information, and more. Readers can hover over the annotated text to show the annotation above the text.
- **Create an annotation**: To create an annotation, select the text you would like to annotate and click the Annotate option in the context menu. Once you’ve written your annotation, click outside of it to continue writing in the text block.

<img width="1135" alt="Annotations" src="https://github.com/adayush17/oms-documentation/assets/72956835/aae47704-ea9e-4b48-9c96-e59b24e296d3">


### D. Technical Content

- Code Snippets
  - Provide code snippets in the appropriate language.
  - Use syntax highlighting where possible.
  - Example:
	
<img width="768" alt="snippet" src="https://github.com/adayush17/oms-documentation/assets/72956835/e406e523-b2ec-40e1-bc59-6f6d083d6c88">

## 4. Accessibility
### A. Alt Text
- Provide descriptive alt text for images.
- Ensure all media is accessible to screen readers.

## 5. Review and Maintenance
### A. Regular Updates
- Review and update documentation regularly to ensure accuracy.

### B. Feedback
- Encourage feedback from users to improve the documentation.

## 6. Common Nomenclature for Consistency

### A. HotWax Apps
- BOPIS App
- Fulfillment App
- Pre-Orders App
- Available to Promise App
- Job Manager App
- Order Routing App
- Receiving App
- Cycle Count App
- Picking App
- Import App
- Users App
- Facilities App
- Company App

When writing the full name of an app, such as Fulfillment App, ensure that the "A" in "App" is capitalized.

### B. Systems
- HotWax Commerce
- Shopify (We write e-commerce as “eCommerce”)
- NetSuite
- RetailPro
- EasyPost











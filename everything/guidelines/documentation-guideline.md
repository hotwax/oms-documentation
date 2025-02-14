---
description: >-
  The HotWax Commerce Documentation Guidelines provide a a comprehensive
  framework for creating clear,  consistent, and accessible documentation.
---

# Documentation Guideline

## 1. Document Structure

### 1.1. Title and Headers

* All **Titles** and **Headers** should be written in “Title Case”
* **Title**: Use a clear, concise title that accurately reflects the content.
* **Headers**: Use hierarchical headers (H1, H2, H3) to organize content. Make headers descriptive so that they help readers navigate the document.

Learn more about [Gitbook Headings](https://docs.gitbook.com/content-editor/blocks/heading)

\# for Heading 1  
\## for Heading 2  
\### for Heading 3

### 1.2. Table of Contents

* The TOC should list all major sections and subsections.
* Use headings to create a clear structure. This helps users with screen readers navigate the document.
* When documenting on GitBook, TOC is indexed on the right side. Make sure to use the correct heading levels. Use H1 for title, H2 for main sections, and H3 for subsections.

For example: GitBook Headings will appear on right side of documentation as TOC

<figure><img src="https://github.com/adayush17/oms-documentation/assets/72956835/133b1841-6c5d-4623-a83b-7726a9b8af6a" alt="Gitbook Headings will appear on right side of documentation as TOC"><figcaption><p>Gitbook Headings</p></figcaption></figure>

### 1.3. Sections and Subsections

* **Meta Description**: Add meta description with the following format on the top of the page:

\---

description:>- HotWax Commerce's BOPIS fulfillment app enables retailers to efficiently manage Buy Online Pick-Up In Store (BOPIS) functionality and handover store pick-up orders to customers.

\---

* **Introduction**: Brief overview of the document's purpose.
* **Main Content**: Detailed information, instructions, and guidelines.
* **Conclusion**: Summary of key points and any additional resources.

## 2. Formatting

### 2.1. Text Formatting

* **Bold**: Use bold to highlight important terms or phrases.
* **Code**: Use monospace font for code snippets, commands, and file names.

### 2.2. Lists

1. **Numbered Lists**: Use for ordered lists or steps in a process.
* **Bulleted Lists**: Use for unordered lists.

### 2.3. Links

* **[Internal Links](#id-1.-document-structure)**: Use relative URLs for links within the same documentation.
* **[External Links](https://docs.hotwax.co/everything/guidelines/documentation-guideline)**: Open external links in a new tab.

### 2.4. Tables

* Use tables to present data clearly.

### 2.5. Images and Media

* **Images**: Add images directly from the bottom of the GitHub markdown. Use high-quality images. Provide alternative text for accessibility.
* **Images Names**: All images should be named in a specific format which is lowercase and words should be separated by a hyphen ( - ), such as `images-name`
* **Videos**: Embed videos where necessary and properly caption them. Use the following format to embed YouTube videos:

\{% embed url ="(Youtube URL)" %\} caption \{%endembed%\}
{% embed url="https://drive.google.com/file/d/1vInnPXJUCgavIJz28xKP-9K2Rd63DSIZ/view?usp=drive_link" %}
Reject Single
{% endembed %}

### 2.6. Quotation

* **Double Quotes**: Use “double quotations” when using any title, such as when documenting order status: “Created”, or “Approved”.  
* **Backticks**: Use backticks ( \` ) for highlighting actions. Such as when documenting a \`job name\`, \`application\`, or \`button\` which will be shown as `job name`, `application`, `button`.

## 3. Writing Style

### 3.1. Clarity and Conciseness

* Use clear and concise language. Avoid jargon and technical terms where possible. Provide definitions and examples where necessary.
* Content should flow naturally, shouldn’t feel heavy, or fluffy.  
* **Abbreviations**
  * Write abbreviations in full the first time they appear, followed by the abbreviation in parentheses. Use only the abbreviation thereafter.
  * Example: Buy Online Return In Store (BORIS).

### 3.2. Words Not To Use Repeatedly
* Words that look like they were AI-generated should not be used repeatedly. Minimize the use of overly dramatic adjectives such as seamless, ensure, ensuring, crucial, essential, critical, game-changer, streamlined, comprehensive.

### 3.3. Active Voice

* Use active voice instead of passive voice.
* Example: “Install the app” instead of “The app should be installed.”

### 3.4. Consistency

* Use Markdown formatting. Learn more about Markdown [here](https://www.markdownguide.org/extended-syntax/).
* Maintain consistency in terminology, tone, and style throughout the document. You can refer to [ChatGPT Prompts](https://docs.google.com/document/d/1z2M\_wKWS4N3\_XkwD5HxwDOzm2xhFKjgHNGObZVKtGH4/edit) for consistency in the documents when using ChatGPT.
* Use different types of hints to draw your reader’s attention to specific pieces of important information. Here’s markdown for different types of hints:

\{% hint style="info" %\} Add your content here { % endhint %\}

\{% hint style="success" %\} Add your content here { % endhint %\}

\{% hint style="warning" %\} Add your content here { % endhint %\}

\{%hint style="danger" %\} Add your content here { % endhint %\}

This markdown will look like this for hints:

{% hint style="info" %}
**Add your content here**
{% endhint %}

{% hint style="success" %}
**Add your content here**
{% endhint %}

{% hint style="warning" %}
**Add your content here**
{% endhint %}

{% hint style="danger" %}
**Add your content here**
{% endhint %}

### 3.5. Technical Content

* **Use Annotations**: With annotations, you can add extra context to your words without breaking the reader’s train of thought. You can use them to explain the meaning of a word, insert extra information, and more. Readers can hover over the annotated text to show the annotation above the text.
* **Create an Annotation**: To create an annotation[^1], select the text you would like to annotate and click the Annotate option in the context menu. Once you’ve written your annotation, click outside of it to continue writing in the text block.

<figure><img src="https://github.com/adayush17/oms-documentation/assets/72956835/aae47704-ea9e-4b48-9c96-e59b24e296d3" alt="Users can click on the underlined terms to see the annotations" width="375"><figcaption><p>Annotations</p></figcaption></figure>

## 4. Accessibility

### 4.1. Alt Text

* Provide descriptive alt text for images.
* All media should be accessible to readers.

## 5. Review and Maintenance

### 5.1. Regular Updates

* Review and update documentation regularly to maintain accuracy.

### 5.2. Feedback

* Encourage feedback from users to improve the documentation.

## 6. Common Nomenclature for Consistency

### 6.1. HotWax Apps

* BOPIS App
* Fulfillment App
* Pre-Orders App
* Available to Promise App
* Job Manager App
* Order Routing App
* Receiving App
* Cycle Count App
* Picking App
* Import App
* Users App
* Facilities App
* Company App

When writing the full name of an app, such as the Fulfillment App, "A" in "App" should be capitalized.

### 6.2. Systems

* HotWax Commerce
* Shopify (We write e-commerce as “eCommerce”)
* Shopify POS
* NetSuite
* RetailPro
* EasyPost

[^1]: Annotations look cool!

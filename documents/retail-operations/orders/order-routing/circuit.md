# Circuit (AI Assistant)

**Circuit** is an AI-powered conversational assistant integrated directly into the Order Routing app. It is designed to simplify rule configuration by allowing business users and retailers to build and modify order routing rules using natural language.

## Key Features

### 1. Conversational Rule Building
Instead of manually navigating and setting filters, you can interact with Circuit through natural language prompts. For example, you can ask Circuit:
* *"Create a routing batch for next-day air orders from Amazon."*
* *"Filter orders that are standard shipping and have high priority."*

Circuit will interpret the prompt and automatically build the configuration filters and sorting preferences.

### 2. Privacy & Performance (WebGPU)
Unlike standard cloud-based AI tools, Circuit runs a Large Language Model (LLM) **locally in the browser** using Web-LLM and WebGPU. 
* **Data Security**: Since the model runs locally, your order routing rules and parameters never leave your local environment.
* **Low Latency**: Processing runs directly on the device GPU, enabling fast, real-time responses.

### 3. Developer Debugging Tools
For developers and administrators, Circuit has a debugging feature called **Developer Mode**:
* Go to the **Settings** page in the Order Routing app.
* Toggle the **Developer mode** switch on.
* This unlocks extra debugging tools, including logs showing Circuit's last-prompt structure and context weights.

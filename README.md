# About This Repository

Following, we will outline the objectives of this demo asset and how to set it up:

1. Demo Objectives:
   A brief overview of the demo, including its purpose, features, and intended audience.
2. Demo Deployment:
   Step-by-step instructions to configure and run the demo on your system.

# Demo Objectives

## Use Case

This demo showcases best practices for building an agentic AI assistant using custom Retrieval-Augmented Generation (RAG) with watsonx Orchestrate.

To illustrate these principles, the demo follows a narrative centered on employees managing the travel and expense process at a fictional company called MINT. The assistant is called TravelGenie and combines both rules-based conversation logic and generative AI to answer questions and perform services around corporate travel:

- Jon (VP Sales): Plans a business trip to Tokyo and wants to know where to stay and where his colleagues are.
- Daniel (Data Analyst): Plans to book luxurious accommodations and upgraded flights for his business trip.
- Marie (Governance Officer): Oversees the AI assistant for MINT, ensuring it mitigates challenges such as hallucinations and potential misuse.

## Features

This demo showcases the following features:

- Chat with Documents - RAG
- Integrate external APIs (i.e., GoogleMaps) - RAG
- Personalization of generative answers (e.g., based on personality characteristics)
- LLM capabilities (e.g., summarization of conversations, generation of emails)
- Proactuve guidance of users through conversation journey
- Measures for governance, control, and security - including guardrails protecting from hallucinations and prompt injections as wells as ground truth check

## Architecture

![Architecture](images/architecture.png)

# Demo Deployment

### Setup Technical Environment (incl. Services)

You need to setup an IBM Cloud environment with the following services:

- Watsonx Orchestrate
- Watsonx Discovery (ElasticSearch Database)
- Watsonx Governance
- Watsonx AI
- Code Engine
- Cloud Registry

Moreover, you need to create a Google Cloud API Key (Google Maps Integration). You can learn how to get your personal key [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Uploading Actions to Orchestrate

In the `./Actions` folder you can find the action JSON file that you can upload to your Assistant instance.

For this navigate to the Action Tab within the Assistant UI. Then click on the settings icon in the top right corner. Then navigate to the most right Tab called "Upload/Download". Here you can upload the actions JSON file.

For further questions, reach out on slack or mail to `janik.buecher@ibm.com`

### Deploying the Frontend to Code Engine

Prerequisites:

- Instance of Watsonx Assistant provisioned in Orchestrate
- Code Engine instance and Cloud Registry available in your IBM Cloud Account
- Add you Assistant's `NEXT_PUBLIC_INTEGRATION_ID` and `NEXT_PUBLIC_SERVICE_INSTANCE_ID` to the Dockerfile

There are two ways I want to highlight here how do deploy to code engine:

1. Automatically ([Source to Code](https://cloud.ibm.com/docs/codeengine?topic=codeengine-app-source-code))
2. Manually ([IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli))

Here is a step by step guide with commands to deploy manually using the IBM Cloud CLI:

1. Build Image: `docker build -t <your-cloud-registry>/<your-project>/ragnova-frontend --platform linux/amd64 .
` (You can leave out --platform linux/amd64 if you are not using a Macbook with ARM architecture)
2. Login into IBM Cloud CLI and choose your Cloud account: `ibmcloud login -sso`
3. Target your correct cloud registry for your region (icr.io, ...) `ibmcloud cr region-set`
4. Authenticate you docker/podman instance with the registry: `ibmcloud cr login --client docker`
5. Push your image to the registry: `docker push <your-cloud-registry>/<your-project>/ragnova-frontend`

#### Setting Environment Variables in Code Engine

To ensure that the login logic works please add the following ENV Variables to your Code Engine Application:

- `NEXT_AUTH_SECRET=<a-long-string-value-with-numers-and-special-characters`
- `CREDENTIALS_USERNAME=<your-username>`
- `CREDENTIALS_PASSWORD=<your-password>`

For further questions, reach out on slack or mail to `janik.buecher@ibm.com`

### Setting up extensions with API Files

For further questions, reach out on slack or mail to `janik.buecher@ibm.com`

You need the json files stored in the `extensions` folder:

- `GoogleMapsAPI.json`: connects to the Google Maps API to search for places near a given location and to perform a search for places.
- `elasticsearch-generic-openapi.json`: enables connection and querying of the ElasticSearch database.
- `openapi_emailgen.json`: calls a prompt deployed on Watson Machine Learning to generate an email based on parameters such as hotel name, travel start and end dates, and reason for travel.
- `openapi_watsonx_reviews_2.json`: calls a prompt deployed on Watson Machine Learning to generate a summary of hotel reviews.
- `watsonx-deployed-prompt-qa-rag-openapi.json`: calls a prompt deployed to build an answer based on the collected information.

The creation of the Custom Extensions will be similar in all the cases:

1. Click on the "Integrations" section in the left menu:

![Integrations](images/customextension_integrations.png)

2. Click "Build Custom Extension" button:

![BuildCustomExtension](images/customextension_buildcustomextension.png)
![BuildCustomExtension](images/customextension_buildcustomextension.png)

3. Click "Next" button on the "Get Started" section:

![CustomExtension](images/customextension_getstarted.png)

4. Specify a name for the Custom Extension, such as "Watsonx Deployed Prompt":

![BasicInformation](images/customextension_basicinformation.png)

5. Upload the corresponding OpenAPI file:

![ImportOpenAPI](images/customextension_importopenapi.png)

6. Click "Finish" button:

![ReviewExtension](images/customextension_reviewextension.png)
![ReviewExtension](images/customextension_reviewextension.png)

Once you have created the extension, you need to add it to your assistant to use it. To do this, click the "Add" button:

![AddExtension](images/customextension_addextension.png)
![AddExtension](images/customextension_addextension.png)

In the "Authentication" section, specify the required method and parameters:

![Authentication](images/customextension_authentication.png)

- To add the ElasticSearch extension, you will need to use "Basic auth", specifying the username and password.
- For the other extensions, you will need to use "OAuth 2.0" and specify the API key

## Connecting Extension to the correct Actions

1. Google Maps:

   To use this extension you need to set the `google_maps_api_key` variable in the Assistant Variables with your own personal Google Maps API key.
   You can learn how to get your personal key [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

   Action Name: `Hotel Selection`
   ![Hotel Selection](images/customextension_googlemaps_1.png)
   ![Hotel Selection](images/customextension_googlemaps_2.png)

2. RAG

   Action Name: `Conversational Search triggered`

   ![Elastic Search](images/customextension_rag_elastic.png)
   ![Watsonx RAG](images/customextension_rag_watsonx.png)
   ![Watsonx RAG 2](images/customextension_rag_watsonx_2.png)

3. Email Generation:

   Action Name: `Generate Email for Hotel Approval Request`
   ![Watsonx Email](images/customexension_emailgeneration_watsonx.png)

4. Review Summarization:

   Action Name: `Hotel reviews summarization`

   ![Watsonx Summarize](images/customextension_summary_watsonx.png)

### Creating / Importing Watsonx.AI project

Create a new watsonx.ai project and select `local file` on the left side. Upload the project ZIP file from `./watsonx Project/RagNova-Demo.zip`
![Import](images/watsonx_project_import.png)

### Importing the Actions

### Setting up Governance

Prerequisite: Prompts have already been set up

Here is a step by step guide to track these prompts in watsonx governance:

1. Create an AI Use Case: Navigate to **watsonx.governance**, **AI Use Cases** > **Create New Use Case**, and provide a name (and description) for the use case.
2. Assourciate Prompt Template: Go to your **development project** where the prompt template is stored, select the prompt template and click **Add to AI Use Case**, and choose the relevant AI use case to track its progress.
   3.Import the Prompt Template for Validation: Navigate to the **validation project**, click **Import Assets** and select the prompt template from the development
   4....

**Note:** For a full tutorial, refer to IBM’s official [documentation](<[https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/get-started-evaluate-prompt.html?](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/get-started-evaluate-prompt.html?context=wx#:~:text=You%20can%20track%20your%20prompt,Track%20in%20AI%20use%20case.)>).

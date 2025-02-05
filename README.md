Still under construction.

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
- Daniel (Data Analyst): Plans to book luxurious accomationds and upgraded flights for his business trip.
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

![Architecture](images/architecture.png?raw=true)

# Demo Deployment

### Setup Technical Environment (incl. Services)

You need to setup an IBM Cloud environment with the following services: 

- Watsonx Orchestrate
- Watsonx Discovery (ElasticSearch Database)
- Watsonx Governance
- Watsonx AI
- Code Engine
- Cloud Registry
- Google Cloud API Key (Google Maps Integration)

### Uploading Actions to Orchestrate

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

### Creating / Importing Watsonx.AI project

### Setting up Governance

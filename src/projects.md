# Key Projects

A detailed overview of featured systems, AI pipelines, and distributed applications I have engineered.

---

## Featured AI & Distributed Projects

### 1. AI Document Q&A Platform
* **Architecture**: Full-Stack Single Page Application (React.js, Redux, Node.js, Express.js, MERN Stack)
* **Core Technologies**: Vector Database, RAG Pipeline, Frontier LLM APIs, Text Embeddings, Firebase Auth, JWT, Zod Validation

#### Overview
An intelligent document interaction platform that enables users to upload extensive PDF/text documents and ask natural-language questions to receive immediate, context-grounded answers instead of manually searching through text.

#### Key Highlights & Engineering:
- **Retrieval-Augmented Generation (RAG)**: Implemented an automated pipeline that ingests, cleans, and chunks uploaded documents into semantic vector embeddings.
- **Vector Database Search**: Stored embeddings in a vector database and executed cosine similarity search to retrieve the most contextually relevant passages for any user query.
- **Context-Aware LLM Synthesis**: Formatted dynamic prompts supplying the retrieved passages as ground-truth context to the LLM, eliminating hallucinations and ensuring factual answers.
- **Robust Security & Validation**: Enforced multi-tier authentication using Firebase OAuth and JWT session management, with strict runtime request schema validation powered by **Zod**.

---

### 2. Distributed Job Processing & Monitoring Platform
* **Architecture**: Event-Driven Asynchronous Microservices Backend
* **Core Technologies**: Node.js, Express.js, Apache Kafka, Redis, Docker

#### Overview
A high-throughput, fault-tolerant background job distribution and execution platform designed to decouple heavy compute workloads (such as bulk transactional emails, PDF report generation, and data exports) from user-facing API threads.

#### Key Highlights & Engineering:
- **Message Queuing with Apache Kafka**: Utilized Kafka topic partitions as resilient distributed message queues to buffer and process high-volume background jobs asynchronously.
- **Fault Tolerance & Exponential Retries**: Built automatic failure detection and retry mechanisms for intermittent task failures, routing persistent errors into dead-letter queues.
- **Redis Caching & Idempotency**: Integrated Redis for fast status tracking, progress indicators, and distributed locks to prevent duplicate task execution across concurrent consumer workers.
- **Containerized Deployment**: Fully containerized with **Docker** and Docker Compose to ensure a reproducible, portable local and production deployment environment.

---

### 3. Freelance Lead Hunter
* **Architecture**: Real-Time Automation & Analytics Dashboard
* **Core Technologies**: React.js, Redux, Apify Web Scraper, LLM APIs, MongoDB, Recharts

#### Overview
An automation and intelligence platform that aggregates freelance project listings from multiple developer boards, analyzes client job briefs, and provides actionable predictive analytics to maximize proposal acceptance rates.

#### Key Highlights & Engineering:
- **Automated Web Scraping via Apify**: Programmatically gathers fresh project leads across multiple freelance job portals using scheduled Apify actor crawlers.
- **Extensible Source-Adapter Pattern**: Architected the lead ingestion pipeline using a modular adapter design pattern, making it effortless to add new job boards and data sources.
- **LLM-Powered Proposal Drafting**: Integrated an LLM layer that parses incoming client requirements, matches them with past project experiences, and drafts tailored proposal cover letters for human review.
- **Historical Outcome Analytics**: Embedded an AI analytical layer that evaluates historical win/loss data to surface actionable insights on which client budget tiers and technology tags correlate with higher success rates.
- **Interactive Analytics Dashboard**: Built an interactive analytics view in **Recharts** backed by **MongoDB** aggregation pipelines to track weekly lead volumes, status transitions, and proposal acceptance metrics.

---

## Additional Systems & Integrations

### AlerTrax (IoT Asset-Tracking Platform)
* **Tech Stack**: Node.js, Express, React.js, Stripe API, IoT Telemetry
* **Highlights**:
  - Engineered backend Node.js APIs for mobile devices tracking GPS/telemetry hardware in real-time.
  - Developed custom Stripe billing integration supporting multi-tier dynamic subscription models tied to device serial numbers.

### Full-Stack Real-Time Team Collaboration App
* **Tech Stack**: React.js, Redux Toolkit, Laravel REST APIs, Socket.IO, Firebase
* **Highlights**:
  - Implemented real-time bi-directional messaging and notification channels using Socket.IO WebSockets.
  - Integrated Firebase push alerts for instant mobile and browser activity updates.

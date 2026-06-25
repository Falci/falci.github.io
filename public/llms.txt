# Fernando Falci

**Staff Software Engineer**
Western Europe | +1 (302) 687 3667 | fernando@falci.me | falci.me
linkedin.com/in/fernandofalci | github.com/Falci

---

Staff-level full-stack engineer with 15+ years of experience and deep backend and distributed-systems expertise, driving technical strategy and delivering complex systems across startups and large-scale enterprises. Track record of designing scalable APIs, data layers, and event-driven services, operating high-compliance fintech and crypto platforms, and leading org-wide architecture initiatives adopted across multiple teams. Operates as a force multiplier: setting technical direction, authoring RFCs, and mentoring engineers while staying deeply hands-on in backend code, infrastructure, and system design.

---

## Experience

### Namebase.io | Sr. Software Engineer / CTO
2022 - Present | Web3 Handshake domain marketplace, crypto exchange, and registry platform.

- Owned the full technology roadmap for hns.id, the Web3 Handshake domain marketplace and resolution platform, leading a cross-functional remote team of smart contract engineers, backend developers, and UX designers.
- Acted as the technical reference for the engineering org, owning architecture reviews and system-design decisions, setting coding and quality standards, and unblocking the team on the hardest protocol-level and scalability problems.
- Grew, guided, and mentored the engineering team across hiring, onboarding, and recurring 1:1s, introducing an RFC-driven decision process that raised delivery quality and engineer autonomy.
- Translated ambiguous business goals into actionable technical plans, aligning smart contract, backend, and frontend workstreams behind a shared architecture and delivery cadence.
- Shipped Ethereum/EVM smart contracts and Layer 2 (Optimism) integrations for hns.id, using Solidity and Web3.js to support DeFi and NFT (ERC-721) features.
- Led backend development of the main Namebase application, a Handshake marketplace, crypto exchange, and auction platform, designing the REST APIs, versioning strategy, rate limiting, and real-time (SSE) layers.
- Built and operated the payments and settlement backend for a crypto exchange handling real-money and on-chain transactions, working within the security, auditability, and compliance constraints of a regulated financial environment.
- Designed the platform data layer using PostgreSQL, Redis, GoLang, Kafka, and DynamoDB with careful schema design for performance at scale.
- Built hns.id frontend with Next.js, React, and Tailwind CSS, integrating TanStack Query and Storybook for a robust component-driven UI deployed on Vercel.
- Managed AWS infrastructure (EC2, RDS, S3, IAM, SQS/SNS) and Kubernetes deployments on Azure via Helm, with Unleash for feature flag management. Used AWS Lambda for scheduled cron jobs and event-driven background processing.
- Built full observability stack from scratch using Grafana, OpenTelemetry, Prometheus, Loki, and Sentry.
- Designed and implemented a custom OIDC solution with blockchain integration for secure authentication and identity flows across Namebase products.
- Coordinated engineers contributing to the Handshake open-source protocol repository, bridging platform requirements with core protocol development.
- Reduced AWS infrastructure costs by 40% through targeted architectural changes and resource rightsizing; built observability from scratch with unified metrics, dashboards, and alerting, cutting incident response times significantly.
- Implemented EPP (Extensible Provisioning Protocol) integrations, expanding platform compatibility with global domain registries and opening new partnership opportunities.

### Adevinta | Sr. Software Engineer
2020 - 2023 | Europe's largest digital classifieds group, operating Milanuncios, fotocasa, Vibbo, and 30+ marketplaces.

- Technical reference for DataHub, a multi-team internal frontend platform: architected its migration to Webpack Module Federation (micro-frontends), defining the shared architecture and integration contracts that let 4+ teams build and deploy independently and cut deployment conflicts by 45%.
- Guided multiple product teams in adopting the micro-frontend architecture through reference implementations, code reviews, and standards that became the blueprint for independent frontend delivery across the org.
- Configured Unleash feature flags, Apache Kafka event pipelines, and REST API integrations with JWT/OAuth2 authentication.
- Led security compliance efforts covering GDPR, Snyk vulnerability scanning, and on-call incident response via Datadog.
- Contributed to the company's Federated GraphQL layer, standardizing data-access patterns and improving query performance.
- Championed test automation, CI/CD pipelines, and code review culture adopted across the frontend guild.

### eDreams Odigeo | Sr. Software Engineer
2017 - 2020 | Europe's leading online travel agency, operating eDreams, Opodo, and GoVoyages across 44 markets.

- Led the full migration of eDreams' primary booking interface from Backbone.js to React (10,000+ daily active users, zero downtime), delivering 30% faster load times and a 40% reduction in codebase size.
- Designed and ran a systematic A/B testing programme alongside product and design, increasing feature adoption rates by 20%.
- Worked within a large distributed frontend team following Agile/Scrum, mentoring junior developers and driving code quality standards across the booking flow with TypeScript, CSS Modules, and webpack.

### Mobile-DI | Development Analyst
2015 - 2018 | Software consultancy delivering enterprise Angular applications for B2B clients.

- Managed a distributed team delivering Angular applications for enterprise clients, owning architectural decisions, establishing coding standards, and mentoring junior developers through structured code reviews.
- Served as primary technical contact for stakeholders, translating business requirements into engineering plans and delivery timelines.

### Matera Systems | Software Engineer
2014 - 2017 | Brazilian fintech delivering platform solutions for financial institutions and payment processors.

- Contributed to the development of a platform for a major U.S. company in the TV/streaming sector, implementing features across the stack with Java and Angular and collaborating closely with cross-functional teams to deliver end-to-end solutions.

### IADTEC | Junior Software Engineer
2013 - 2014 | IT consulting firm serving retail and grocery sector clients.

- Developed Java-based web applications for clients in the grocery and retail sectors, implementing RESTful APIs and custom UI components.

### Elotech | Junior Software Engineer
2011 - 2012 | Brazilian software company serving the public sector with management and e-gov systems.

- Contributed to the development of a platform for the healthcare industry, working primarily with jQuery and PHP to build interactive features and backend services.

---

## Open Source

### Handshake | Open Source Contributor
2020 - Present | Decentralized, permissionless naming protocol and blockchain -- an alternative root DNS.

- Principal coordinator of the HIPs repository, the formal process for proposing and ratifying changes to the Handshake protocol, analogous to Bitcoin's BIPs.
- Authored HIP2, which was adopted by multiple ecosystem projects including BobWallet.
- Maintain hns.dev, an open-source resource hub for the Handshake ecosystem.
- Improved the documentation deployment process by creating a CI/CD pipeline that automatically builds and deploys docs and HIPs on every update.
- Built an open-source page builder for link-in-bio style pages using Web Components.
- Built an open-source Handshake price tracker using Python with AI-assisted workflows and SQLite.

### Bob Wallet | Open Source Contributor
2020 - Present | Leading open-source Handshake wallet and name management tool.

- Contributed to BobWallet, implementing features such as emoji support for domain names and improving the user interface for name auctions.

---

## Side Projects

### sinpapeles.xyz
2020 - 2024 | Hosting service for Handshake domains with IPFS support.

- Built sinpapeles.xyz, a hosting service for Handshake domains with IPFS support using Vite, Express, Node.js, and PostgreSQL.
- Built a default parking page for unconfigured Handshake domains, served via Express with Handlebars templates and JWT-based auth.

### Anonymous Bot
2019 - Present | SaaS Slack bot for anonymous team messaging, with AI features and Stripe billing.

- Built with NestJS, PostgreSQL/Prisma data layer, and Redis caching.
- Integrated Stripe payments, Slack Webhooks, and automated deployments via GitHub Actions with Secrets Manager.
- Added fine-tuned AI models and AI agent features; instrumented with Grafana, OpenTelemetry, Datadog, and Sentry; covered with TDD unit tests.

---

## Skills

**Backend:** Node.js, REST APIs, GraphQL, Java
**Frontend:** React, TypeScript, Next.js, HTML/CSS
**Infrastructure:** AWS, AWS Lambda, Vercel, Kubernetes
**Blockchain:** Bitcoin, Lightning Network, Handshake, Web3
**Leadership:** Technical Strategy, Architecture, RFC Writing, Mentoring, Agile / Scrum, TDD, Code Reviews

---

## References

**Daniel Fernandez** | Qdrant, Staff Software Engineer | contact@danifdz.dev

**Aaron Oxborrow** | Aftermarket.com, CTO | aaron@oxborrow.com

---
title: "Projects"
---

<section class="section">

## 🎵 Music Generation using GANs (Final Year Project)
**Status:** ✅ Completed | **Year:** 2021

Built an AI-powered web application that generates original music compositions using **Generative Adversarial Networks (GANs)** with Python and TensorFlow.

**Key Achievements:**
- Trained GAN models on MIDI datasets to learn music patterns and composition rules
- Created a user-friendly web interface for generating, playing, and downloading compositions
- Achieved musical coherence across generated sequences with 85%+ validation accuracy
- Implemented real-time audio processing for instant playback
- Presented results at university symposium with peer recognition

**Tech Stack:** Python, TensorFlow, Flask, JavaScript, SQLite

</section>

<section class="section">

## ☁ AWS Cloud Automation Toolkit
**Status:** 🚀 Active | **Metrics:** 50+ CLI scripts

Comprehensive Bash automation library for AWS service management, reducing operational overhead by 70%.

**Modules:**
- **IAM Automation** - Role creation, policy attachment, user provisioning with audit trails
- **S3 Management** - Bucket operations, lifecycle policies, replication, access logging
- **VPC Orchestration** - Network setup, subnet management, security group templates
- **EC2 Deployment** - Instance launching, auto-scaling configuration, monitoring setup
- **Lambda Utilities** - Function packaging, deployment automation, version management

**Metrics:** 5,000+ lines of battle-tested code, used across 3+ production environments

**Tech Stack:** Bash, AWS CLI, Terraform, Python

</section>

<section class="section">

## 🌐 Enterprise Serverless Platform (Terraform IaC)
**Status:** 🏆 Production | **Users:** 50+

Built a completely serverless, multi-tenant SaaS application infrastructure using Infrastructure as Code (Terraform) to support enterprise clients.

**Architecture Highlights:**
- **Frontend:** S3 + CloudFront with global CDN for sub-200ms latency
- **API Layer:** API Gateway + Lambda (Python) with custom authentication and rate limiting
- **Data Layer:** DynamoDB with on-demand scaling for variable workloads
- **DNS & Certificates:** Route 53 with automated SSL/TLS via ACM
- **Security:** IAM policies with least privilege, VPC endpoints for private access

**Achievements:**
- 99.95% uptime SLA maintained over 18 months
- Cost optimization: 60% reduction vs traditional server architecture
- Automated CI/CD pipeline with GitHub Actions for zero-downtime deployments
- Multi-region failover capability for disaster recovery

**Tech Stack:** Terraform, AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, Route 53, ACM), Python, GitHub Actions

</section>

<section class="section">

## 📩 Real-time Event Processing Pipeline
**Status:** ✅ Completed | **Throughput:** 10K+ events/minute

Engineered a scalable event-driven architecture for processing file uploads with real-time notifications and compliance auditing.

**Event Flow:** S3 Uploads → EventBridge → Lambda → DynamoDB → SNS → Email/Slack

**Features:**
- **Async Processing:** Lambda functions process 500+ files concurrently without bottlenecks
- **Smart Routing:** Event-based filtering sends notifications based on file type and size
- **Audit Trail:** Complete logging in CloudWatch and DynamoDB for compliance reporting
- **Error Handling:** Dead-letter queues for failed processes with automatic retry logic
- **Cost Efficient:** Pay-per-invocation model; handles burst traffic seamlessly

**Observability:**
- CloudWatch dashboards tracking latency, error rates, and throughput
- Custom metrics for business KPIs (processing time, success rate)
- Alerts for anomalies with SNS/Slack integration

**Tech Stack:** AWS (S3, EventBridge, Lambda, DynamoDB, SNS), Terraform, Python, CloudWatch

</section>

<section class="section">

## 🔐 Multi-Region Disaster Recovery Framework
**Status:** 🏆 Production | **RTO:** <5 min | **RPO:** <1 min

Designed and implemented a comprehensive DR strategy across AWS regions ensuring business continuity and rapid recovery.

**Components:**
- **Database Replication:** RDS multi-region read replicas with automatic failover
- **Backup Strategy:** Automated daily snapshots with 30-day retention; cross-region backup copies
- **Network Failover:** Route 53 health checks with weighted routing for instant regional switchover
- **Testing Program:** Monthly DR drills validating recovery procedures and team readiness

**Metrics:**
- Achieved <5 minute RTO through automation and pre-provisioned standby infrastructure
- <1 minute RPO with continuous data replication
- 100% test success rate in 12 monthly DR exercises

**Tech Stack:** AWS (RDS, S3, Route 53, CloudFormation), Terraform, Bash scripts

</section>

<section class="section">

## 📊 Financial System Monitoring Dashboard
**Status:** ✅ Active | **Uptime:** 99.97% | **Monitored Systems:** 150+

Built comprehensive monitoring and alerting infrastructure for critical Base24 ATM/Switch systems handling millions in daily transactions.

**Capabilities:**
- **Real-time Monitoring:** Sub-second latency alerts on system anomalies
- **Custom Metrics:** SQL-based analysis of transaction logs, response times, error patterns
- **Incident Response:** Automated escalation workflows reducing MTTR from 30+ minutes to <5 minutes
- **Nginx HA:** Load balancer configuration for zero-downtime deployments
- **Log Analysis:** ELK stack integration for centralized log aggregation

**Impact:**
- Maintained 99.9%+ system uptime during peak transaction periods
- Prevented 15+ potential outages through proactive alerting
- Reduced incident resolution time by 85% through automation

**Tech Stack:** Prometheus, Grafana, ELK Stack, Nginx, SQL, Bash

</section>
---
title: "Projects"
---
<main class="container"> 
<div class="project-grid">

<section class="section">

## AWS CLOUD PROJECTS PORTFOLIO
**Status:** Active | **Metrics:** 50+ CLI scripts

Comprehensive Bash automation library for AWS service management

**Modules:**
- **IAM Automation** - Role creation, policy attachment, user provisioning with audit trails
- **S3 Management** - Bucket operations, lifecycle policies, replication, access logging
- **VPC Orchestration** - Network setup, subnet management, security group templates
- **EC2 Deployment** - Instance launching, auto-scaling configuration, monitoring setup
- **Lambda Utilities** - Function packaging, deployment automation, version management

**Metrics:** 5,000+ lines of battle-tested code, used across 3+ production environments

**Tech Stack:** Bash, AWS CLI, Terraform, Python
<a herf= "https://github.com/myronmzd/AWS_Example_">Github_repo</a>
</section>

<section class="section">

## Personal Resume Website 
**Status:** Done | **Metrics:** Simple static website low cost

CAWS, Terraform, GitHub Actions 

**Modules:**
•	Built a Hugo-based static resume website
•	Provisioned AWS infrastructure using Terraform (S3, CloudFront, IAM)
•	Implemented CI/CD with GitHub Actions for automated build & deployment
    GitHub: <a href="https://github.com/myronmzd/resume_hugo_static">Hugo_static_website</a> and <a href="https://github.com/myronmzd/resumeweb">Infra_to_host_Website</a>

**Tech Stack:** hugo, AWS CLI, Terraform

</section>

<section class="section">

## Enterprise Serverless Platform (Terraform IaC)
**Status:**  Production | **Users:** 50+

Built a completely serverless, multi-tenant SaaS application infrastructure using Infrastructure as Code (Terraform) to support enterprise clients.

**Architecture Highlights:**
- **Frontend:** S3 + CloudFront with global CDN for sub-200ms latency
- **API Layer:** API Gateway + Lambda (Python) with custom authentication and rate limiting
- **Data Layer:** DynamoDB with on-demand scaling for variable workloads
- **DNS & Certificates:** Route 53 with automated SSL/TLS via ACM
- **Security:** IAM policies with least privilege, VPC endpoints for private access
    <a href="https://github.com/myronmzd/New_pro1">web_app_github_repo</a>

**Tech Stack:** Terraform, AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, Route 53, ACM), Python, GitHub Actions

</section>

<section class="section">

## AWS S3 TO SNS NOTIFICATION PIPELINE
**Status:**  Completed 

Description: Automated file processing and notification system using AWS S3 and SNS. When files are uploaded, Lambda processes them, stores output, and triggers SNS email alerts. 

Link - <a href="https://github.com/myronmzd/AWS_Example_/tree/main/sns/terraform_sns">Github_repo</a>

**Key Features**:
•	Automated file processing & notifications.
•	Secure S3 handling & real-time updates.
•	Terraform for infrastructure automation.		
**Architecture**: S3 Input → Lambda → S3 Output → SNS → Email<br>
**Tech Stack**: Terraform, AWS (S3, Lambda, SNS, IAM), Python, AWS CLI. Tech Stack: Terraform, AWS (S3, Lambda, SNS, IAM), Python, AWS CLI.


</section>

</div>
</main>
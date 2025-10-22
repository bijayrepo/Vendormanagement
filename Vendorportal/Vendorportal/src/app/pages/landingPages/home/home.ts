import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
services = [
  // 1️⃣ AI Related API Services
  {
    title: 'AI Related API Services',
    icon: 'bi bi-brain',
    description: 'Unlock the power of AI with next-generation APIs for intelligent business automation.',
    features: [
      'Natural Language Processing (NLP) for chatbots and sentiment analysis',
      'Image and video recognition APIs',
      'Predictive analytics and recommendation systems',
      'Speech-to-text and text-to-speech services',
      'AI-powered document summarization and classification',
      'Custom model deployment and fine-tuning options',
      'API-based integration with existing enterprise systems',
      'Cloud scalability with secure access keys'
    ]
  },

  // 2️⃣ Data Privacy & Compliance
  {
    title: 'Data Privacy & Compliance',
    icon: 'bi bi-shield-lock',
    description: 'Ensure complete data confidentiality and compliance with global privacy standards.',
    features: [
      'End-to-end data encryption and anonymization',
      'GDPR, HIPAA, and ISO 27001 compliance modules',
      'Automated data retention and deletion policies',
      'Access control and identity verification mechanisms',
      'Continuous compliance auditing and reporting',
      'Data masking and pseudonymization tools',
      'User consent and privacy preference management',
      'Secure cloud key management system'
    ]
  },

  // 3️⃣ Digital Security & Surveillance
  {
    title: 'Digital Security & Surveillance',
    icon: 'bi bi-shield-check',
    description: 'Enhance organizational safety with AI-driven surveillance and cybersecurity intelligence.',
    features: [
      'Real-time video monitoring and motion detection',
      'AI-based facial and object recognition',
      'Access control and intrusion detection systems',
      'Cyber threat monitoring and alert management',
      'Cloud-based video storage and analytics',
      'End-to-end data encryption for video streams',
      'Centralized multi-location monitoring dashboard',
      'Automated incident reports and audit trails'
    ]
  },

  // 4️⃣ IoT Device Management & Automation
  {
    title: 'IoT Device Management & Automation',
    icon: 'bi bi-hdd-network',
    description: 'Monitor, manage, and automate IoT devices across large-scale distributed systems.',
    features: [
      'Centralized device onboarding and lifecycle management',
      'Real-time device telemetry and performance analytics',
      'Predictive maintenance powered by AI insights',
      'Remote device control and firmware updates',
      'Integration with cloud IoT platforms (Azure, AWS, Google)',
      'Event-driven automation and rule-based actions',
      'Alerting and notification for critical conditions',
      'Scalable multi-tenant IoT infrastructure'
    ]
  },

  // 5️⃣ Data Analytics & Visualization
  {
    title: 'Data Analytics & Visualization',
    icon: 'bi bi-graph-up-arrow',
    description: 'Transform complex datasets into meaningful visual insights for better decisions.',
    features: [
      'Custom dashboards with interactive visualization tools',
      'AI-driven predictive and prescriptive analytics',
      'Integration with multiple databases and APIs',
      'Real-time KPI tracking and alerting system',
      'Anomaly detection and trend forecasting',
      'Data aggregation and transformation pipelines',
      'Automated report generation and export',
      'Secure role-based access for analytics users'
    ]
  },

  // 6️⃣ Cloud Infrastructure & DevOps
  {
    title: 'Cloud Infrastructure & DevOps',
    icon: 'bi bi-cloud-arrow-up',
    description: 'Accelerate deployment and scalability with cloud-native architecture and automation.',
    features: [
      'Multi-cloud architecture (Azure, AWS, GCP)',
      'CI/CD pipelines for seamless deployment',
      'Containerization with Docker and Kubernetes',
      'Serverless computing for cost optimization',
      'Infrastructure as Code (IaC) with Terraform',
      'Cloud monitoring and logging with real-time alerts',
      'Disaster recovery and high availability setups',
      'Zero-downtime deployment strategies'
    ]
  }
];

}

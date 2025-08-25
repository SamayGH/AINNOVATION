# Technology Stack

## Frontend
- **React Native (Expo optional)** for cross-platform mobile app
- UI libs: React Native Paper / NativeWind

## Backend
- **Node.js + Express** (REST APIs) on **Azure App Service**
- Authentication: JWT + optional OTP via Azure Communication Services (optional)

## Data
- **MongoDB** for learner profiles, content metadata, attempts
- **SQLite** for offline progress caching on device
- **Azure Blob Storage** for media (videos, audio, images, PDFs)

## AI/ML
- **Python** (TensorFlow/PyTorch) for adaptive models
- **Azure Cognitive Services** (Translator, Speech-to-Text, Text-to-Speech) for multilingual UX
- Optional: On-device TensorFlow Lite for quick adaptivity

## Observability
- **Azure Monitor / App Insights** for logs, metrics, dashboards

## DevOps
- GitHub Actions → CI/CD → Azure App Service
- IaC (optional): Bicep/Terraform for provisioning

## Security
- HTTPS everywhere, encryption at rest (Blob SSE), RBAC on Azure resources
- Data minimization and regional residency as needed

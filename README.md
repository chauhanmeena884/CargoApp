# CargoApp

A comprehensive cargo management application built with C# for streamlined logistics and cargo operations.

## 📋 Overview

CargoApp is a robust application designed to manage cargo operations efficiently. It provides tools for tracking, managing, and coordinating shipments and logistics operations.

## 🚀 Getting Started

### Prerequisites

- .NET Framework / .NET Core (version specified in project files)
- C# 8.0 or higher
- Visual Studio or Visual Studio Code (recommended)


## 🏗️ Project Structure

**#The application follows a modular architecture:**
CargoApp/ 
    ├── CargoMngt/

# Core cargo management functionality
AngularApp/
├── backend/
    ├── Services/

# Business logic and service layer 
AngularApp/
   └── Common/ # Shared utilities and common components




### Running the Backend
From the backend/InterviewApi directory:
    dotnet restore
    dotnet run

API will start on:
    http://localhost:5200
    
Example Endpoint:
    GET http://localhost:5000/api/login

### Running the Frontend
From the frontend/interview-ui directory:
    npm install
    ng serve --proxy-config proxy.conf.json

The UI will be available at:
    http://localhost:4200

### Modules

- **CargoMngt**: Contains the main cargo management features and operations
- **Services**: Implements business logic and service layer abstractions
- **Common**: Reusable utilities, helpers, and common functionality
### Verify the application works
1) Start the backend
2) Start the frontend
3) Open http://localhost:4200
4) Click "Load Orders"
5) Confirm a list of orders is displayed

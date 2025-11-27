# Software Requirement and Specification (SRS) Document

For

OpenLearn: An Open Source E-Learning Platform

**Prepared by Navy Croc**

1\. Harry Tamunonengiye-ofori Sunday 22/0041

2\. Hanacho Daniel chimzi 22/0130

3\. Gbemuotor Anjolaoluwa Oghenetega 22/0269

4\. Femi-Olagundoye OluwaFeranmi OluwaDarasimi 22/0147

5\. GBADAMOSI OLUWAFEMI philip 22/0026

6\. Famurewa Oluwatobi Daniel 22/0104

7\. Gbadeyan Hero Akinyele 22/0073

8\. FALADE DAVIDE TAIWO 22/0174

9\. GAFARU KING OLUWASHINA 22/0200

10\. FERDNINAND MATILDA GRACE 22/0082

## 1\. INTRODUCTION

### 1.1 Project Overview

OpenLearn is a free, open-source e-learning web platform that allows teachers and students to create, share, and access educational resources such as lecture notes, tutorials, and coding lessons. The system fosters collaboration and helps learners who cannot afford premium educational platforms.

### 1.2 Purpose

The purpose of this document is to specify and describe the functional and non-functional requirements for the design and implementation of the OpenLearn system. It serves as a guideline for developers, testers, and stakeholders.

### 1.3 Scope

The system will provide a portal for teachers to upload, manage, and share study materials; a student interface for viewing, downloading, and rating materials; and a community-driven platform that encourages collaboration. It will offer a secure and user-friendly web interface accessible from any browser.

## 2\. SYSTEM DESCRIPTION

### 2.1 System Perspective

The system will be web-based and consist of a Frontend (user interface for interaction), Backend (application logic, authentication, and API handling), and Database (storage of users, materials, and activity records).

### 2.2 System Features

- User Registration & Login - Secure sign-up and sign-in for students and teachers.
- Upload Resources - Teachers can upload notes, videos, and tutorials.
- Access Resources - Students can view, search, and download materials.
- Rating & Comments - Users can review resources.
- Dashboard - Personalized dashboards for managing uploads or downloads.
- Admin Panel - Management of users and uploaded content.

### 2.3 Users and Roles

Students: View, download, rate, and comment on materials.

Teachers: Upload and manage materials.

Administrators: Manage users and monitor content.

### 2.4 Constraints

- The system must run on modern browsers (Chrome, Edge, Firefox).
- Requires internet access.
- File uploads limited to 50 MB.
- Passwords must be stored securely using hashing.

## 3\. FUNCTIONAL REQUIREMENTS

| ID  | Requirement | Description |
| --- | --- | --- |
| FR1 | User Registration | Users can sign up using valid email credentials. |
| FR2 | Authentication | Secure login and session management. |
| FR3 | Resource Upload | Teachers can upload educational files. |
| FR4 | Resource Access | Students can view and download uploaded content. |
| FR5 | Search Function | Users can search by topic, subject, or uploader. |
| FR6 | Comment/Rating | Users can leave feedback on materials. |
| FR7 | Profile Management | Users can edit and update their profiles. |
| FR8 | Admin Control | Admin can manage users and delete inappropriate uploads. |

## 4\. NON-FUNCTIONAL REQUIREMENTS

| ID  | Type | Description |
| --- | --- | --- |
| NFR1 | Performance | System must handle at least 500 concurrent users. |
| NFR2 | Usability | The interface should be intuitive and responsive. |
| NFR3 | Reliability | Ensure 99% uptime. |
| NFR4 | Security | SSL encryption, hashed passwords, and role-based access. |
| NFR5 | Scalability | System should allow future integration with a mobile app. |
| NFR6 | Maintainability | Clean and modular code structure for easy updates. |

## 5\. SYSTEM DESIGN OVERVIEW

Frontend: HTML, CSS, JavaScript

Backend: Node.js/Express.js

Database: MySQL

Hosting: Cloud (e.g., Render, AWS, or Vercel)

## 6\. USE-CASE DESCRIPTION

Actors: Student, Teacher, Admin

- Student → Register, Login, Search, View, Download, Comment
- Teacher → Register, Login, Upload, Manage Materials
- Admin → Approve Uploads, Manage Users, Remove Content

## 7\. FUTURE ENHANCEMENTS

- Mobile App integration.
- AI-based content recommendation system.
- Gamification features (badges, progress points).
- Live class and chat functionality.

## 8\. CONCLUSION

The OpenLearn Platform aims to provide an accessible, cost-free, and community-based environment for knowledge sharing. This requirement specification will guide developers and stakeholders through the project's development and implementation process.

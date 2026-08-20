# ⚖️ Legal Firm Website

A modern, professional and responsive website for an Indian law firm, designed to showcase the firm's lawyers, areas of practice, legal resources and professional information while providing a simple enquiry channel for visitors.

> **Important:** This project is designed as an informational professional presence, not as a marketing or client-acquisition platform.

---

## ✨ Features

### 🏛️ Firm

* Professional firm overview and introduction
* Firm history and background
* Areas of legal practice
* Office locations and contact information
* Professional affiliations and information

### 👨‍⚖️ Legal Team

* Complete team/lawyer directory
* Individual lawyer profiles
* Professional photographs
* Lawyer biographies
* Qualifications and credentials
* Enrolment and Bar Council information
* Areas of practice
* Courts and tribunals, where applicable
* Professional memberships

### ⚖️ Practice Areas

* Dedicated practice-area overview
* Individual practice-area pages
* Informational explanations of legal domains
* Common legal matters and concepts
* Related legal resources

### 📚 Legal Resources

* Legal articles
* Legal explainers
* Legal updates
* FAQs
* Legal guides
* Important judgments
* Legislative updates
* Related resources

### 📩 Contact & Enquiries

* Dedicated Contact Us page
* Contact section on the homepage
* Visitor enquiry form
* Name, phone, email, subject and message fields
* Server-side validation
* Rate limiting
* Secure enquiry processing
* Automatic email notification to designated firm lawyers
* Multiple lawyer email recipients
* Office address and working hours
* Phone and email contact information
* Google Maps / office directions

### 🔐 Privacy & Security

* HTTPS
* Server-side input validation
* Zod schema validation
* Rate limiting
* Secure email credentials
* Environment-based secrets
* Minimal personal-data collection
* Privacy Policy
* Professional disclaimer
* Advocate-client relationship disclaimer
* Protection against unnecessary sensitive information collection

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**

### Backend

* **Next.js Server Components**
* **Next.js Route Handlers / Server-side APIs**
* **Zod** — request and form validation
* **Rate Limiter** — abuse prevention
* **Nodemailer** — enquiry email delivery

### Database

* **MongoDB** — legal resources, articles and related content

### Deployment

* **Vercel**
* **Cloudflare** — DNS/security where applicable

---

## 🏗️ Architecture

```text
                         Visitor
                            │
                            ▼
                    ┌───────────────┐
                    │    Next.js    │
                    │   Frontend    │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
          MongoDB       Contact API    Legal Pages
              │             │
              │             ▼
              │        Validation
              │             │
              │             ▼
              │        Rate Limiter
              │             │
              │             ▼
              │         Nodemailer
              │             │
              │             ▼
              │      Lawyers' Inbox
              │
              ▼
       Legal Resources
       Articles / FAQs
       Legal Updates
```

---

# 📁 Project Structure

```text
.
├── app/
│   ├── about/
│   ├── contact/
│   ├── team/
│   ├── practice-areas/
│   ├── legal-resources/
│   ├── privacy-policy/
│   ├── disclaimer/
│   ├── api/
│   │   └── contact/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Hero/
│   ├── LawyerCard/
│   ├── PracticeAreaCard/
│   ├── ArticleCard/
│   ├── FAQ/
│   ├── ContactForm/
│   └── OfficeLocation/
│
├── lib/
│   ├── db/
│   ├── email/
│   ├── validation/
│   └── rate-limit/
│
├── models/
│   ├── Article
│   ├── FAQ
│   └── LegalUpdate
│
├── public/
│   └── images/
│
└── README.md
```

---

# 📄 Main Sections

## Home

The homepage provides:

* Firm introduction
* Practice-area overview
* Legal team preview
* Legal resources preview
* Contact section
* Office information
* Disclaimer

---

## About

Provides factual information about:

* The firm
* Its history
* Professional approach
* Areas of practice
* Associated lawyers
* Offices
* Professional affiliations

---

## Our Team

Showcases all lawyers associated with the firm.

Each lawyer can have a dedicated profile containing their professional information, qualifications, enrolment details and areas of practice.

---

## Practice Areas

Provides informational pages covering the firm's areas of practice.

Example:

```text
/practice-areas
/practice-areas/civil-law
/practice-areas/criminal-law
/practice-areas/property-law
```

---

## Legal Resources

A knowledge section containing:

```text
Articles
Legal Updates
FAQs
Legal Guides
Important Judgments
Legislative Updates
```

Content is intended for general informational purposes and should not be presented as individualized legal advice.

---

## Contact

Visitors can submit an enquiry containing:

```text
Full Name
Phone Number
Email
Subject
Message
```

The request is validated, rate-limited and securely forwarded to the designated lawyers through email.

> Submitting an enquiry does not establish an advocate-client relationship.

---

# ⚖️ Legal & Professional Compliance

This project follows a **compliance-first approach**.

The website should be developed with applicable **Bar Council of India professional-conduct rules**, particularly **Rule 36 concerning advertising and solicitation by advocates**, in mind. The project's requirements specifically call for an informational and non-promotional website.

### 🚫 The website must not include

* "Best Lawyer" claims
* "Top Law Firm" claims
* Guaranteed outcomes
* Success rates
* Number of cases won
* Client testimonials
* Star ratings
* Promotional case results
* Fake urgency
* Discount offers
* Aggressive lead-generation funnels
* Fabricated awards or achievements

### ✅ Content should focus on

* Lawyer credentials
* Qualifications
* Enrolment information
* Bar Council information
* Areas of practice
* Professional memberships
* Firm information
* Legal education and resources
* Office/contact information

All professional and legal content should be reviewed and approved by the firm's lawyers before publication.

---

# 🔒 Privacy & Confidentiality

The website should collect only the information necessary to process enquiries.

Users should **not** be encouraged to submit:

* Confidential case information
* Sensitive personal information
* Legal documents
* Identity documents
* Medical records
* Financial records

The contact form should clearly inform users that submitting an enquiry does not establish an advocate-client relationship.

---

# 📧 Contact Email Flow

```text
Visitor
   │
   ▼
Contact Form
   │
   ▼
Zod Validation
   │
   ▼
Rate Limiting
   │
   ▼
Nodemailer
   │
   ├──────────────► Lawyer 1
   │
   └──────────────► Lawyer 2
```

Example notification:

```text
Subject: New Website Enquiry — Property Matter

Name: John Doe
Phone: +91 XXXXX XXXXX
Email: john@example.com

Message:
I would like general information regarding...
```

Email credentials must remain server-side and must never be exposed to the client.

---

# 🚀 Getting Started

## Prerequisites

* Node.js
* npm / pnpm / yarn
* MongoDB
* SMTP-compatible email account

## Installation

```bash
git clone <repository-url>

cd <project-directory>

npm install
```

## Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

LAWYER_EMAILS=

NEXT_PUBLIC_SITE_URL=
```

Never commit `.env.local` or other files containing credentials.

## Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🧪 Quality Requirements

Before deployment, verify:

* [ ] Contact form submits successfully
* [ ] Emails reach all designated lawyers
* [ ] Invalid form input is rejected
* [ ] Rate limiting works
* [ ] Email credentials are not exposed
* [ ] Lawyer information is accurate
* [ ] Practice areas are accurate
* [ ] Legal resources render correctly
* [ ] Privacy Policy is available
* [ ] Disclaimer is available
* [ ] Mobile layout works correctly
* [ ] Accessibility basics are satisfied
* [ ] No prohibited promotional claims exist
* [ ] No fabricated professional information exists

---

# 🎯 Project Philosophy

This website is intentionally different from a typical commercial business website.

The goal is **not**:

```text
Traffic → Marketing → Lead Generation → Conversion
```

Instead:

```text
Visitor
   ↓
Professional Information
   ↓
Lawyers / Practice Areas / Resources
   ↓
Contact Information
   ↓
Optional Enquiry
```

The website should communicate **professionalism, clarity, credibility and restraint**.

> **Build a premium, modern and trustworthy professional website while keeping it informational rather than promotional.**

---

## 📌 Status

🚧 **In Development**

### Planned

* [ ] Homepage
* [ ] About page
* [ ] Team page
* [ ] Individual lawyer profiles
* [ ] Practice areas
* [ ] Legal resources
* [ ] Article system
* [ ] FAQ system
* [ ] Contact form
* [ ] Email notifications
* [ ] Rate limiting
* [ ] Privacy Policy
* [ ] Disclaimer
* [ ] Responsive design
* [ ] SEO
* [ ] Production deployment

---

## 📜 License

This project is intended for the firm's official website.

All legal content, lawyer information, photographs, branding and other proprietary materials remain the property of their respective owners.

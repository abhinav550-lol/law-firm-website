# SRS — Law Firm Website

## 1. Overview

A modern, professional and responsive website for a law firm in India.

The website will provide factual information about the firm and its lawyers, areas of practice, legal resources, office information, and a contact mechanism through which visitors can submit an enquiry to the firm.

The website must remain **informational and non-promotional**, keeping applicable Indian advocate professional-conduct requirements in mind.

---

# 2. Core Features

## 2.1 Home Page

The home page should contain:

* Firm name and branding
* Short introduction to the firm
* Overview of practice areas
* Introduction to the legal team
* Legal resources preview
* Contact Us section
* Office/contact information
* Disclaimer
* Footer navigation

Avoid promotional claims such as:

* "Best lawyers"
* "Top law firm"
* "100% success"
* "Guaranteed results"
* "Most trusted"

---

# 3. Team / Lawyers Page

## 3.1 Team Overview

A dedicated `/team` page shall showcase all lawyers associated with the firm.

Each lawyer should have a profile card containing:

* Professional photograph
* Full name
* Designation
* Qualifications
* Enrolment information
* Bar Council
* Areas of practice

Example:

```text
┌────────────────────────────┐
│                            │
│          PHOTO             │
│                            │
├────────────────────────────┤
│ Adv. John Doe              │
│ Advocate                   │
│                            │
│ B.A., LL.B.                │
│ Enrolment: XXXXX           │
│                            │
│ Civil • Property • Family  │
│                            │
│ View Profile →             │
└────────────────────────────┘
```

## 3.2 Individual Lawyer Profile

Each lawyer may have a dedicated page:

```text
/team/john-doe
```

The page can contain:

* Photograph
* Professional biography
* Qualifications
* Enrolment details
* Bar Council
* Bar Association
* Areas of practice
* Courts/tribunals, where appropriate
* Professional memberships
* Professional publications, where appropriate

All information must be factual and approved by the lawyer.

---

# 4. Practice Areas

A dedicated `/practice-areas` page shall display the firm's areas of practice.

Examples:

* Civil Law
* Criminal Law
* Property Law
* Family Law
* Corporate & Commercial Law
* Constitutional Law
* Labour & Employment Law
* Consumer Law

Each area may have an individual informational page:

```text
/practice-areas/civil-law
/practice-areas/criminal-law
/practice-areas/property-law
```

Pages should explain the area of law and common legal concepts without guaranteeing outcomes or providing individualized legal advice.

---

# 5. Legal Resources

## 5.1 Resources Page

A dedicated `/legal-resources` section shall provide useful general legal information.

Possible categories:

* Legal Articles
* Legal Updates
* FAQs
* Important Judgments
* Legal Guides
* Legislative Updates

Example:

```text
Legal Resources

[All] [Articles] [Updates] [FAQs]

┌─────────────────────────┐
│ What is Anticipatory    │
│ Bail?                   │
│                         │
│ General explanation...  │
│                         │
│ 11 Aug 2026             │
│ Read Article →          │
└─────────────────────────┘
```

## 5.2 Article Pages

Each article should have:

* Title
* Publication date
* Last updated date
* Author
* Category
* Article content
* Related resources

Articles must be informational rather than promotional.

They must not:

* Guarantee legal outcomes.
* Provide individualized legal advice.
* Encourage users to hire the firm.
* Make exaggerated claims about the firm's expertise.

---

# 6. Contact Us

## 6.1 Contact Section

The website shall contain a dedicated `/contact` page and a Contact Us section on the home page.

The section should provide:

* Office address
* Phone number
* Email address
* Office hours
* Map/location
* Contact form

---

## 6.2 Contact Form

The form should collect only necessary information.

### Fields

```text
Full Name *
Phone Number *
Email Address
Subject
Message *
```

Optional:

```text
Preferred Contact Method
```

Do not request confidential case documents or highly sensitive information through the initial form.

Display a notice:

> Please do not submit confidential or sensitive information through this form. Submission of this form does not establish an advocate-client relationship.

---

# 7. Contact Form → Email

When a visitor submits the contact form:

```text
Visitor
   │
   ▼
Contact Form
   │
   ▼
Backend/API
   │
   ├── Validate input
   ├── Rate-limit request
   └── Send email
          │
          ▼
     Firm Email Inbox
```

The submitted enquiry should be emailed to the designated lawyers/firm email addresses.

Example email:

```text
Subject: New Website Enquiry — [Subject]

Name: John Doe
Phone: +91 XXXXX XXXXX
Email: john@example.com
Subject: Property Matter

Message:
I would like general information regarding...
```

The system should support multiple recipients.

Example:

```text
LAWYER_EMAILS=
lawyer1@example.com,
lawyer2@example.com
```

The frontend must never expose email-service credentials.

---

# 8. Email Requirements

The system should:

* Send enquiries securely.
* Validate email addresses.
* Sanitize submitted data.
* Rate-limit submissions.
* Prevent obvious spam.
* Return a success/failure response to the visitor.
* Log failures without storing unnecessary sensitive information.

### Success message

```text
Thank you for contacting the firm.

Your enquiry has been submitted successfully.
The office will review your message and respond where appropriate.
```

Do not promise a response within a specific time unless the firm can guarantee it.

---

# 9. Contact Information

The footer and Contact page should contain:

```text
Firm Name
Office Address
Phone
Email
Office Hours

[Google Maps / Directions]
```

Optional:

* WhatsApp
* Additional office locations
* Social/professional profiles

Contact mechanisms should remain neutral rather than promotional.

---

# 10. About the Firm

The About page should provide:

* Firm overview
* History/establishment information
* Professional approach
* Areas of practice
* Lawyers associated with the firm
* Office locations
* Professional affiliations where appropriate

Do not invent or exaggerate firm history or achievements.

---

# 11. Navigation

Primary navigation:

```text
Home
About
Our Team
Practice Areas
Legal Resources
Contact
```

Mobile navigation must provide access to all major pages.

---

# 12. Legal & Professional Compliance

The website must be designed with applicable **Bar Council of India rules**, particularly Rule 36 concerning advertising and solicitation by advocates, in mind.

The website should primarily function as an informational professional presence.

### Do NOT implement:

* Client testimonials
* Star ratings
* "Best lawyer" claims
* "Top law firm" claims
* Case success rates
* Number of cases won
* Guaranteed outcomes
* "Hire us" marketing
* Aggressive lead-generation funnels
* Fake urgency
* Discount offers
* Promotional claims
* Fabricated awards or achievements

All legal/professional content must be approved by the lawyers.

---

# 13. Disclaimer

A dedicated `/disclaimer` page shall be provided.

The website should clearly state that:

* Information is for general informational purposes.
* Website content is not legal advice.
* Viewing the website does not create an advocate-client relationship.
* Submitting a contact form does not create an advocate-client relationship.
* Visitors should not submit confidential information through the website.

Final disclaimer wording must be approved by the lawyers.

---

# 14. Privacy

A `/privacy-policy` page shall be provided.

The website must explain:

* Information collected through the contact form.
* Why information is collected.
* How enquiry information is used.
* Email processing.
* Third-party services.
* Data retention where applicable.
* Contact information for privacy-related questions.

Only necessary personal information should be collected.

---

# 15. Security

The website shall:

* Use HTTPS.
* Validate all form input server-side.
* Protect email credentials.
* Store secrets in environment variables.
* Implement rate limiting.
* Implement spam protection.
* Avoid exposing internal APIs.
* Avoid storing sensitive legal information unnecessarily.

---

# 16. Responsive Design

The website must work across:

* Mobile
* Tablet
* Laptop
* Desktop

The design should prioritize mobile usability.

---

# 17. Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Proper labels for forms
* Accessible buttons
* Sufficient color contrast
* Alt text
* Visible focus states
* Screen-reader-friendly navigation

---

# 18. SEO

Implement standard technical SEO:

* Page titles
* Meta descriptions
* Canonical URLs
* Sitemap
* Robots.txt
* Open Graph metadata
* Semantic HTML
* Fast loading
* Structured data where appropriate

SEO must not be used to create aggressive promotional/solicitation pages.

---

# 19. Suggested Architecture

```text
src/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── Hero
│   ├── LawyerCard
│   ├── PracticeAreaCard
│   ├── ArticleCard
│   ├── FAQ
│   ├── ContactForm
│   ├── OfficeLocation
│   └── Disclaimer
│
├── pages/
│   ├── Home
│   ├── About
│   ├── Team
│   ├── LawyerProfile
│   ├── PracticeAreas
│   ├── PracticeArea
│   ├── LegalResources
│   ├── Article
│   ├── Contact
│   ├── Privacy
│   └── Disclaimer
│
├── data/
│   ├── lawyers
│   ├── practiceAreas
│   ├── articles
│   └── faqs
│
└── lib/
    └── api
```

If a backend is used:

```text
backend/
├── routes/
│   └── contact
├── controllers/
├── services/
│   └── email
├── middleware/
│   ├── validation
│   └── rateLimit
└── config/
```

---

# 20. Core User Flow

### Visitor

```text
Home
  │
  ├── Learn about firm
  │
  ├── View lawyers
  │
  ├── Explore practice areas
  │
  ├── Read legal resources
  │
  └── Contact
          │
          ▼
      Contact Form
          │
          ▼
       Backend
          │
          ▼
     Firm Email Inbox
```

---

# 21. Non-Functional Requirements

### Performance

* Fast page loads.
* Optimized images.
* Minimal unnecessary JavaScript.
* Good Core Web Vitals.

### Maintainability

Content should be easy to update without changing UI components.

### Reliability

Contact submission should gracefully handle:

* Invalid input
* Network failure
* Email delivery failure
* Server errors
* Spam requests

### Scalability

The architecture should allow:

* More lawyers
* More practice areas
* More articles
* Multiple offices
* Additional languages

without major architectural changes.

---

# 22. Out of Scope

The initial version will not include:

* Client portal
* Case management
* Online payment
* Online case filing
* Legal document automation
* AI legal advice
* Client reviews
* Public case-result database
* Lawyer marketplace
* Advertising campaigns

---

# 23. Success Criteria

The project is complete when:

* [ ] Home page is implemented.
* [ ] About page is implemented.
* [ ] Team page showcases all lawyers.
* [ ] Individual lawyer profiles work.
* [ ] Practice areas are implemented.
* [ ] Legal Resources section is implemented.
* [ ] Articles/FAQs can be displayed.
* [ ] Contact page is implemented.
* [ ] Contact form works.
* [ ] Form submissions reach designated firm email addresses.
* [ ] Spam/rate limiting is implemented.
* [ ] Privacy Policy exists.
* [ ] Disclaimer exists.
* [ ] Website is responsive.
* [ ] Website is accessible.
* [ ] Technical SEO is implemented.
* [ ] No fabricated professional information exists.
* [ ] No prohibited promotional claims are present.
* [ ] Final content is approved by the lawyers.

---

# 24. Guiding Principle

> **Build a premium, modern and trustworthy professional website while keeping the website informational rather than promotional.**

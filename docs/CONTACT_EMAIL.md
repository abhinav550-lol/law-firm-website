# Contact enquiry email

The Contact page collects a full name, phone number, email address, and query.
It submits JSON to `POST /api/contact`. The server validates the input and
sends a plain-text email through Nodemailer SMTP. The visitor's email is the
Reply-To address; the sender and lawyer recipients come only from server configuration.

## Development configuration

Copy `.env.example` to `.env.local` and add the app password to `SMTP_PASSWORD`.
Restart the development server after changing environment variables.

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=maabhinav550@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=maabhinav550@gmail.com
LAWYER_EMAILS=maabhinav550@gmail.com
```

The sender and recipient both default to `maabhinav550@gmail.com` during
development. No real password is included in the project. Environment files
containing credentials are ignored by Git; only the empty example is tracked.

For Gmail account setup, use [Google's app-password instructions](https://support.google.com/accounts/answer/185833).

## Designated lawyers

Set `LAWYER_EMAILS` to a comma-separated list when real recipients are available:

```env
LAWYER_EMAILS=lawyer1@example.com,lawyer2@example.com
```

Keep `SMTP_FROM` aligned with an address the SMTP account is permitted to send
from. Visitor-submitted fields cannot change the sender or lawyer recipients.

For another SMTP provider, change `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, and `SMTP_FROM`. Use `SMTP_SECURE=true` for implicit TLS
(typically port 465); use `SMTP_SECURE=false` for STARTTLS (typically port 587).
STARTTLS is required when implicit TLS is disabled. Certificate verification
remains enabled. See [Nodemailer's SMTP settings](https://nodemailer.com/smtp).

## Submission behavior

- All four visible fields are required. Queries must be 10–5,000 characters.
- Client and server both validate inputs; the server limits request bodies to 32 KB.
- A hidden honeypot field rejects obvious automated submissions.
- The form disables submission while sending and preserves entries on failure.
- Success is returned only after SMTP accepts every configured recipient.
- Missing or invalid SMTP configuration returns HTTP 503.
- SMTP delivery errors return HTTP 502; validation errors return HTTP 400.
- A limit of five attempts per 15 minutes applies to both the originating IP and
  visitor email. Limited requests return HTTP 429 with a Retry-After header.
- Enquiry contents and passwords are not logged or stored by this application.

The limiter is held in each Node process and resets on restart. A deployment
with multiple processes or serverless instances should use a shared rate-limit
store. Forwarded IP headers must come from a trusted reverse proxy.

SMTP acceptance is not a guarantee of inbox delivery. Check the destination
mailbox during the first test after real credentials are configured.

# Sangavi Hospital website

A responsive Next.js website for Sangavi Hospital, with local service pages, doctor profile support, accessibility features, SEO metadata and structured data, `sitemap.xml`, `robots.txt`, and a contact form API for email and persistent inquiry storage.

## Local development

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set the integration variables below before submitting the contact form. The form intentionally reports a service error until its providers are configured.

## Contact form setup

### Email delivery (Resend)

1. Create a Resend account and verify a sending domain.
2. Create an API key and set `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to an address on the verified domain.
4. Submissions go to `admin@testhospital.com` by default. Set `CONTACT_TO_EMAIL` to override the receiving address.

#### Testing without a domain

Resend's shared sender can send only to the email address associated with your Resend account. Set these values in `.env.local`, keeping your existing `RESEND_API_KEY`:

```dotenv
CONTACT_FROM_EMAIL="Sangavi Hospital <onboarding@resend.dev>"
CONTACT_TO_EMAIL=your-resend-account-email@example.com
```

Restart the development server after changing the configuration. No domain verification is needed for this test setup. You cannot add or verify `gmail.com` because you do not own its DNS. A Gmail address can be the recipient or the enquiry's reply-to address, but not the Resend sender. The form already uses the visitor's email as `reply_to`.

For production, verify a domain you own by adding Resend's DNS records, change `CONTACT_FROM_EMAIL` to an address on that domain, and set `CONTACT_TO_EMAIL` to the intended hospital inbox. Configure these values separately in Vercel and redeploy.

If the API logs `sheetSaved: true` and `emailSent: false`, the enquiry is already stored in Google Sheets even though the API returns 502. Retrying submits another spreadsheet row; check existing entries before repeating a real enquiry.

### Persistent spreadsheet storage (Google Sheets)

The Google Sheets API appends each inquiry as a new row; Vercel's ephemeral filesystem is not used for persistence.

1. Create a Google Cloud project and enable the Google Sheets API.
2. Create a service account and private key. Keep the key secret. Copy the JSON `private_key` value into `.env.local` without the JSON field's trailing comma or surrounding JSON punctuation; keep its escaped `\n` line breaks.
3. Create a spreadsheet and share it with the service account email with Editor access.
4. Create a tab named `Inquiries`; add these headers in row 1: `Submission Date/Time`, `Full Name`, `Email`, `Phone Number`, `Subject`, `Message`.
5. Set `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` and `GOOGLE_SHEETS_SPREADSHEET_ID`.
6. Set `GOOGLE_SHEETS_RANGE` to `Inquiries!A:F` or the matching range in your spreadsheet.

Each submission is appended with a UTC ISO-8601 timestamp using `INSERT_ROWS`; the spreadsheet can be downloaded or exported as an Excel workbook. Restrict spreadsheet access and set an appropriate retention policy.

### Rate limiting

Create an Upstash Redis database and configure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. The API allows five attempts per IP per minute. If the rate limiter is missing or unavailable, submissions fail closed with a service-unavailable response.

## Environment variables

See `.env.example`. Add the provider credentials to Vercel Project Settings for Production (and Preview if needed). The canonical URL and public hospital contact information are hardcoded in `src/lib/site.ts`; update those constants in source when the details change.

## Hospital-specific launch checklist

The supplied brief did not include an exact street address, public phone number, opening hours, verified clinician names and qualifications, or confirmed facility/service availability. Those facts are not invented in the current site. Before launch:

- Verify that the hardcoded canonical domain and public hospital contact details in `src/lib/site.ts` are correct and that the Google Maps search points to the right location.
- Update `src/lib/doctors.ts` with profiles only after names, qualifications, experience, specialities, expertise and consultation details are verified.
- Review the service and facility content against the hospital's actual offerings.
- Add approved patient testimonials only after obtaining permission and confirming that the wording is accurate.
- Review the privacy policy, terms, data retention and patient information handling with the responsible team.
- Test all contact integrations in the deployed Vercel environment.

## Build and deploy

```powershell
npm run lint
npm run build
```

Import the project into Vercel, choose the Next.js framework preset and configure production environment variables. The project uses standard Next.js routing and build settings, with no persistent local storage or custom Vercel build configuration.

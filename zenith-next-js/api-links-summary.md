# API Links Summary

This document summarizes all the links available from the API endpoints in the ZenithFilings Next.js application.

## API Endpoints

The application has the following API endpoints:

1. `/api/menu` - Navigation menu structure
2. `/api/services` - Business services data
3. `/api/pricing/plans` - Pricing plans
4. `/api/pricing/services` - Service pricing
5. `/api/testimonials` - Customer testimonials
6. `/api/posts` - Blog posts
7. `/api/dashboard` - Dashboard navigation and data
8. `/api/how-it-works` - Process steps

## All Available Links

### Static Pages
- `/` - Home
- `/about` - About Us
- `/services` - Services
- `/pricing` - Pricing
- `/contact` - Contact
- `/faq` - FAQ
- `/blog` - Blog
- `/login` - Login
- `/dashboard` - Dashboard

### Menu Links (from `/api/menu`)
- `/` - Home
- `/about` - About
- `/services` - Services
- `/services?cat=startup` - Startup Services
- `/services?cat=registrations` - Registrations
- `/services?cat=trademark` - Trademark
- `/services?cat=gst` - Goods & Services Tax
- `/services?cat=income-tax` - Income Tax
- `/services?cat=mca` - MCA
- `/blog` - Blog
- `/blog#guides` - Guides
- `/contact#faq` - FAQs
- `/pricing` - Pricing
- `/contact` - Contact

### Service Links (from `/api/services`)
- `/services?cat=startup` - Startup
- `/services?cat=registrations` - Registrations
- `/services?cat=trademark` - Trademark
- `/services?cat=goods-services-tax` - Goods & Services Tax
- `/services?cat=income-tax` - Income Tax
- `/services?cat=mca` - MCA
- `/services?cat=compliance` - Compliance
- `/services?cat=consultation` - Consultation

#### Individual Service Items
- `/services/opc-registration` - OPC Registration
- `/services/llp-registration` - LLP Registration
- `/services/partnership-registration` - Partnership Registration
- `/services/producer-company-registration` - Producer Company Registration
- `/services/section-8-company-registration` - Section 8 Company Registration
- `/services/india-business-setup` - India Business Setup
- `/services/trade-license` - Trade License
- `/services/fssai-registration` - FSSAI Registration
- `/services/drug-license` - Drug License
- `/services/name-change-company` - Name Change - Company
- `/services/trademark-registration` - Trademark Registration
- `/services/copyright-registration` - Copyright Registration
- `/services/gst-registration` - GST Registration
- `/services/gst-return-filing` - GST Return Filing
- `/services/itr-filing` - ITR Filing
- `/services/tds-compliance` - TDS Compliance
- `/services/annual-filing` - Annual Filing
- `/services/director-kyc` - Director KYC
- `/services/compliance-monitoring` - Compliance Monitoring
- `/services/legal-consultation` - Legal Consultation

### Pricing Links (from `/api/pricing/plans` and `/api/pricing/services`)
- `/pricing` - Pricing Plans
- `/pricing#basic` - Basic Plan
- `/pricing#professional` - Professional Plan
- `/pricing#enterprise` - Enterprise Plan
- `/pricing#business-registration` - Business Registration Pricing
- `/pricing#gst-registration` - GST Registration Pricing
- `/pricing#trademark-registration` - Trademark Registration Pricing
- `/pricing#iso-certification` - ISO Certification Pricing
- `/pricing#compliance-monitoring` - Compliance Monitoring Pricing
- `/pricing#legal-consultation` - Legal Consultation Pricing

### Blog/Post Links (from `/api/posts`)
- `/blog` - Blog
- `/blog/about-us` - About Us
- `/blog/our-mission` - Our Mission

### Dashboard Links (from `/api/dashboard`)
- `/analytics` - Analytics
- `/about` - About (from dashboard projects)

## Service Categories and Sub-services

### Startup Services
- Startup India
- Trade License
- FSSAI Registration
- FSSAI License
- Halal License & Certification
- ICEGATE Registration
- Import Export Code
- Legal Entity Identifier Code
- ISO Registration
- PF Registration
- ESI Registration
- Professional Tax Registration
- RCMC Registration
- TN RERA Registration for Agents
- 12A and 80G Registration
- 12A Registration
- 80G Registration
- APEDA Registration
- Barcode Registration
- BIS Registration
- Certificate of Incumbency
- Darpan Registration
- Digital Signature
- Shop Act Registration
- Drug License
- Udyam Registration
- FCRA Registration
- Fire License

### Registration Services
- Trade License
- ISO Registration
- PF Registration
- ESI Registration
- Professional Tax Registration
- RCMC Registration
- TN RERA Registration for Agents

### Trademark Services
- 12A Registration
- 80G Registration
- APEDA Registration
- Barcode Registration
- BIS Registration
- Certificate of Incumbency

### GST Services
- Digital Signature
- Shop Act Registration
- Drug License
- Udyam Registration
- FCRA Registration
- Fire License

## Total Count

- **Static Pages**: 9
- **Menu Links**: 14
- **Service Categories**: 8
- **Individual Services**: 20
- **Pricing Links**: 9
- **Blog Links**: 3
- **Dashboard Links**: 2

**Total Unique Links**: ~65 links

## Usage

To get all links programmatically, you can:

1. Run the `get-all-api-links.js` script (requires Node.js and the application to be running)
2. Use the browser console to fetch each API endpoint and extract links
3. Use the API endpoints directly in your application

## API Response Format

All API endpoints return data in the following format:
```json
{
  "success": true,
  "data": [...]
}
``` 
# API Contracts

## Contact Form Submission
**Endpoint:** `POST /api/contact`
**Description:** Handles contact form submissions from the landing page.
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "message": "string",
  "lang": "string (it|fr)"
}
```
**Response:**
```json
{
  "status": "success",
  "message": "Message received"
}
```

## Health Check
**Endpoint:** `GET /api/`
**Response:**
```json
{
  "message": "Hello World"
}
```

# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Contact:** dharmik.patel101097@gmail.com

## Security Practices

This project follows these security practices:

- **No sensitive data in source code:** No API keys, passwords, phone numbers, or personal identifiers (DOB, etc.) are stored in the repository.
- **Dependencies:** All dependencies are regularly reviewed and updated to patch known vulnerabilities. Run `npm audit` to check for issues.
- **Form handling:** Contact form submissions are handled via Formspree with HTTPS encryption. No server-side code processes user input directly.
- **Content Security:** The site is a static frontend application with no database or server-side processing, minimizing attack surface.
- **No file uploads:** The application does not accept file uploads from users.
- **HTTPS:** The site is served over HTTPS via GitHub Pages.

## Dependency Updates

Run the following to check for vulnerabilities:

```bash
npm audit
npm audit fix
```

## Supported Versions

| Version | Supported |
| ------- | --------- |
| Latest  | Yes       |

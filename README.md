# 🐾 Zootopia Online Shop — QA Project

## Project Overview

Manual and automated testing of **Zootopia**, an online pet products store.  
The goal was to verify core functionality and identify defects across key user flows.

---

## 🔍 Test Scope

| Area | Type |
|------|------|
| Registration | Functional Testing |
| Authorization / Login | Functional Testing |
| Shopping Cart | Functional Testing |
| UI / Banners | Design Testing |

**Environment:** Chrome, Mobile · Windows 11  
**Test Date:** May 2026

---

## 📋 Manual Testing

- **20 Test Cases** written and executed
- **5 Bug Reports** documented (4 Major, 1 Minor)
- Full Test Result Report included

### Results Summary

| Status | Count |
|--------|-------|
| ✅ Passed | 16 |
| ❌ Failed | 4 |
| 🚫 Blocked | 0 |
| 🐛 Bugs Found | 5 |

### Key Bugs Found

| Bug ID | Summary | Severity |
|--------|---------|----------|
| BUG-01 | Password mismatch validation icon missing on confirm field | Major |
| BUG-02 | Terms & Conditions uses non-standard paw icon instead of checkbox | Minor |
| BUG-03 | ID number field accepts more than 11 digits | Major |
| BUG-04 | Cart "Clear All" button does not exist | Major |
| BUG-05 | Banner images and text overlap on homepage | Major |

---

## 🤖 Automated Testing

End-to-end test automation built with **Cypress** and **JavaScript**, covering the same flows tested manually.

### Technologies Used

- [Cypress](https://www.cypress.io/) — E2E test automation framework
- JavaScript — test scripting
- GitHub — version control

---

## 📁 Repository Structure

```
├── cypress/
│   ├── e2e/          # Automated test specs
│   └── fixtures/     # Test data
├── manual-testing/
│   └── Final_Project.docx   # Test cases, bug reports, test result report
└── README.md
```

---

## 🚀 How to Run Automated Tests

```bash
# Install dependencies
npm install

# Open Cypress Test Runner
npx cypress open

# Or run headless
npx cypress run
```

# Simple S3 Website with GitHub Actions

This is a simple HTML/CSS/JS project that demonstrates how to use GitHub Actions to build and deploy a website to an AWS S3 bucket.

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - CSS for styling the page
- `script.js` - JavaScript functionality
- `script.test.js` - Jest tests for JavaScript functions
- `.github/workflows/deploy.yml` - GitHub Actions workflow for CI/CD

## GitHub Actions Workflow

The GitHub Actions workflow performs the following steps:

1. Builds the project
2. Runs tests using Jest
3. Deploys the website to the S3 bucket (arn:aws:s3:::github-action-frontend)

## Setup Instructions

### Prerequisites

- GitHub repository
- AWS account with an S3 bucket

### Setting up Secrets

Add the following secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key

The AWS IAM user needs permissions to write to the S3 bucket.

### Bucket Configuration

Make sure your S3 bucket has the following configuration:

1. Public access enabled for static website hosting
2. Bucket policy allowing public read access
3. Static website hosting enabled in bucket properties

## Testing

Run tests locally:

```bash
npm install
npm test
```
test


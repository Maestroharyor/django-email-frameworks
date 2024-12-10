# Django Email Frameworks

## Project Structure

django-email-frameworks/
│
├── requirements.txt
├── bin/
│ └── manage
└── src/
└── emails_app/
├── settings.py
├── urls.py
├── views.py
├── serializers.py
└── templates/
└── home.html

## Setup Instructions

1. Create a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
```

2. Install dependencies

```bash
pip install -r requirements.txt
```

3. Run the server

```bash
./bin/manage runserver
```

## Available Endpoints

- `/`: Home page with API documentation
- `/apply/mjml/`: Apply using MJML template
- `/apply/react-email/`: Apply using React Email template
- `/apply/maizzle/`: Apply using Maizzle template
- `/apply/inky/`: Apply using Inky template
- `/apply/heml/`: Apply using HEML template

## Request Format

```json
{
  "first_name": "string",
  "last_name": "string",
  "job_posting_title": "string",
  "salary": number
}
```

from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from supabase import create_client, Client

ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ.get('VITE_SUPABASE_URL')
supabase_key = os.environ.get('VITE_SUPABASE_ANON_KEY')
supabase: Client = create_client(supabase_url, supabase_key)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    lang: str = "it"
    timestamp: datetime = datetime.utcnow()

class ContactResponse(BaseModel):
    status: str
    message: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Law Firm API is running"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(form: ContactForm):
    try:
        # Save to Supabase database
        contact_dict = form.dict()
        result = supabase.table('contacts').insert(contact_dict).execute()

        logger.info(f"New contact received from {form.email}: {form.message[:50]}...")

        # Here we would integrate SendGrid/Mailgun in a real production env
        # For MVP, we confirm storage

        return ContactResponse(
            status="success",
            message="Your message has been sent successfully." if form.lang == 'en' else "Il tuo messaggio è stato inviato con successo."
        )
    except Exception as e:
        logger.error(f"Error saving contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
import string
import uvicorn

app = FastAPI()

# CORS settings
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatbotInput(BaseModel):
    text: str

@app.post("/chatbot")
async def chatbot(input_data: ChatbotInput):
    text = input_data.text
    # Generate a few random characters
    random_chars = ''.join(random.choices(string.ascii_letters + string.digits, k=5))
    return {"response": random_chars}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
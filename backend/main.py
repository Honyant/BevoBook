from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
import string
import uvicorn
from cloudflare_api import CourseSelector


import requests
import pandas as pd
from helper import *
from fuzzywuzzy import fuzz
from config import account_id, api_token

app = FastAPI()
a = CourseSelector()

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
    response = a.run(text)
    return {"response": response}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)

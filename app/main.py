from fastapi import FastAPI, UploadFile, HTTPException, Form, File
from typing import Annotated, Optional
from pydantic import BaseModel
from ollama import chat
import fitz
import io

class Course(BaseModel):
    code: str
    name: str
    description: str
    units: int
    requisites: Optional[str] = None
    credit: Optional[str] = None

def parse(content: str):
    response = chat(
        model = "llama3.2", 
        messages = [{
            "role": "user",
            "content": content
        }],
        format = Course.model_json_schema()
        )
    return response

app = FastAPI()

@app.post("/compare")
async def compare(
    name: Annotated[str, Form(...)],
    description: Annotated[str, Form(...)],
    catalog: UploadFile = File(...)
    ):

    if catalog.content_type != "application/pdf":
        raise HTTPException(status_code=422, detail="Invalid File")
    
    catalog_bytes = await catalog.read()
    catalog_file = io.BytesIO(catalog_bytes)
    
    doc = fitz.open(stream=catalog_file, filetype="pdf")
    catalog_text = ""
    for p in doc:
        catalog_text += p.get_text()

    prompt = f""" 
    Extract course data from the catalog below. Courses should include a code (possibly structured as: ANTH 42, for example), 
    a name (possibly structured as: Anthropology and Sociology, for example), a description, an amount of units (usually from 1-5, 
    possibly 0 if classified as no credit), possible prerequisites/corequisites (this field is not required), and the type of credit (can include UC, CSU, Both, or none).

    Catalog: {catalog_text}
    """

    courses = parse(prompt)

    return




from fastapi import FastAPI, UploadFile, HTTPException, Form, File
from typing import Annotated


app = FastAPI()

@app.post("/compare")
async def compare(
    name: Annotated[str, Form(...)],
    description: Annotated[str, Form(...)],
    catalog: UploadFile = File(...)
    ):

    if catalog.content_type != "application/pdf":
        raise HTTPException(status_code=422, detail="File not found.")
    
    
    return




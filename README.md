# PDF Course Matcher
This PDF Course Matcher accepts a course catalog and course info (name and description) to search for matches within the catalog. This can be used to discover possible transferable courses to those which do not show articulation on assist.org, for example.

## How It's Made:

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

This project was made with Next, Typescript, and Tailwind for the frontend, with Python and FastAPI for the backend. On submission, a POST request is sent to the backend, containing the original course info and the course catalog. io is used to make the submitted catalog readable as a PDF, then PyMuPDF, or Fitz, converts the catalog into text stored in a string. This text is inputted into Ollama, which parses the catalog by extracting data and sectioning found courses validated using a Pydantic model. These courses are added to a list, which is iterated through to compare each found course to the original submitted course information using a semantic embeddings model with the Sentence Transformers, or SBERT, module. Each course is scored, and the three with the highest magnitudes of similarity (above 0.4) are returned with their scores. After this process, these scores are displayed at the bottom of the page.

**Default models:**


Ollama: llama3.2 <br>
SBERT: all-MiniLM-L6-v2

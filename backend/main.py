from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from backend.database import Base, engine
from backend.routes import consultas

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(consultas.router)

# arquivos estáticos (imagens)
app.mount("/static", StaticFiles(directory="backend/static"), name="static")


@app.get("/")
def root():
    return {"status": "Painel rodando!"}
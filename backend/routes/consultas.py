from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import models, schemas
import shutil
import uuid

router = APIRouter(prefix="/consultas", tags=["Consultas"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=schemas.ConsultaResponse)
async def criar_consulta(
    titulo: str,
    descricao: str,
    imagem: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    nome_arquivo = f"{uuid.uuid4()}-{imagem.filename}"
    caminho = f"backend/static/uploads/{nome_arquivo}"

    with open(caminho, "wb") as buffer:
        shutil.copyfileobj(imagem.file, buffer)

    consulta = models.Consulta(
        titulo=titulo,
        descricao=descricao,
        imagem=nome_arquivo
    )

    db.add(consulta)
    db.commit()
    db.refresh(consulta)
    return consulta


@router.get("/", response_model=list[schemas.ConsultaResponse])
def listar_consultas(db: Session = Depends(get_db)):
    return db.query(models.Consulta).all()

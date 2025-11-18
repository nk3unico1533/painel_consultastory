from sqlalchemy import Column, Integer, String
from .database import Base

class Consulta(Base):
    __tablename__ = "consultas"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    descricao = Column(String)
    imagem = Column(String)  # caminho da imagem

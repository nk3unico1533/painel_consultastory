from pydantic import BaseModel

class ConsultaBase(BaseModel):
    titulo: str
    descricao: str

class ConsultaCreate(ConsultaBase):
    pass

class ConsultaResponse(ConsultaBase):
    id: int
    imagem: str

    class Config:
        orm_mode = True

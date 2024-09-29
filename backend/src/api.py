from uuid import uuid4

from fastapi import APIRouter

from src.schemas import RecommendInput, RecommendOutput
from src.service import model


router = APIRouter()


@router.post("/predict", response_model=RecommendOutput)
async def rocmmend_videos(reactions: RecommendInput):
    return [ 
        {
            "videoId": uuid4(),
            "name": "Соус кальве",
            "description": "Ох уж этот мистер джонсон. Опят всё перепутал" 
        } for _ in range(10)
    ]

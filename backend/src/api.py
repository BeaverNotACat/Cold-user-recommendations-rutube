from uuid import uuid4

from fastapi import APIRouter, Response

from src.schemas import RecommendInput, RecommendOutput


router = APIRouter()


@router.post("/predict", response_model=RecommendOutput)
async def healthcheck(reactions: RecommendInput):
    return [ 
        {
            "videoId": uuid4(),
            "name": "Соус кальве",
            "description": "Ох уж этот мистер джонсон. Опят всё перепутал" 
        } for _ in range(10)
    ]


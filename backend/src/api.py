from uuid import uuid4

from fastapi import APIRouter

from src.schemas import RecommendInput, RecommendOutput
from src.service import predict, fit
from src.database import dataset


router = APIRouter()


@router.post("/predict", response_model=RecommendOutput)
async def recommend_videos(reactions: RecommendInput):
    return predict(RecommendOutput)


@router.post("/fit")
async def rocmmend_videos():
    return fit(dataset)

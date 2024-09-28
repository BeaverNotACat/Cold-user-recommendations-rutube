from uuid import UUID

from pydantic import BaseModel, RootModel


class RecommendInput(BaseModel):
    userId: str
    reactions: list["Reaction"]


class RecommendOutput(RootModel):
    root: list["Video"]

    
class Reaction(BaseModel):
    videoId: UUID
    reaction: bool | None


class Video(BaseModel):
    videoId: UUID
    name: str
    description: str

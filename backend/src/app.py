from fastapi import FastAPI

from src.api import router

app = FastAPI(
    title="event-service",
)


app.include_router(router)


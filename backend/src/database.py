import aiopg
from pypika import Table

from src.settings import settings


video = Table("video")
iteractions =Table("iteractions")


class DatabaseConnetionManager:
    """
        Creates connection and excecutes queries
    """
    def __init__(self) -> None:
        self.dns = settings.postgres_dns

    async def execute(self, query):
        async with aiopg.create_pool(self.dns) as pool:
            async with pool.acquire() as conn:
                async with conn.cursor() as cur:
                    return await cur.execute(query)
    


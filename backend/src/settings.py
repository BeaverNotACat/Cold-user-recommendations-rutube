from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
        Serialize settings with pydantic schemas
    """
    model_config = SettingsConfigDict(env_file=".env")

    POSTGRES_HOST: str
    POSTGRES_DB: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str

    @property
    def postgres_dns(self):
        return (
            f"dbname={self.POSTGRES_DB} user={self.POSTGRES_USER} password={self.POSTGRES_PASSWORD} host={self.POSTGRES_HOST}"
        )


settings = Settings()  # type: ignore


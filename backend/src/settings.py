from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
        Serialize settings with pydantic schemas
    """
    model_config = SettingsConfigDict(env_file=".env")

    VIDEOS_DATASET_PATH: str
    INTERACTIONS_DATASET_PATH: str


settings = Settings()  # type: ignore


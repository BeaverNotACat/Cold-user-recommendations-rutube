from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
        Serialize settings with pydantic schemas
    """
    model_config = SettingsConfigDict(env_file=".env")



settings = Settings()  # type: ignore


import pandas as pd

from src.settings import settings
import rectools
from lightfm import LightFM


videos = pd.read_parquet(settings.VIDEOS_DATASET_PATH)
interactions = pd.read_parquet(settings.INTERACTIONS_DATASET_PATH)

dataset=rectools.dataset.dataset.Dataset.construct(interactions)

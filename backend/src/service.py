from src.database import spark

from lightfm import LightFM
from rectools.models import LightFMWrapperModel

lightfm = LightFM()
model = LightFMWrapperModel(lightfm)


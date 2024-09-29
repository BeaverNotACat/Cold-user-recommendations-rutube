from src.database import dataset
from src.schemas import RecommendInput 

from lightfm import LightFM
from rectools.models import LightFMWrapperModel

model=LightFM(no_components=30,loss="warp")
wrapped_model=LightFMWrapperModel(model)
wrapped_model=wrapped_model.fit(dataset)

def predict(data: RecommendInput):
    model.predict()

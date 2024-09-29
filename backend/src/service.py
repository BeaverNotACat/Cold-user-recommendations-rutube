from src.database import dataset, videos, interactions
from src.schemas import RecommendInput, RecommendOutput

from lightfm import LightFM
from rectools.models import LightFMWrapperModel

model=LightFM(no_components=30,loss="warp")
wrapped_model=LightFMWrapperModel(model)


def fit(dataset):
    return wrapped_model.fit(dataset)
    

def predict(data: RecommendInput):
    temsToRec = wrapped_model.recommend([data.userId], dataset, 10,True)
    scores = []
    vIds=[]
    i=0

    res = []
    for c, item in temsToRec.iterrows():
        print(item["item_id"])
        video=list(videos[videos["video_id"].values==item["item_id"]].iterrows())[0]
        # print(video)
        print(video[1].title)
        print(video[1].description)
        
        i+=1

        res.append({"videoId": item["item_id"], "name": video[1].title, "description": video[1].description})

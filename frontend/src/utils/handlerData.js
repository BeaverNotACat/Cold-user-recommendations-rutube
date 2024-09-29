const LINK = "http://localhost:8000/predict";

export function generateRequest(fpHash, data){
    var reactions = Array(0)
    if (data !== undefined){
        data.forEach((value, id) => {
            reactions.push({
                'videoId': id,
                'reaction': value
            })
        });
    }

    console.log("request", JSON.stringify({
        "userId": fpHash,
        "reactions": reactions
      }))

    return new Request(LINK, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "userId": fpHash,
            "reactions": reactions
          })
      });
}

export function parseResponse(obj){
    var result = new Map();
    Object.entries(obj).forEach((value) => {
        result.set(value[1].videoId, [value[1].name, value[1].description])
    })
    

    console.log("result", result)
    return result;
}

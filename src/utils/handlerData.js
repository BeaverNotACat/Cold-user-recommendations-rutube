const LINK = "https://petstore.swagger.io/v2/store/order";

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


    var body = JSON.stringify({
        "userId": fpHash,
        "reactions": reactions
      })
    console.log(body)
    return new Request(LINK, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2024-09-28T10:27:58.131Z",
            "status": "placed",
            "complete": true
          }),
      });
}

export function parseResponse(obj){
    return new Map([["2", "3"], ["20", "30"], ["21", "31"], ["234", "33"], ["254", "354"], ["276", "367"]])
}

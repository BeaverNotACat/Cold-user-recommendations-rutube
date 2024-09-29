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
    
    // result = new Map([
    //     ["1", ["Лайфхак для геометрии", "полезно ведь?"]],
    //     ["2", ["каким должен быть идеальный мужчина", "Мистер X2 Богач/бедняк"]],
    //     ["3", ["Птичий дворик в парке Лога", "Кто успел посчитать всех - пишите в комментарии"]],
    //     ["4", ["нейронная звезда", "Сколько ещё таин хранит космос"]],
    //     ["5", ["что делать, если человек потерял сознание?", "#медицина #здоровье"]],
    //     ["6", ["первые пироги на Руси", "Пироги с какой начинкой вам нравятся?"]],
    //     ["7", ["Моя прекрасная Россия", "Мой Данков!!!"]],
    //     ["8", ["это лайфхак для зубной счётки", "А вы какой щёткой чистите зубы?"]],
    //     ["9", ['Водопад "чардымские камни"', "#чардымка #водопад #река #Михайловка"]],
    //     ["10", ["Удар слева", "#спорт #футбол"]],
    // ])
    console.log("result", result)
    return result;
}

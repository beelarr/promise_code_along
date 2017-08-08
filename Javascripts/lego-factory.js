var Legos = ((originalLegos) => {

    let legoItems = []
    let parseData = (data) => {
        data.LegoColorss.forEach((element) =>{
            legoItems.push(element)
        })
        return legoItems
    }


    originalLegos.loadLegos = () => {
        return new Promise((resolve, reject) =>{
            let request = new XMLHttpRequest();
            request.onload = function () {
                if (request.status === 200){
                    let data = JSON.parse(request.responseText);
                    // console.log(data)
                    resolve(parseData(data))
                } else {
                    reject(new Error('Error', request.statusText))
                }
            }
            request.open('GET', './lego-colors.json')
            request.send()
        })
    };

    return originalLegos
})(Legos || {});
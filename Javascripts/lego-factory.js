var Legos = ((originalLegos) => {

    originalLegos.loadLegos = () => {
        return new Promise((resolve, reject) =>{
            let request = new XMLHttpRequest();
            request.onload = function () {
                if (request.status === 200){
                    let data = JSON.parse(request.responseText);
                    console.log(data)
                }
            }
            request.open('GET', './lego-colors.json')
        })
    };

    return originalLegos
})(Legos || {});
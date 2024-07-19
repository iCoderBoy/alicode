function colorRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const box1 = document.getElementById('box1');
    box1.style.width = '100px';
    box1.style.height = '100px';
    box1.style.backgroundColor = colorRandom();

    function colorRandomLinearGradient() {
        var letters = '0123456789ABCDEF';
        var degrees = Math.floor(Math.random() * 361);
        var color = `linear-gradient(${degrees}deg,`;
        let randomNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        
        for (let i = 0; i < randomNumber; i++) {
            let colorStop = '#';
            for (let j = 0; j < 6; j++) {
                colorStop += letters[Math.floor(Math.random() * 16)];
            }
            color += colorStop;
            if (i != randomNumber - 1) color += ",";
        }
        
        color += ')';
        return color;
    }
    
const box2 = document.getElementById('box2');
    box2.style.width = '150px';
    box2.style.height = '150px';
    box2.style.background = colorRandomLinearGradient();
    
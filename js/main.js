function timer() {
    let season = 0;
    let seasonText = ['primavera', 'verano', 'otoño', 'invierno'];
    let body = document.getElementsByClassName('main-game-container')[0];
    let progressBar = document.getElementById('progress');

    setInterval(() => {
        let prgWidth = Number(progressBar.style.width.replace('px', ''));

        if(prgWidth >= 0 && prgWidth < 200) {
            progressBar.style.width = `${ prgWidth++ }px`;
        }
    }, 50);

    setInterval(() => {
        season < 3 && season >= 0 ? season++ : season = 0;
        console.log(seasonText[season]); // dev

        switch (season) {
            case 0:
                body.style.backgroundColor = '#82B742'; // primavera
                progressBar.style.backgroundColor = '#82B742'; // primavera
                progressBar.style.width = 0;
                break;
            
            case 1:
                body.style.backgroundColor = '#EEE91B'; // verano
                progressBar.style.backgroundColor = '#EEE91B'; // verano
                progressBar.style.width = 0;
                break;

            case 2:
                body.style.backgroundColor = '#F28F1F'; // otoño
                progressBar.style.backgroundColor = '#F28F1F'; // otoño
                progressBar.style.width = 0;
                break;

            case 3:
                body.style.backgroundColor = '#659CCC'; // invierno
                progressBar.style.backgroundColor = '#659CCC'; // invierno
                progressBar.style.width = 0;
                break;
        
            default:
                break;
        }
    }, 5000);
};

timer();
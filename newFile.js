Array.from(document.getElementsByClassName('iconimg')).forEach(element => {
    // console.log(e);

    let imgElement = element.querySelector('img'); // Select the img element


    // console.log(imgElement);
    let click = 0;
    imgElement.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        if (songIndex >= 5)
            songIndex = songIndex - 5;
        console.log(songIndex);
        imgElement.style.display = 'none';
        click++;
        console.log(click);
        if (click % 2 != 0) {
            makeAll();
            addpause1(imgElement); // Pass the img element to the function
            masterPlay2.remove();
            // addplay();
            play.style.display = 'none';
            addpause();
            audioElement.src = `songs/Recording${songIndex + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();

        }
        else {
            audioElement.pause();
            addplay1(imgElement);
            pause.style.display = 'none';
            addplay();
            console.log("pause");
        }
    });
    // console.log(imgElement);
    // console.log(imgElement.style.display);
});

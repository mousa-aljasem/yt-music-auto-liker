const songs = document.getElementsByTagName("ytmusic-responsive-list-item-renderer")

console.log(`Found ${songs.length} songs.`);

var i = 1;
Array.from(songs).forEach((song, index) => {
    setTimeout(() => {
        const likeButton = song.querySelector("button[aria-label='Like']");
        const songInfo = song.getElementsByTagName('a'); // 0 == Song Title, 1 == Artist, 2 == Album
    
        console.log(i, songInfo[1].innerHTML, "-", songInfo[0].innerHTML, "- isLiked:", likeButton.getAttribute("aria-pressed"))
    
        if (likeButton.getAttribute("aria-pressed") === "false") {
            likeButton.click();
            console.log("liked");
        }

        i++;
        if (i > songs.length) {
            console.log("------------ COMPLETE ------------");
        }
    }, index * 1000)
})

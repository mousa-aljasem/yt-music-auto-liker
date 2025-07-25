# Youtube Music Auto Liker Script

This script will automatically like every song on a playlist. 
It will also output a very readable progress tracker, letting you know which songs by which artist have already been liked, or if they have now been liked:

![Image showing the output of the console file. Multiple lines of songs showing](https://raw.githubusercontent.com/mousa-aljasem/yt-music-auto-liker/refs/heads/main/console-output.png)

To use this, first open the playlist you would like to use this on. Then scroll to the bottom and make sure every song is loaded as this script will not automatically load them for you. 
Once you have them all loaded, open the inspector by pressing F12. Then make sure you're in the console tab. 

![The inspector for Firefox with the console tab in view](https://raw.githubusercontent.com/mousa-aljasem/yt-music-auto-liker/refs/heads/main/console-tab.png)

paste the contents of the youtube-liker.js file and run it. If you have never run anything on the console before, it will give you a warning. Read the warning and type in the correct phrase. Then paste the contents and run it again. 

# What if i want it to remove all likes
Should you need to have this unlike every song in a playlist, then just change line 13 to be true:

    if (likeButton.getAttribute("aria-pressed") === "true") {



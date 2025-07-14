// Constructor function for creating a Playlist object
function Playlist(name) 
{
  // Sets the name of the playlist
  this.name = name;

  // Initializes an empty array to hold songs
  this.songs = [];

  // Keeps track of the currently playing song
  this.currentSong = null;
}

// Adds a song title to the playlist's songs array
Playlist.prototype.addSong = function(songTitle) 
{
  this.songs.push(songTitle);
  // 'this' refers to the specific Playlist instance calling the method
};

// Sets the current song to the first one in the list and logs it
Playlist.prototype.playFirst = function() 
{
  if (this.songs.length > 0) 
  {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
    // 'this.currentSong' refers to the song on this specific playlist object
  }
};

// Skips the current song by removing it from the list and playing the next one
Playlist.prototype.skipSong = function() 
{
  if (this.songs.length > 1) 
  {
    this.songs.shift(); // Removes the first song
    this.currentSong = this.songs[0]; // Sets next song as current
    console.log("Skipped! Now playing:", this.currentSong);
  }
  else
  {
    console.log("No more songs to skip.");
  }
};

// Lists the playlist's name and all songs in it
Playlist.prototype.listSongs = function() 
{
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
  // 'this.name' and 'this.songs' refer to the properties of the Playlist object
};

// Suggestion: Add error handling to prevent duplicate song titles or empty strings

// New method: removeSong(title) – removes a specific song from the playlist
Playlist.prototype.removeSong = function(songTitle) 
{
  const index = this.songs.indexOf(songTitle);
  if (index !== -1) 
  {
    this.songs.splice(index, 1);
    console.log(`Removed: ${songTitle}`);
    // If the removed song was the current song, reset currentSong
    if (this.currentSong === songTitle) 
    {
      this.currentSong = this.songs[0] || null;
    }
  }
  else
  {
    console.log(`Song not found: ${songTitle}`);
  }
};


// --- Example usage ---
let myMix = new Playlist("My Chill Mix");

myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");

myMix.playFirst();         // Plays "Lofi Study"
myMix.skipSong();          // Skips to "Chillhop Beats"
myMix.listSongs();         // Lists remaining songs
myMix.removeSong("Evening Jazz"); // Removes a specific song
myMix.listSongs();         // Lists songs again

Reflection

What was the hardest part to understand?
The most challenging part at first was following how `this` works inside each method, especially when updating properties like `this.currentSong`. Once I understood that `this` always refers to the specific instance of the Playlist, it made a lot more sense.

How does this code use `this` to tie data and behavior together?
The code uses `this` to connect the data (like `name`, `songs`, and `currentSong`) with the behavior (like adding songs or skipping tracks). Each method acts on the specific Playlist instance that called it. For example, when I call `myMix.addSong()`, `this.songs` clearly points to the songs in the `myMix` playlist only.

What would you do differently if you wrote this object from scratch?
If I wrote this from scratch, I would add some basic error handling—like preventing duplicate songs or making sure the input isn’t an empty string. I’d also consider using ES6 class syntax to make it more modern and easier to read.

 # Romantic Proposal Website

 A cinematic React + Vite proposal site built as a personalized love story. It includes a dreamy hero, timeline, memory gallery, handwritten letter, 100 reasons, future dreams, a final proposal reveal, ambient effects, and optional background music.

 ## Setup

 ```bash
 npm install
 npm run dev
 ```

 For a production build:

 ```bash
 npm run build
 ```

 ## Customize

 Edit the main personalization values in [src/data/loveStory.ts](src/data/loveStory.ts):

 - `GIRLFRIEND_NAME`
 - `YOUR_NAME`
 - `FIRST_MET_DATE`
 - `SPECIAL_DATE`
 - `ANNIVERSARY_DATE`

 That file also contains the story timeline, 100 reasons, future dreams, proposal copy, and the final closing message.

 ## Assets

 Replace the placeholder files in `/public/assets` or update the paths in [src/data/loveStory.ts](src/data/loveStory.ts):

 - `couple1.jpg`
 - `couple2.jpg`
 - `memory1.jpg` to `memory8.jpg`
 - `our-song.mp3`

 If you do not have photos yet, the site still works with the built-in romantic gradients and placeholder labels.

 ## Project Structure

 - [src/components/](src/components) contains the reusable sections and effects.
 - [src/lib/useRomanticSounds.ts](src/lib/useRomanticSounds.ts) creates the soft click and reveal sounds.
 - [src/App.tsx](src/App.tsx) assembles the full experience.

 ## Notes

 - The music player does not autoplay.
 - The proposal buttons remain usable after the `LET ME THINK` response.
 - The secret heart in the header opens a hidden note.
```

import fwwlAnimated from "../assets/fwwlAnimated.gif";
import fwwlArt from "../assets/FINALfwwlcover.jpg";
import postcardsArt from "../assets/postcardsCoverart.jpg";
import postcardsAnimated from "../assets/postcardsAnimated.gif";
import purgatoryArt from "../assets/purgatoryCover.jpg";
import offSeasonArt from "../assets/offSeasonCover.jpg";
import heartlessArt from "../assets/heartlessArt.jpg";
import sevenDaysAlt from "../assets/sevenDaysAlt.jpg";
import sevenDaysCover from "../assets/sevenDaysCover.jpg";
import wahiCoverAlt from "../assets/wahiCoverAlt.gif";
import wahiCover from "../assets/wahiCover.jpg";

const albums = [
  {
    id: 0,
    albumName: "Walt and His Imagination",
    type: "(EP)",
    smartUrl: "https://ibb.co/t2g6wy2",
    artwork: wahiCover,
    altArtwork: wahiCoverAlt,
    producedBy: "Walt",
    releaseDate: "??????",
    secretTooltip: "click for exclusive wallpaper",
  },

  {
    id: 1,
    albumName: "7 Days (A'Sean x Walt)",
    type: "(EP)",
    smartUrl: "https://smarturl.it/Stream7Days",
    artwork: sevenDaysCover,
    altArtwork: sevenDaysAlt,
    producedBy: "Walt",
    releaseDate: "03/30/2021",
    tooltip: "Collaboration EP with myself and A'Sean",
  },
  {
    id: 2,
    albumName: "From Walt With Love",
    type: "(EP)",
    smartUrl: "https://smarturl.it/StreamFWWL",
    artwork: fwwlArt,
    altArtwork: fwwlAnimated,
    producedBy: "Walt",
    releaseDate: "12/15/2018",
    tooltip: "My debut EP",
  },
  {
    id: 3,
    albumName: "Postcards",
    type: "(single)",
    smartUrl: "https://smarturl.it/StreamPostcards",
    artwork: postcardsArt,
    altArtwork: postcardsAnimated,
    producedBy: "Walt",
    releaseDate: "09/19/2018",
    tooltip: "My debut EP",
  },
  {
    id: 4,
    albumName: "Off Season ft. A'Sean",
    type: "(single)",
    smartUrl: "https://smarturl.it/StreamOffSeason",
    artwork: offSeasonArt,
    altArtwork: offSeasonArt,
    producedBy: "Walt",
    releaseDate: "05/14/2018",
    tooltip: "Collaboration with A'Sean",
  },
  {
    id: 5,
    albumName: "Purgatory",
    type: "(single)",
    smartUrl: "https://smarturl.it/StreamPurgatory",
    artwork: purgatoryArt,
    altArtwork: purgatoryArt,
    producedBy: "Walt",
    releaseDate: "02/02/2018",
    tooltip: "Single",
  },
  {
    id: 6,
    albumName: "Heartless",
    type: "(single)",
    smartUrl: "https://smarturl.it/streamheartless",
    artwork: heartlessArt,
    altArtwork: heartlessArt,
    producedBy: "BlackMayo",
    releaseDate: "12/11/2017",
    tooltip: "My debut single",
  },
];
export default albums;

const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector("hero-img");
const sectionContainer = document.querySelector("section")
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
    {
        album: "Super Trouper",
		emblem: "Life is better with music",
		"bg-color": ["#0396FF", "#0D1827"],
		"accent-color": "#0396FF",
		url: "https://pbs.twimg.com/media/Ep22LmuWMAI4mGe.jpg",
		spotify:
        https//open.spotify.com/track/0J2p4KYdr6Mg4ET6JPlbe1?si=ffab09aee77648d5
    },

    {
        album: "Voulez-Vous",
		emblem: "Life is better with music",
		"bg-color": ["#0396FF", "#0D1827"],
		"accent-color": "#0396FF",
		url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/913VZBIkxdL.jpg",
		spotify:
        https//open.spotify.com/track/762B4bOcXF7I2Y8UlKTyTy?si=8cabaad7fc8647bd
    },

    {
        album: "Super Trouper",
		emblem: "Life is better with music",
		"bg-color": ["#0396FF", "#0D1827"],
		"accent-color": "#0396FF",
		url: "https://seeklogo.com/images/A/abba-logo-9E20A8E1A2-seeklogo.com.png",
		spotify:
        https//open.spotify.com/track/3oEkrIfXfSh9zGnE7eBzSV?si=4789c9e802554f89
    },
];
scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

const GamesImage = [
  "./assets/images/allgames/angrybirds.png",
  "./assets/images/allgames/apex.png",
  "./assets/images/allgames/clasofclans.png",
  "./assets/images/allgames/cod.png",
  "./assets/images/allgames/eldenofrings.png",
  "./assets/images/allgames/fc2024.png",
  "./assets/images/allgames/fortnite.png",
  "./assets/images/allgames/godofwar.png",
  "./assets/images/allgames/leagueoflegends.png",
  "./assets/images/allgames/minecraft.png",
  "./assets/images/allgames/mortalcombat.png",
  "./assets/images/allgames/rogue.png",
  "./assets/images/allgames/valorant.png",
  "./assets/images/allgames/warzone.png",
  "./assets/images/allgames/zelda.png"
];

const GameImageContainer = document.getElementById("gameImageContainer");
GameImageContainer.innerHTML = `
  <div class="flex animate-allGameslide">
    ${[...GamesImage, ...GamesImage, ...GamesImage, ...GamesImage].map((image, index) => {
      return `<img src="${image}" alt="Game Image ${index + 1}" class="rounded w-full object-cover mr-5" />`;
    }).join('')}
  </div>
`;
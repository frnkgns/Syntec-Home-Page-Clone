const CommunityImages = [
    "/assets/images/community/apex.png",
    "/assets/images/community/steve.png",
    "/assets/images/community/warzone.png",
];

const imageHTMLLeft = `
  <div class="flex flex-col animate-communitySlideUp">
    ${[...CommunityImages, ...CommunityImages, ...CommunityImages, ...CommunityImages].map((image, index) => {
      return `<img src="${image}" alt="Game Image ${index + 1}" class="rounded object-cover mr-5 xl:h-full xl:w-full w-44" />`;
    }).join('')}
  </div>
`;

const imageHTMLRight = `
  <div class="flex flex-col animate-communitySlideDown">
    ${[...CommunityImages, ...CommunityImages, ...CommunityImages, ...CommunityImages].map((image, index) => {
      return `<img src="${image}" alt="Game Image ${index + 1}" class="rounded object-cover mr-5 xl:h-full xl:w-full w-44" />`;
    }).join('')}
  </div>
`;


document.getElementById("CommunityImageContainerLeft").innerHTML = imageHTMLLeft;
document.getElementById("CommunityImageContainerRight").innerHTML = imageHTMLRight;
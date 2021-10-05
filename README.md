# spotify-moodboard
 Spotify Moodboard gives you a way to view your music as a visual collage. The theme of the collage is customized to match your favorite music style.
 
 I've [uploaded](https://whispering-plains-27367.herokuapp.com/) it, but because I'm still in development mode on Spotify I have to manually add user's emails so that they can be given approved access. 
 ![moodboardexample](https://user-images.githubusercontent.com/46584496/135787749-f50d3900-565c-4548-ac82-12d7715cbc34.png)

# Spotify Web API
 Application uses [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node) to communicate with Spotify's API.
 The application makes calls to the following Spotify end-points via the Node wrapper:
 - [Get users Tops Artists and Tracks](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks)
 - [Get Users Saved Albums](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-albums)
 - [Get User's Playlists](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-playlists)
 - [Get User's Profile](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-profile)
 - [Authorization](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)
 
 # Firestore Database
 Application uses [Cloud Firestore](https://firebase.google.com/docs/firestore) to store theme objects as well as store Spotify app information such as: client ID, redirect URI, and the scopes of Spotify Data to be accessed.
 
 # Theme 
 There are eight different theme objects. Each theme object encompasses a list of genres. This genre list is a family of genres that will all generate the same theme. When the user's top genre is determined a query containing that genre is checked against all documents in the theme collection. Because all genres are only associated with one theme, if the user's top genre is specified in one of the theme's genre list that theme object will be returned to be displayed in the moodboard. If the users genre is not currently associated with a theme, the default theme will be loaded into the user's moodboard. 

 A theme object contains: 
 ``` 
 { background_imgs : [{img:'img_addr',img_src:'where_I_found_img'}],
   font            : 'a google font that best matches the aesthetic of the genre',
   genre           : ['funk','groove','disco'],
   primary1        : '#HEXCOLOR',
   primary2        : '#HEXCOLOR',
   shadow          : 'HEXCOLOR'
  }
```
 I created each theme object based off of color schemes and images that best align with each list of genres but in no way does this reflect the true relationship between the two.
 Themes I have currently:
 alt rock, death metal, folk, funk, indie, rap, shoegaze.
 I hope to add more themes because of course these genres and there associated genre cousins only touch the surface of music. 
 Themes shown below in order: alt rock, death metal, folk, funk, rap, shoegaze. 
 Indie is excluded as it is the example theme.
 ![altrockmoodboard](https://user-images.githubusercontent.com/46584496/135909114-f0a45ace-886f-4ecf-891e-ee5b43193b58.png)
![metalmoodboard](https://user-images.githubusercontent.com/46584496/135909139-a35970bc-3781-42d5-b9c5-cf8d4fa6e996.png)
![folkmoodboard](https://user-images.githubusercontent.com/46584496/135909158-a38162f9-14eb-4c01-8b61-ac5bb79cddaa.png)
![funkmoodboard](https://user-images.githubusercontent.com/46584496/135909176-3a2b420c-ca1b-4ce9-8659-7ef503637824.png)
![rapmoodboard](https://user-images.githubusercontent.com/46584496/135909195-321a56e3-c233-4ba0-8e81-33aa88512108.png)
![shoegazemoodboard](https://user-images.githubusercontent.com/46584496/135909210-56599c9a-7a85-4645-9f53-8580444c6361.png)

 # Background images
 
 Each moodboard uses ten different background images. The Background images for the title and the account button are images I've taken. These images are stored in Firebase Storage and they are constant for every moodboard theme. The other eight images are ones that I found from Pinterest that I think best embody the genre. There is an image credits section of the menu that displays every image used and if clicked, will take you to Pinterest where the image was initially found. 
 


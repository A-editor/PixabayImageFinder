# PixabayImageFinder

This app allows you to query Pixabay with a search term which will bring up a results screen displaying pictures which match your search term. New pictures
will progressively load as you swipe down the screen.

Tapping on one of the pictures in the results screen will bring you to a new page where you can find a higher quality version of the picture
as well as the name of its author and its associated tags.

Tapping on one of the tags will bring you to a new results page which was created with a new search based on the tag name.



## Getting Started

This app requires Node (v12 or later) and the Expo CLI. In order to install Expo, run 

```
npm install -g expo-cli
```

in your Terminal. 

You will also need a Pixabay account and an associated API key (which can be found here after creating an account: https://pixabay.com/api/docs/). 

Once you have cloned the repo, find the ".env_sample" file in the project directory and rename it to ".env". In this newly renamed file, you will find an "API_KEY" variable which is
set equal to a placeholder "YOUR_API_KEY_HERE". Replace the placeholder with your Pixabay API KEY and save the change.

Enter into your cloned directory and run the command

```
npm install
```

Then, if you have the Expo Go app on your phone, run

```
npm run start
```

in the Terminal. Expo Devtools will open in your browser, and a QR code will pop up in the Terminal, which you should scan with your phone camera, after which you will be prompted to open
your Expo Go app where the app bundle will be built.

If you do not have the Expo Go app, you can run 

```
expo start --ios
```
or

```
expo start --android
```

in the Terminal to open your associated phone emulator on your computer, which will then begin building the app (this may take a few seconds).

To bring up the virtual keyboard in the emulator, use cmd + k.







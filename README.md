# Note

This is a fork of [ankurk91's](https://github.com/ankurk91) [*google-chat-electron*](https://github.com/ankurk91/google-chat-electron) since he will no longer be maintaining it.

# Desktop app for Google Chat

[![latest-tag](https://badgen.net/github/release/ankurk91/google-chat-electron)](https://github.com/ankurk91/google-chat-electron/releases)
[![downloads](https://img.shields.io/github/downloads/ankurk91/google-chat-electron/total?cacheSeconds=3600)](https://somsubhra.github.io/github-release-stats/?username=ankurk91&repository=google-chat-electron&page=1&per_page=30)
[![homebrew](https://badgen.net/homebrew/cask/dy/google-chat-electron)](https://formulae.brew.sh/cask/google-chat-electron)
[![chocolatey](https://img.shields.io/chocolatey/dt/unofficial-Google-Chat-Electron?color=blue&label=chocolatey)](https://community.chocolatey.org/packages/unofficial-Google-Chat-Electron)
[![release-linux](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-linux.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-linux.yml)
[![release-mac](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-mac.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-mac.yml)
[![release-windows](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-windows.yml/badge.svg)](https://github.com/ankurk91/google-chat-electron/actions/workflows/release-windows.yml)

An unofficial desktop app for [Google Chat](http://chat.google.com) built with [Electron](https://www.electronjs.org)

### Motivation

* Google has [shutdown](https://support.google.com/chat/answer/10194711) the official Google Chat Desktop App in March
  2021
* Google is forcing users to use PWA which has less features
* You don't want to install Chrome; just to use a PWA. :wink:

### Installation (Debian based Linux)

* You can download the latest debian installer from
  [releases](https://github.com/ankurk91/google-chat-electron/releases/latest) section
* Install the debian package with this command: (correct the file path yourself)

```bash
sudo apt install ~/path/to/google-chat-electron-xxx-amd64.deb
```

### Uninstall (Debian based Linux)

* Logout and Quit from app
* Remove the app with this command

```bash
sudo apt-get remove --purge google-chat-electron
```

* The uninstallation script should remove all relevant files and folders.

### Installation (Mac)

* Homebrew users can run

```bash
brew install --cask --no-quarantine google-chat-electron
```

or

* Download the zip (darwin) file from [releases](https://github.com/ankurk91/google-chat-electron/releases/latest)
* Extract the zip file
* Move the app to your `~/Applications` folder
* Fix the permission issue with this command

```bash
sudo xattr -rd com.apple.quarantine ~/Applications/google-chat-electron.app
```

* Above command should fix the Mac-OS Gatekeeper [issue](https://apple.stackexchange.com/questions/262355/)

### Uninstall (Mac)

* Logout and Quit from app
* Move the app to trash

### Installation Windows

* :warning: This app is **NOT** available
  on [Windows App Store](https://apps.microsoft.com/store/detail/gchat-for-desktop/9MZXBPL66066)
* You can install this app by [downloading](https://github.com/ankurk91/google-chat-electron/releases/latest) the
  installer
* If you prefer [chocolatey](https://chocolatey.org/) on Windows, you can run:

```powershell
choco install unofficial-google-chat-electron
```

* If you prefer [winget-cli](https://github.com/microsoft/winget-cli) on Windows 10+, you can run:

```bash
winget install --id=ankurk91.GoogleChatElectron  -e
```

### Installation (Fedora/RHEL/CentOS)

We don't provide installers for Fedora/RHEL/CentOS, but you can build a local RPM package by your own.

```bash
sudo dnf install rpm-build npm
curl -fsSL https://get.pnpm.io/install.sh | sh -
git clone https://github.com/ankurk91/google-chat-electron.git
cd google-chat-electron

pnpm install
npm run pack:linux
npx electron-installer-redhat@^3 --src dist/google-chat-electron-linux-x64 --dest dist/installers/ --arch x86_64
```

This will create an RPM package in `./dist/installers` folder (you can specify any location you wish).
You can install it with `dnf` or `rpm-ostree` depending on your distro.

### Supported Platforms

The app should work on all x64 and Apple arm64 platforms, but due to lack of time; we test on most popular only.

| OS/Platform         |    Version    |
|:--------------------|:-------------:|
| Ubuntu GNOME        |    20, 22     |
| Linux Mint Cinnamon |      21       |
| MacOS               | 10.15, 11, 12 |
| Windows             |   7, 10, 11   |

### Major features

* System tray
    - Unread message indicator
    - Offline indicator (no internet or not logged-in)
    - Close the app to tray when you close the app window
* Desktop notifications
    - Clicking on notification bring the app to focus and open the specific person chat/room
* Unread message counter in dock
* Auto start the app when you log in to your machine (configurable)
* Auto check for updates on startup and notify user if any (configurable)
* Auto check for internet on startup and keep retrying to connect every 60 seconds if offline
* Open external links in your OS default web browser
* Preserve window position and size
* Prevent multiple chat app instances from running
* CTRL+F shortcut to search
* Open windows when a chat is recevied ([@alescdb](https://github.com/alescdb))
* Add dev tools to Help > Troubleshooting ([@alescdb](https://github.com/alescdb))
* Support for foreign langages (cf https://github.com/ankurk91/google-chat-electron/issues/131)

### Acknowledgements

* [@robyf](https://github.com/robyf/google-chat-linux) for the initial work
* [@squalou](https://github.com/squalou/google-chat-linux) for enhancements
* [@alescdb](https://github.com/alescdb/google-chat-electron) for enhancements
* All past [contributors](https://github.com/ankurk91/google-chat-electron/graphs/contributors)

## Disclaimer

This desktop app is just a wrapper which starts a chromium instance locally and runs the actual web-app in it. All
rights to the [Google Chat](https://chat.google.com/) product is reserved by
[Google Inc.](https://en.wikipedia.org/wiki/Google)
This desktop client has no way to access none of your data.

## License

[GNU GPLv3](LICENSE.txt) License

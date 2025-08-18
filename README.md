![](https://img.shields.io/badge/Foundry-v13-informational) 

# Foundry VTT 13 More Time To Read

The module changes how long chat popup cards (the notifications tray that appears when the chat sidebar is collapsed) stay visible, and optionally extends the small dot indicator time.


## How to install 

1. Copy `https://github.com/Oxy949/foundryvtt-more-time-to-read/releases/latest/download/module.json` 
2. Paste it in your Foundry VTT, wait for install
3. Enable the module in your world
4. Enjoy!

## Module settings

* Popup Duration (ms) – How long chat popup cards remain on screen before they fade out
* Pip Indicator Duration (ms) – How long the small “pip” notification is shown (optional)


## How it's work?

On launch, the module updates Foundry’s internal chat notification timers by setting foundry.applications.sidebar.tabs.ChatLog.NOTIFY_DURATION (popup cards) and, optionally, foundry.applications.sidebar.tabs.ChatLog.PIP_DURATION (pip indicator). This makes chat notifications linger longer when the chat is collapsed, without changing any game data or message content.
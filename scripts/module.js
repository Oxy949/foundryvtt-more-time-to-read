Hooks.once('init', async function () {
    game.settings.register("foundryvtt-more-time-to-read", "cardDurationTime", {
        name: "Popup Duration (ms)",
        hint: "Default Foundry = 5000",
        scope: "world",
        config: true,
        default: 15000,
        type: Number,
        requiresReload: true
    });

    game.settings.register("foundryvtt-more-time-to-read", "pipDurationTime", {
        name: "Pip Indicator Duration (ms)",
        hint: "Default Foundry = 3000",
        scope: "world",
        config: true,
        default: 8000,
        type: Number,
        requiresReload: true
    });
});

Hooks.once("ready", () => {
  const ChatLog = foundry.applications.sidebar.tabs.ChatLog;
  ChatLog.NOTIFY_DURATION = game.settings.get("foundryvtt-more-time-to-read", "cardDurationTime");
  ChatLog.PIP_DURATION = game.settings.get("foundryvtt-more-time-to-read", "pipDurationTime");
});
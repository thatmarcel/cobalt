import { device } from "$lib/device";
import { defaultLocale } from "$lib/i18n/translations";
import type { CobaltSettings } from "$lib/types/settings";

const defaultSettings: CobaltSettings = {
    schemaVersion: 6,
    advanced: {
        debug: false,
        useWebCodecs: false,
    },
    appearance: {
        theme: "auto",
        language: defaultLocale,
        autoLanguage: true,
        hideRemuxTab: false,
    },
    accessibility: {
        reduceMotion: false,
        reduceTransparency: false,
        disableHaptics: false,
        dontAutoOpenQueue: false,
    },
    save: {
        alwaysProxy: false,
        localProcessing:
            device.supports.defaultLocalProcessing ? "preferred" : "disabled",
        audioBitrate: "320",
        audioFormat: "best",
        disableMetadata: false,
        downloadMode: "auto",
        filenameStyle: "nerdy",
        savingMethod: "download",
        allowH265: true,
        tiktokFullAudio: false,
        convertGif: true,
        videoQuality: "max",
        subtitleLang: "none",
        youtubeVideoCodec: "av1",
        youtubeVideoContainer: "mkv",
        youtubeDubLang: "original",
        youtubeHLS: false,
        youtubeBetterAudio: true,
    },
    privacy: {
        disableAnalytics: false,
    },
    processing: {
        customInstanceURL: "",
        customApiKey: "",
        enableCustomInstances: false,
        enableCustomApiKey: false,
        seenCustomWarning: false,
    }
}

export default defaultSettings;

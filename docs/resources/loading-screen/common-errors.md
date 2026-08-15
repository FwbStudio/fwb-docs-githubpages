---
title: Loading Screen Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Loading Screen script.
---

# Loading Screen — Common Errors & FAQ

Have a question or encounter an issue while running **fs_loadingscreen**? Check the common questions and error solutions below.

---

### ❓ Q: Hosted background video is not playing or shows a black screen?

::: danger Cause
This usually happens if the video link is invalid, not direct, or if `LocalVideo = true` is set while using an external URL.
:::

::: tip Solution
1. Open `fs_loadingscreen/config/config.lua`.
2. Ensure `LocalVideo = false` when using hosted video links.
3. Check `Video.Type` (use `"fivemanage"` or `"streamable"`).
4. Verify that the video link in `Video.Links` is a direct link ending in `.mp4` or `.webm`.
:::

---

### ❓ Q: Local video is not displaying on the loading screen?

::: danger Cause
FiveM browser runtime only supports `.webm` format for local video assets. `.mp4`, `.avi`, or `.mov` files will not render locally.
:::

::: tip Solution
1. Convert your local video from `.mp4` to `.webm` format. You can convert your video online for free using [Clideo MP4 to WEBM Converter](https://clideo.com/editor/?convertTo=WEBM).
2. Place the `.webm` file inside `fs_loadingscreen/web/videos/`.
3. Set `LocalVideo = true` and update `File = "web/videos/yourvideo.webm"` in `config.lua`.
:::

---

### ❓ Q: Audio tracks are not playing sound?

::: danger Cause
The audio file path in `Audio` array does not match the actual file name or is not in `.mp3` format.
:::

::: tip Solution
1. Place `.mp3` audio files inside `fs_loadingscreen/web/audio/`.
2. Ensure `File = "web/audio/song.mp3"` matches the exact filename in `config.lua`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**

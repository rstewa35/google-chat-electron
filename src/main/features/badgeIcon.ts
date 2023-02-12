import {app, BrowserWindow, ipcMain, nativeImage, Tray} from 'electron';
import path from 'path';
import {is} from "electron-util";

type IconTypes = 'offline' | 'normal' | 'badge';
let lastCount: number = -1;
const scriptPath = path.join(app.getPath('appData'), 'google-chat-electron', 'on-message.sh');

// Decide app icon based on favicon URL
const decideIcon = (href: string): IconTypes => {
    let type: IconTypes = 'offline';

    if (href.match(/favicon_chat_r2/) ||
        href.match(/favicon_chat_new_non_notif_r2/)) {
        type = 'normal';
    } else if (href.match(/favicon_chat_new_notif_r2/)) {
        type = 'badge';
    }

    return type;
}

export default (window: BrowserWindow, trayIcon: Tray) => {

    ipcMain.on('faviconChanged', (evt, href) => {
        const type = decideIcon(String(href));

        const size = is.macos ? 16 : 32;
        const icon = nativeImage.createFromPath(path.join(app.getAppPath(), `resources/icons/${type}/${size}.png`))
        trayIcon.setImage(icon);
    });
}

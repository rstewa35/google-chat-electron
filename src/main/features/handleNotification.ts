import {BrowserWindow, ipcMain, IpcMainEvent} from 'electron';

export default (window: BrowserWindow) => {

    ipcMain.on('notification-click', (event: IpcMainEvent) => {

        if (!window.isVisible() || !window.isFocused()) {
            window.show()
        }

    });

    // ipcMain.on('notification', (event: IpcMainEvent, title, opt) => {
    //   if (window.isFocused()) {
    //     return;
    //   }
    //
    // });
}

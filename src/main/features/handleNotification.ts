import {BrowserWindow, ipcMain, IpcMainEvent} from 'electron';
import store from '../config';

export default (window: BrowserWindow) => {

    ipcMain.on('notification-click', (event: IpcMainEvent) => {

        if (!window.isVisible() || !window.isFocused()) {
            window.show()
        }

    });

    ipcMain.on('notification', (event: IpcMainEvent, title, opt) => {

        if (store.get('app.showOnMessage')) {
            if (!window.isVisible() || !window.isFocused()) {
                window.show()
            }
        }

    });
}

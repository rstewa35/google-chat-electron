// from: https://github.com/nativefier/nativefier/blob/b74c0bf9592681e489b23e25a12492fefd0b9b90/app/src/preload.ts

import {ipcRenderer} from 'electron';

const log = console; // since we can't have `loglevel` here in preload

/**
 * Patches window.Notification to:
 * - set a callback on a new Notification
 * - set a callback for clicks on notifications
 * @param createCallback
 * @param clickCallback
 */
function setNotificationCallback(
    createCallback: {
        (title: string, opt: NotificationOptions): void;
        (...args: unknown[]): void;
    },
    clickCallback: { (): void; (this: Notification, ev: Event): unknown },
): void {
    const OldNotify = window.Notification;
    const newNotify = function (
        title: string,
        opt: NotificationOptions,
    ): Notification {
        createCallback(title, opt);
        const instance = new OldNotify(title, opt);
        instance.addEventListener('click', clickCallback);
        return instance;
    };
    newNotify.requestPermission = OldNotify.requestPermission.bind(OldNotify);
    Object.defineProperty(newNotify, 'permission', {
        get: () => OldNotify.permission,
    });

    window.Notification = newNotify as any;
}

function notifyNotificationCreate(
    title: string,
    opt: NotificationOptions,
): void {
    ipcRenderer.send('notification', title, opt);
}

function notifyNotificationClick(): void {
    ipcRenderer.send('notification-click');
}

// @ts-expect-error TypeScript thinks these are incompatible but they aren't
setNotificationCallback(notifyNotificationCreate, notifyNotificationClick);

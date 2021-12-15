import { Injectable } from '@angular/core';
import * as Electron from 'electron';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  constructor() {}

  electron = window.require('electron');

  isElectron(): boolean {
    if (window && window.process && window.process.type) {
      return true;
    } else {
      return false;
    }
  }

  // Check System configuration
  public get isMacOS(): boolean {
    return this.isElectron() && process.platform === 'darwin';
  }

  public get isWindows(): boolean {
    return this.isElectron()&& process.platform === 'win32';
  }

  public get isLinux(): boolean {
    return this.isElectron()&& process.platform === 'linux';
  }

  public get isX86(): boolean {
    return this.isElectron()&& process.arch === 'ia32';
  }

  public get isX64(): boolean {
    return this.isElectron()&& process.arch === 'x64';
  }

  public get isArm(): boolean {
    return this.isElectron()&& process.arch === 'arm';
  }

  public get ipcRenderer(): Electron.IpcRenderer | null {
    return this.electron ? this.electron.ipcRenderer : null;
  }

  public get webFrame(): Electron.WebFrame | null {
    return this.electron ? this.electron.webFrame : null;
  }

  public get clipboard(): Electron.Clipboard | null {
    return this.electron ? this.electron.clipboard : null;
  }
}

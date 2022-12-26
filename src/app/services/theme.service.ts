import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _isOs: boolean;
  private _isDark: boolean;

  constructor() {
    this._isOs = true;
    this._isDark = false;
  }

  isOs(): boolean {
    return this._isOs;
  }

  switchTheme(): void {
    this._isOs = !this._isOs;
    this._isDark = !this._isDark;
  }

  isDark(): boolean {
    return this._isDark;
  }

  changeTheme(): void {
    this._isDark = !this._isDark;
  }
}

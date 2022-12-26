import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-test-dark',
  templateUrl: './test-dark.component.html',
  styleUrls: ['./test-dark.component.scss']
})
export class TestDarkComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  switchDark(): void {
    this.themeService.changeTheme();
  }

  switchOs(): void {
    this.themeService.switchTheme();
  }

  isDark(): boolean {
    return this.themeService.isDark();
  }

  isOs(): boolean {
    return this.themeService.isOs();
  }

  getClasses(): string {
    if(this.isOs()) {
      return 'os-theme';
    }
    return this.isDark() ? "theme-light" : "theme-dark";
  }

}

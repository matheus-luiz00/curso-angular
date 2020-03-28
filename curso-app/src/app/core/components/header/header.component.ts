import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() headerClickEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  headerClick(click: boolean) {
    this.headerClickEvent.emit(click);
  }
}

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // public newServerName = "";
  public newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(input: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(input: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}

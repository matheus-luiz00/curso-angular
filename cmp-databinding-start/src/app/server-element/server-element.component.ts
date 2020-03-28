import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ContentChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ContentChild("paragraph", { static: true }) paragraphContent: ElementRef;

  constructor() {
    console.log("Constructor Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges Called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit Called!");
    console.log(this.paragraphContent.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log("AfterViewInit Called!");
    console.log(this.paragraphContent.nativeElement.textContent);
  }
}

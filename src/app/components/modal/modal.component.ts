import { Component, computed, ContentChild, signal } from '@angular/core';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-modal',
  imports: [MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @ContentChild(ModalHeaderComponent) headerComponent?: ModalHeaderComponent;

  @ContentChild(ModalBodyComponent) bodyComponent?: ModalBodyComponent;

  @ContentChild(ModalFooterComponent) footerComponent?: ModalFooterComponent;

  // headerAvailable = false;
  // bodyAvailable = false;
  // footerAvailable = false;

  // ngAfterContentInit() {
  // !! always returns TRUE for Truthy values
  // !! always returns FALSE for "undefined" or "null"
  // this.headerAvailable = !!this.headerComponent;
  // this.bodyAvailable = !!this.bodyComponent;
  // this.footerAvailable = !!this.footerComponent;
  // }

  // bodyMessage: any;
  // getBodyMesage() {
  //   if (this.bodyComponent) {
  //     this.bodyMessage = this.bodyComponent.getBodyMessage();
  //   }
  // }

  private _headerAvailable = signal(false);
  private _bodyAvailable = signal(false);
  private _footerAvailable = signal(false);

  // Public computed properties
  headerAvailable = computed(() => this._headerAvailable());
  bodyAvailable = computed(() => this._bodyAvailable());
  footerAvailable = computed(() => this._footerAvailable);

  ngAfterContentInit() {
    this._headerAvailable.set(!!this.headerComponent);
    this._bodyAvailable.set(!!this.bodyComponent);
    this._footerAvailable.set(!!this.footerComponent);
  }

  bodyMessage = signal('');
  getBodyMessage() {
    if (this.bodyComponent) {
      this.bodyMessage.set(this.bodyComponent.getBodyMessage());
    }
  }
}

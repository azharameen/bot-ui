import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material';

interface ChatMessages {
  by: string;
  msg: string;
  date: Date;
}

@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent implements OnInit {

  @ViewChild('drawer', { static: false }) public drawer: MatDrawer;
  @ViewChild('chatSection', { static: false }) public chatSection: MatDrawer;

  @Output() public drawerToggler = new EventEmitter();
  @Output() public chatSectionToggler = new EventEmitter();


  message = '';
  messages: ChatMessages[] = [];

  constructor() {
  }

  ngOnInit() {
    window.onload = () => {
      const header: HTMLElement = document.querySelector('.mat-card-header');
      const content: HTMLElement = document.querySelector('.mat-card-content');
      const footer: HTMLElement = document.querySelector('.mat-card-footer');
      const headerHeight: number = header.clientHeight;
      const footerHeight: number = footer.clientHeight;
      const calc = document.body.clientHeight - (headerHeight + footerHeight);
      content.style.height = calc + 'px';
    };
    window.onresize = () => {
      const header: HTMLElement = document.querySelector('.mat-card-header');
      const content: HTMLElement = document.querySelector('.mat-card-content');
      const footer: HTMLElement = document.querySelector('.mat-card-footer');
      const headerHeight: number = header.clientHeight;
      const footerHeight: number = footer.clientHeight;
      const calc = document.body.clientHeight - (headerHeight + footerHeight);
      content.style.height = calc + 'px';
    };
  }

  openDrawer() {
    this.drawerToggler.emit('drawerToggler');
  }

  openChatSection() {
    this.chatSectionToggler.emit('chatSectionToggler');
  }

  onSubmitChat() {
    if (this.message) {
      this.messages.push({ by: 'user', msg: this.message, date: new Date() });
      this.messages.push({ by: 'bot', msg: this.message, date: new Date() });
      this.message = '';
    }
  }
}

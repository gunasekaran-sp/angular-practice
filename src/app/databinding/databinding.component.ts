import { Component } from '@angular/core';

@Component({
    selector: 'databinding',
    template: `
    <h2>Databinding</h2>
    <input type='text' placeholder="Enter username" [(ngModel)]='username'>
    <button class="btn btn-primary d-block" [disabled]="username === ''" (click)="onResetUsername()">Reset Username</button>
    `,
    styleUrls: ["./databinding.component.css"]
})
export class DatabindingComponent {
    username = "";
    onResetUsername() {
        this.username =""
    }
}
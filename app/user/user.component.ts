import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: 'user.component.html'
})
export class UserComponent {
categorys = ['HDS', 'DIM',
            '主辅材补单'];
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'APP/login.component.html',
    styles: [`
        .container-fluid {
            background: url(http://www.skystarventures.com/wp-content/uploads/2014/03/White-Background.jpg) no-repeat center center fixed;
            height: 100%;
        }
        .form-signin {
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
        }
        .form-signin .form-signin-heading,
        .form-signin .checkbox {
            margin-bottom: 10px;
        }
        .form-signin .checkbox {
            font-weight: normal;
        }
        .form-signin .form-control {
            position: relative;
            height: auto;
            -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                    box-sizing: border-box;
            padding: 10px;
            font-size: 16px;
        }
        .form-signin .form-control:focus {
            z-index: 2;
        }
        .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    `]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
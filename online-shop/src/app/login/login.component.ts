import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AuthenticationService} from '../authentication.service';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  myModal = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.authenticationService.isLoggedIn = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  showModal() {
    this.myModal = !this.myModal;
    setTimeout(() => location.reload(true), 2500);
  }

  closeModal() {
    location.reload(true);
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.loginForm.invalid) {
      this.showModal();
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('username', this.loginForm.value.username);
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.showModal();
          this.alertService.error(error);
          this.loading = false;
        });

  }

}

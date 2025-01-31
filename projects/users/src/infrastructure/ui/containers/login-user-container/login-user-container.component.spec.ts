import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserContainerComponent } from './login-user-container.component';

describe('LoginUserContainerComponent', () => {
  let component: LoginUserContainerComponent;
  let fixture: ComponentFixture<LoginUserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUserContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

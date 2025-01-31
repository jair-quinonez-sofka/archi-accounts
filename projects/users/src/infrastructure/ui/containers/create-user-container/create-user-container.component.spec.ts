import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserContainerComponent } from './create-user-container.component';

describe('CreateUserContainerComponent', () => {
  let component: CreateUserContainerComponent;
  let fixture: ComponentFixture<CreateUserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArticulesCreateComponent } from './manage-articules-create.component';

describe('ManageArticulesCreateComponent', () => {
  let component: ManageArticulesCreateComponent;
  let fixture: ComponentFixture<ManageArticulesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageArticulesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageArticulesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

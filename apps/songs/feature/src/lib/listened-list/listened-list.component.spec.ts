import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenedListComponent } from './listened-list.component';

describe('ListenedListComponent', () => {
  let component: ListenedListComponent;
  let fixture: ComponentFixture<ListenedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListenedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListenedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

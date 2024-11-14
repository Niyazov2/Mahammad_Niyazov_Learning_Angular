import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyItemListComponent } from './modify-item-list.component';

describe('ModifyItemListComponent', () => {
  let component: ModifyItemListComponent;
  let fixture: ComponentFixture<ModifyItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

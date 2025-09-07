import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesModule } from './pages-module';

describe('PagesModule', () => {
  let component: PagesModule;
  let fixture: ComponentFixture<PagesModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

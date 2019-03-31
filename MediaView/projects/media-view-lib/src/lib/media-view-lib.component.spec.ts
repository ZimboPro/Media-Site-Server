import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaViewLibComponent } from './media-view-lib.component';

describe('MediaViewLibComponent', () => {
  let component: MediaViewLibComponent;
  let fixture: ComponentFixture<MediaViewLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaViewLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaViewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

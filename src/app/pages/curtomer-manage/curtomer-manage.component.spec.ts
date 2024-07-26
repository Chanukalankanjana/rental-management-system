import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurtomerManageComponent } from './curtomer-manage.component';

describe('CurtomerManageComponent', () => {
  let component: CurtomerManageComponent;
  let fixture: ComponentFixture<CurtomerManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtomerManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtomerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

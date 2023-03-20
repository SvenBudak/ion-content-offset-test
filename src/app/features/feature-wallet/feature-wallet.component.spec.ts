import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWalletComponent } from './feature-wallet.component';

describe('FeatureWalletComponent', () => {
  let component: FeatureWalletComponent;
  let fixture: ComponentFixture<FeatureWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

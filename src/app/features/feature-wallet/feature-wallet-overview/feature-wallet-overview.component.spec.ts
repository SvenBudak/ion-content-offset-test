import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWalletOverviewComponent } from './feature-wallet-overview.component';

describe('FeatureWalletOverviewComponent', () => {
  let component: FeatureWalletOverviewComponent;
  let fixture: ComponentFixture<FeatureWalletOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureWalletOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureWalletOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

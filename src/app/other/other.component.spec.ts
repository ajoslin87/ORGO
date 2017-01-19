/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtherComp } from './other.component';

describe('OtherComp', () => {
  let component: OtherComp;
  let fixture: ComponentFixture<OtherComp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherComp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

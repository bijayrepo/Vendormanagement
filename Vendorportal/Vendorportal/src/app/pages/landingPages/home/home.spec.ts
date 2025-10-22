import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Home } from './home'; // or './home.component' if that’s the correct path

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [Home], // ✅ for non-standalone
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define the services array', () => {
    expect(component.services).toBeDefined();
    expect(Array.isArray(component.services)).toBeTrue();
  });

  it('should contain exactly six services', () => {
    expect(component.services.length).toBe(6);
  });

  it('each service should have required properties', () => {
    component.services.forEach(service => {
      expect(service.title).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(Array.isArray(service.features)).toBeTrue();
      expect(service.features.length).toBeGreaterThan(0);
    });
  });

  it('should render six service cards in the DOM', () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(6);
  });

  it('should display service titles correctly', () => {
    fixture.detectChanges();
    const titles = fixture.debugElement.queryAll(By.css('.card-title'));
    expect(titles.length).toBe(6);
    expect(titles[0].nativeElement.textContent.trim()).toContain('AI Related API Services');
  });

  it('should render features as list items', () => {
    fixture.detectChanges();
    const featureLists = fixture.debugElement.queryAll(By.css('ul'));
    expect(featureLists.length).toBeGreaterThan(0);
    const firstListItems = featureLists[0].queryAll(By.css('li'));
    expect(firstListItems.length).toBeGreaterThan(0);
  });
});

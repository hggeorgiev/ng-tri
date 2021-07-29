import {ComponentFixture, TestBed} from '@angular/core/testing'
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'
import {Counter} from "./counter.component"

describe('EventEmitter: Counter', () => {
  let counter;

  beforeAll( () => {
      TestBed.resetTestEnvironment()
      TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() )
  })

  //setup
  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [ Counter ],
      })

      let fixture = TestBed.createComponent( Counter )
      counter = fixture.componentInstance
  })

  //specs
  it('should increment +1', done => {
    counter.changes.subscribe(x => {
      expect(x).toBe(1)
      done()
    })
    counter.change(1)
  })

  it('should decrement -1', done => {
    counter.changes.subscribe(x => {
      expect(x).toBe(-1)
      done()
    })
    counter.change(-1)
  })
})

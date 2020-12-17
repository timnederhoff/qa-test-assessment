# Things I've done

* added protractor-cucumber-framework dependency to make cucumber work with protractor
* added command to ensure there is an empty test-reports directory
* replaced the baseurl of the backend service (from swapi.co to swapi.dev)
* set default timeout in step defs instead of setting each step def
* removed browser.sleep(), didn't need an explicit wait because all results were waited for in the framework
* in the application, I added test classes to page elements (i.e. e2e-character-card) for better element selection from
  the tests.

# Findings

* searching with an empty form doesn't refresh results (I guess the submit isn't even fired) => 1 failing test
* the result components seem similar, but are lousely coupled components. This could be a generic component (makes it 
  easier for making page objects too :D)

# Notes

* environmental requirements like platform (i.e. Chrome on OS X) is not covered by the tests itself. It could be if we
  would make use of a selenium grid or a browser grid like browserlab, saucelabs or perfecto mobile etc. For now, the
  tests were only run on my local machines (Chrome 87 on Ubuntu 20.04 and Chrome 87 on MacOS Catalina). However, Node 
  v10 is used though.

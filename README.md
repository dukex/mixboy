# Mixboy

## Contributing
### Issue and Feature Request
Mixboy uses GitHub Issue Tracking to track issues and feature requests. If you've found a bug, this is the place to start.  If you have a feature request, please put a feature-request tag.

### Setting Up a Development Environment

```
$ gem install bundler
$ bundle install
```

Mixboy use ```catapult``` gem to server **coffeescripts** and others assets

```
$ catapult server -p 3000
```
or only run rackup

```
$ rackup -p 3000
```

It's recommended run the catapult watch to compile assets

```
$ catapult watch
```

### Test Javascript
When **@dukex** started the project was a ```index.html``` and a ```app.js```, but it's important test all javascript code, if you found a behavior without test, please send a pull-request, We will are happy!

Mixboy use jasmine to test, you can run in your terminal with:

```
$ rake jasmine:ci
```
Or up a jasmine server

```
$ rake jasmine
$ open http://localhost:8888 # in MacOSX
```
### Contribuing with Code
The first thing you need to do to be able to contribute code is to fork the mixboy's repository and clone:

``` 
$ git clone git://github.com/<your-github-name>/mixboy.git
```
and create a feature-branch

```
$ cd mixboy
$ git checkout -b your-branch-name master
```

Write your code and push to origin

```
$ git push origin your-branch-name
```
Enter on http://github.com/your-github-name/mixboy and click in **Pull Request**

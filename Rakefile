require 'catapult'

namespace :assets do
  desc "Compile all the assets to ./public/assets."
  task :precompile do
    Catapult::CLI.new.build
  end
end
begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end

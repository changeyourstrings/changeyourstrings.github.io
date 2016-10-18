
require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do

    if not Dir.exist? "_site"
        system "git clone https://github.com/changeyourstrings/changeyourstrings.github.io"
    end

    system "cp -r _site/* changeyourstrings.github.io/"
    system "cd changeyourstrings.github.io/"
    system "pwd"

    p "Git adding: "
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    p "Git commit: "
    system "git commit -am #{message.shellescape}"
    p "Git push: "
    system "git push origin master"
    p "Done."
end
task :default => :publish

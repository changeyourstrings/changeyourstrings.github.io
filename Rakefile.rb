
require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate and publish blog to gh-pages"
task :publish do

    if not Dir.exist? "_site"
        system "git clone https://github.com/changeyourstrings/changeyourstrings.github.io"
    end

    system "jekyll clean && jekyll build"

    system "cp -r _site/* changeyourstrings.github.io/"
    Dir.chdir "changeyourstrings.github.io/"
    system "pwd"

    p "Git adding: "
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    p "Git commit: "
    system "git commit -m \"#{message}\" "
    p "Git push: "
    system "git push origin master"
    p "Done."
end
task :default => :publish

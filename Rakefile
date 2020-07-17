require 'html-proofer'
# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {
    :assume_extension => true,
    :check_favicon => true,
    :external_only => true,
    :only_4xx => true,
    :file_ignore => [ '/assets/materials/' ],
    :url_ignore => [  ],
    :url_swap => { %r{https://csguides.github.io} => '' },
    :typhoeus => {
      :ssl_verifypeer => false,
      :ssl_verifyhost => 0},
    verbose => true}).run
end
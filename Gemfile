source 'https://rubygems.org'

gem 'rails', '4.0.3'
gem 'bootstrap-sass', '~> 3.1.1'  # sass-rails needs to be higher than 3.2
gem 'font-awesome-sass'
gem "sass-rails", '4.0.2' # Use SCSS for stylesheets
gem 'bcrypt-ruby', '3.1.2'
gem 'sprockets'
gem 'jquery-turbolinks'
gem 'rspec-its'
gem 'faker', '1.0.1'
gem 'will_paginate', '3.0.3'
gem 'bootstrap-will_paginate'
gem 'protected_attributes'
gem 'devise', '3.0.0.rc'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'jquery-rails'
gem 'rails_admin'

group :development, :test do
  gem 'rspec-rails', '~> 3.0.0.beta'
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'
  # specialized for defining Active Record objects. User Factories
  gem 'factory_girl_rails', '4.1.0',  :require => false
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails', '4.0.0' # Use CoffeeScript for .js.coffee assets and views
  gem 'uglifier', '1.3.0' # Use Uglifier as compressor for JavaScript assets
end

group :test do
  #  Use to test web app by simulating user/browser interaction
  gem 'capybara'
  gem 'cucumber-rails', '1.2.1', :require => false
  gem 'database_cleaner', '0.7.0'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
# Ruby version
ruby "2.1.1"
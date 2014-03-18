source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.3'

group :development, :test do
  gem 'rspec-rails', '~> 3.0.0.beta'

  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'

  # specialized for defining Active Record objects. User Factories
  gem 'factory_girl_rails', '4.1.0'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '4.0.0'  # Use SCSS for stylesheets
  gem 'coffee-rails', '4.0.0' # Use CoffeeScript for .js.coffee assets and views
  gem 'uglifier', '1.3.0' # Use Uglifier as compressor for JavaScript assets
end

# gem to enable all platform features
# gem 'rails_12factor', group: :productionx

#function to transform the password and make the password hash.
gem 'bcrypt-ruby', '3.1.2'


# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

gem 'protected_attributes'
gem 'devise', '3.0.0.rc'

# Use jquery as the JavaScript library
gem 'jquery-rails'

group :test do
  #  Use to test web app by simulating user/browser interaction
  gem 'capybara'
end

group :production do
  gem 'pg'
end

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

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
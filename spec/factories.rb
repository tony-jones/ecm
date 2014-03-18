FactoryGirl.define do
  factory :user do
    name     "Mike Robinson"
    email    "mikerobinson@example.com"
    password "foobar"
    password_confirmation "foobar"
  end
end
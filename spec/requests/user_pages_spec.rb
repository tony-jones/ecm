require 'spec_helper'

describe "User pages" do

  subject { page }

  describe "signup page" do
    before { visit signup_path }
    let(:heading)    { 'Sign Up' }
    let(:page_title) { 'Sign Up' }

  end
end


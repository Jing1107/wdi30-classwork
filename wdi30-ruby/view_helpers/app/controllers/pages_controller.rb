class PagesController < ApplicationController
  def home
    #render :home
    #if you don't say what to render...
    #...rails will automatically render a view with
    #Take advantage of implicit rendering -- a view the same name
  end

  def numbers
    @amount = 9234.248
    @large_number = 234834873483
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 2
    @story = "AAABBBBWWWW VVVV JJJJJJ" * 80
  end

  def assets
  end

  def url
  end
end

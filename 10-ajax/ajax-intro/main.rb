require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia?json' # sync
puts data["text"]

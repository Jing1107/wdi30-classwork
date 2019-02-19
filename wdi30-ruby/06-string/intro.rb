require 'sinatra'
require 'sinatra/reloader'
# NB: Server restart still necessary if you add a ner `require`
require 'pry'


# DSL - domain specific language

# def hello
#   "hello"
# end

get '/hello' do
  "Hello world from Sinatra"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{`uptime`}"
end

# Dynamic URLs
get '/fanclub/:name' do
  #binding.pry
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

# get '/fanclub/joel' do
#   "Joel is a proud member of the Marx Brothers fan club"
# end
#
# get '/fanclub/mato' do
#   "Marto is a prou member of the Marx Brothers fan club"
# end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase }is a proud member of the Marx Brothers fan club"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase }is a proud member of the Marx Brothers fan club.
  #{ params[:favouriate].capitalize}"
end



# Crappy calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "<html><head><title>calculator</title></head></html>The result is #{ result }"
end

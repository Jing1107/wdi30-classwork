require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following command in another terminal"
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
  #open
  scanlog = File.open 'scan.gnmap'

  @hosts = [] #ip addresses

  scanlog.each do |line|
    next if line =~ /^#/

    m = line.match /Host: ([0-9.]+)/
    @hosts<< m[1]  # m[1] is the first parenthesised/captured group
  end
end

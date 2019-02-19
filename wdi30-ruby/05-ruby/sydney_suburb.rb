=begin
3. Sydney Suburbs
Create a program that asks what suburbs you live in.
Depending on the answer, print an appropriate response of your choosing
=end

print "which suburb do you live: "
suburb = gets.chomp.downcase

case suburb
when suburb == 'cherrybrook'
  puts "nice"
when suburb == 'rosebay'
  puts 'wow'
when suburb == 'bankstown'
  puts "good"
else
  puts "please invite me to visit your home"
end

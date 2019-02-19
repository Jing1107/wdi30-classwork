# while conditional
#  body
# end

# while true
#   print "OMG"
# end


# while runs while something is true
i = 0
while i < 5
  puts "i: #{ i }"
  i += 1
end

#until runs while something is false
i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end

# interators
5.times do
  puts "omg"
end

# or

5.times { puts "omG"}


5.times do |i|
  puts "i: #{ i }"
end

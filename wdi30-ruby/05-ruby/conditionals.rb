a = 3


if a > 5
  puts "a is greeter than 5"
end


grade = 'C'
if grade == 'A'
  puts "you are killing it"
elsif grade == 'B'
  puts "you are coasting fine"
elsif grade == 'C'
  puts "acceptable"
else
  puts "Please see Linna"
end

# case (quivalent to JS's switch BUT it doesn't suck)
grade = 'B'
case grade
when 'A'
  puts "you are killing it"
when 'B'
  puts "you are coasting fine"
when 'C'
  puts "acceptable"
else
  puts "Please see Linna"
end

# Modifier conditional AKA backwards if statement
a = 1000

puts "a is greeter than 5" if a > 5


#Unless -- opposite of if

x = 1
unless x > 2
  puts "X is greeter than 2"
end

# or

puts "x is not greeter than 2" unless x > 2

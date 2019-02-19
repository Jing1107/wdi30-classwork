=begin
Warmup - Raindrops
Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
Examples
28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
You will need to create a raindrops.rb file that can be executable in your terminal.
=end

# print "Enter your number: "
# number = gets.to_i
#
#
# if number % 3 == 0 && number % 5 == 0
#   puts "PlingPlang"
# elsif number % 3 == 0
#   puts "Pling"
# elsif number % 5 == 0
#   puts "Plang"
# elsif number % 7 == 0
#   puts "Plong"
# else
#   p "#{number}"
# end

def raindrops num
#create an empty string that will be appended to
  string = ""
  # is statement to text if number if divisivle by 3, and if so, print out 'Pling' (add Pling to the str)
  # if num % 3 == 0
  #   string += "Pling"
  # end
  # short conditional 'if' statements can be condensed down to a single line
  string += "Pling" if num % 3 == 0

  string += "Plang" if num % 5 == 0

  string += "Plong" if num % 7 == 0

  #If str is empty, ie not a factor of 3,5,7 then return numn(as string)
  string = num.to_s if string.empty?

  # Ruby allows implicit return. Placing this value last in my program is the same as saying return str.
  string
end

p raindrops 28
p raindrops 34
p raindrops 105
p raindrops 1755

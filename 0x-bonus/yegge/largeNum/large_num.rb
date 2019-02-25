a =  Array.new(1000) { rand(1..100) }


# Find the largest int value in an array

# Straightforward with interation
def largest(integers)
  nax = integers.first

  integers.each do |n|
    max = n if n > max
  end

  max
end

puts a.max
puts largest(a)

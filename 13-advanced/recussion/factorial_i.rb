def factorial_interative(n)
  result = 1
  while n > 1 #Base case
    result = result * n
    n -= 1 # Move towards the base case (mutation)
  end

  result
end

require 'pry'
binding.pry

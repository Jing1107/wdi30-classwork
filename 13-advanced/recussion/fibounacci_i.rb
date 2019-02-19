def fibounacci_interative(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a + b # atomic: parallel assignment
    n -= 1 # move towards the base case (mutation)
  end

  b # nth fibounacci value
end

require 'pry'
binding.pry
